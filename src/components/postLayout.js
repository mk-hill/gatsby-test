import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

const postLayout = (props) => {
  const { markdownRemark } = props.data;
  console.log(props);
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query PostDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default postLayout;
