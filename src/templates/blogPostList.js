import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Pagination = styled.div`
display: flex;
justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
border: 1px solid #eee;
background: ${props => props.isCurrentPage ? 'red' : '#fff'}
`
const PageNumber = styled(Link)`
display:block;
padding 8px 16px;
`

export default ({pageContext}) => (
    <Layout>
        {pageContext.posts.map(post =>(
            <div key={post.node.wordpress_id} >
                <h3>{post.node.title}</h3>
                <span>{post.node.date}</span>
                <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                <div>
                    <Link to={`/post/${post.node.slug}`}>
                        Ver Más
                    </Link>
                </div>
            </div>
        ))}
        <Pagination>
        {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                <PageNumberWrapper id={index} isCurrentPage={index+1 === pageContext.currentPage}>
                    <PageNumber to={index === 0 ? '/blog/' : `/blog/${index + 1}`}>
                        {index + 1}
                    </PageNumber>
                </PageNumberWrapper>
        ))}
        </Pagination>
    </Layout>
)