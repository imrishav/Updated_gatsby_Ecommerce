import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
const BlogPost = ({ node }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card" style={{ padding: '10px 20px ' }}>
            <div className="card-body">
              <h5>{node.name}</h5>
              <img src={node.image.file.url} alt="" className="card-img-top" />

              <s className="text-success" style={{ fontSize: '30px' }}>
                {node.price} Rs/-
              </s>
              <h6
                className="float-right text-danger"
                style={{ fontSize: '30px' }}
              >
                {node.priceh} now At Rs/-
              </h6>

              <Link to={node.slug}>
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block float-right mx"
                >
                  Book Now
                </button>
              </Link>
              <hr />
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

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="jumbotron">
            <h2 className="mb-0 text-center display-4">BOOK HOMES ON RENT</h2>
          </div>
        </div>
      </div>
    </div>
    {data.allContentfulBlog.edges.map(edge => (
      <BlogPost node={edge.node} />
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
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
