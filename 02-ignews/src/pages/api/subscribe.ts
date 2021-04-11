import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/client';
import { query as q } from 'faunadb';

import { fauna } from "../../services/fauna";
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string;
  }
  data: {
    stripe_customer_id: string;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST'){
    // criar o usuário no stripe
    // buscando info do usuário através dos cookies. 
    // Não é possível user o session  pois não funciona nesta camada (api do next)

    const session = await getSession({ req });

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    );

    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
      })

      // checar se o cliente já está cadastrado no stripe
      await fauna.query(
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: {
              stripe_customer_id: stripeCustomer.id,
            }
          }
        )
      );

      customerId = stripeCustomer.id;
    }

    const StripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1IeIcIIo9t40rnCiI2I1gvgF', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

    return res.status(200).json({ sessionId: StripeCheckoutSession.id})
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
