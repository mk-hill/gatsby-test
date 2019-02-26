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
            path
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
              title, alien, path, date,
            } = node.frontmatter;
            return (
              <li key={path}>
                <Link to={`/posts${path}`}>{title}</Link>
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
