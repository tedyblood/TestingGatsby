import React from 'react'
import Layout from '../components/layout';

export default ({pageContext}) => (
    <div>
        <h1>
            {pageContext.title}
        </h1>
        <div>
            <p dangerouslySetInnerHTML={{__html: pageContext.content}} ></p>
            
        </div>
    </div>
);