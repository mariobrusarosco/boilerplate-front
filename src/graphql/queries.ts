import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      body {
        html
      }
    }
  }
`;
