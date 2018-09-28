import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Header from '../components/header'
import Layout from '../components/layout'

class BlogPost extends Component {
  render() {
    const {
      title01,
      // textbox,
      slug,
      image,
      price,
      priceh,
      textbox,
    } = this.props.data.contentfulBlog
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="h1">{title01}</p>
            </div>
          </div>
          <div className="col-md-9 mb-3">
            <div className="thumbnail">
              <img src={image.file.url} alt="" className="img-responsive" />
              <div className="caption-full">
                <h4>
                  <s className="float-right">{priceh} &#8377;</s>
                </h4>
                <h4>2 BHK</h4>
                <h4 className="float-right">
                  <span className="lead" style={{ color: 'red' }}>
                    Sale
                  </span>{' '}
                  {price} &#8377; Night/-
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <hr />
          </div>
          <div className="col-md-9">
            <div className="well">
              <blockquote>{textbox.textbox}</blockquote>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

// const IndexPage = ({data}) => (
//   <Layout>
//      <div className="container">
//      <div className="row">
//         <div className="col-sm-8">
//         {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node}/>)}

//       </div>
//       </div>
//      </div>

//   </Layout>
// )

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
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
`
