import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismic";

import styles from './post.module.scss';

interface PostsProps {
  post : {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Posts({ post }: PostsProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.contentWrapper}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.content} 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  // buscar os cookies para saber e o usuário está logado ou não
  const session = await getSession({ req });

  // buscar o slug através do params 
  const { slug } = params;

  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID('post', String(slug), {});

  // formatar em HTML o conteudo do post
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }
  // se não estiver logado, irá fazer um redirect

}
