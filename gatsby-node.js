const path = require('path')

const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'ct25eqkvvjm3',
//   accessToken: '8951f4ce95af9751680830365bd42d79c677916e71d065ace4cbed33fa44313a'
// })
// // returns the space object with the above <space-id>
// client.getSpace()
// .then((space) => console.log(space))
// .catch(console.error)


exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog_post.js')
    resolve(
      graphql(`
      {
        allContentfulBlog (limit: 1000) {
          edges {
            node {
              
              title01
              name
              textbox {
                textbox
              }
              price
              priceh
              slug
              image {
                file {
                  url
                }
              }
              
              
                         
               
           }
                   
          }
        }
      }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
