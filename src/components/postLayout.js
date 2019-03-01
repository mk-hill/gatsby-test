import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

class postLayout {
  render() {
    return (
      <Layout>
        <h1>Post layout</h1>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostDetails {
    markdownRemark(frontmatter: { slug: { eq: "/third-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default postLayout;
