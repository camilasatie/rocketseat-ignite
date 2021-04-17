import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../../services/prismic";

import styles from '../post.module.scss';

interface PostsPreviewProps {
  post : {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostsPreview({ post }: PostsPreviewProps) {
  const [session] = useSession();
  const router = useRouter();
  const contentClass = [styles.content, styles.contentPreview];

  useEffect(()=>{
    if (session?.activeSubscription) {
      router.push(`/posts/$post.slug`)
    }
  },[session])

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
            className={contentClass.join(' ')} 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a >Subscribe now!</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // buscar o slug através do params 
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  // formatar em HTML o conteudo do post
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0,2)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    },
    redirect: 60 * 30,
  }
}
