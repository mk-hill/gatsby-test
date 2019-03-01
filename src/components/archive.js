import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query PostArchive {
    allMarkdownRemark(limit: 5, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            alien
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={(data) => {
      const { edges: posts } = data.allMarkdownRemark;
      return (
        <aside>
          <h3>Archive</h3>
          {posts.map(({ node }) => {
            const {
              title, alien, slug, date,
            } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/posts${slug}`}>{title}</Link>
                <p>{alien ? 'is an alien' : 'not alien'}</p>
                <p>{date}</p>
              </li>
            );
          })}
        </aside>
      );
    }}
  />
);

export default Archive;
