import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components';

const FeatureImage = styled.img`
max-width: 300px;
margin: 16px 0;
`;

export default ({pageContext}) => (
    <Layout>
        <FeatureImage src={pageContext.featured_media.source_url}/>
        <h1>{pageContext.title}</h1>        
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />        
    </Layout>
    
);