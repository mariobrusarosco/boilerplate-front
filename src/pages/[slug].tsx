import client from 'graphql/client';
import { GetStaticProps } from 'next';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';
import { GET_PAGES, GET_PAGE_BY_SLUG } from '../graphql/queries';
// import test from './queries/get-pages.graphql';

export default function Page({ heading, body }: PageTemplateProps) {
  return <PageTemplate heading={heading} body={body} />;
}

export const getStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES);

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  console.log({ paths });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: params?.slug || ''
  });

  if (!page) return { notFound: true };

  return {
    props: { heading: page.heading, body: page.body?.html }
  };
};
