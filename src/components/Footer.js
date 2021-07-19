import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";


const Footer = () => (
    <StaticQuery query= { graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {name:{eq:"Footer"}}) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
    `} render={ props => (
        <div>
            {props.allWordpressWpApiMenusMenusItems.nodes[0].name.items.map( item => (
                <Link to={`/${item.object_slug}`} key={item.title}>
                    {item.title}
                </Link>
            ))}
        </div>
    )} />
);

export default Footer;