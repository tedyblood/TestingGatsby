import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components';


const PortfolioWrapper = styled.div`
display:flex;
`

const PortfolioItem = styled.div`
width: 300px;
border: 1px solid #efefef;
padding: 16px;
margin: 16px;
`

const PortfolioImage = styled.img`
max-width: 100%;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={ graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                excerpt
                content
                slug
                title
                featured_media {
                  source_url
                }
              }
            }
          }
        }
        `} render=
        { 
          props => 
            (
              <PortfolioWrapper>
                  {
                    props.allWordpressWpPortfolio.edges.map
                    (
                      portfolioItem => 
                        (
                          <PortfolioItem key={portfolioItem.id}>
                            <h2>{portfolioItem.node.title}</h2>
                            <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="some thumb" />
                            <div dangerouslySetInnerHTML= {{__html: portfolioItem.node.excerpt}}/>
                            <Link to={`/portfolio/${portfolioItem.node.slug}`}> Read More ..</Link>
                            <hr/>
                          </PortfolioItem>                
                        )
                    )
                  }
              </PortfolioWrapper>
            )
        }
        />
    )
}

export default PortfolioItems