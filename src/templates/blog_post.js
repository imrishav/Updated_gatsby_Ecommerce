import React, { Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title01,
      // textbox,
      slug
      
    } = this.props.data.contentfulBlog
    return (
      <div>
        <h1>{title01}</h1>
        
        <h1>{slug}</h1>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
query blogPostQuery($slug: String!){
  contentfulBlog(slug: {eq: $slug}) {
    title01
    name
    textbox {
      textbox
    }
    slug
    
  }
}`