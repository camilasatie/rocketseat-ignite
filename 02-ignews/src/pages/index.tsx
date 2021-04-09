import { GetStaticProps } from 'next';
import Head from 'next/head';
import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number
  }
}

const ONE_MINUTE = 60;
const ONE_HOUR = 60;
const ONE_DAY = 24;

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span className={styles.welcome}>👏 Hey, welcome</span>
          <h1 className={styles.title}>news about the <span>React</span> world.</h1>
          <p className={styles.description}>
            Get access to all the publications
            <span> for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IeIcIIo9t40rnCiI2I1gvgF');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: ONE_MINUTE * ONE_HOUR * ONE_DAY,
  }
}
