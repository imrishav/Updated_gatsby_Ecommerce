import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
const BlogPost  = ({node}) => {
  return (
    <div className="container">
       <div className="row">
        <div className="col-sm-8">
            <div className="card">
            <img src={node.image.file.url} alt="" className="card-img-top"/>
            <div className="card-body">
                <Link to={node.slug}>{node.title01}</Link>
                <h5>{node.name}</h5>
                <h6>{node.price} Rs/-</h6>
                <span>{node.priceh} now At Rs/-</span>
                

               
            </div>
        
      </div> 
        
        </div>
       
       </div>   
        
            
      
    </div>
    
    
    
    
    // <div>
    //   <Link to={node.slug}>{node.title01}</Link>
    //   <p>{node.textbox.textbox}</p>
    //   <img src={node.image.file.url} alt="" className="img-thumbnail"/>
      
    // </div>
  )
}

const IndexPage = ({data}) => (
  <Layout>
     <div className="container">
     <div className="row">
        <div className="col-sm-8">
        {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node}/>)} 

      </div>
      </div>
     </div>   
    
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(filter:{
      node_locale: {eq: "en-US"}
    }){
        edges {
          node {
            title01
            name
            textbox {
              textbox
            }
            price
            priceh
            image {
              file {
                url
              }
            }
            
            slug
          }
        }
    }

  }
`