const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `PoemsDataJson`) {
    const slug = "/" + node.poem_list + "/"
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPoemsDataJson {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)

  const poems = result.data.allPoemsDataJson.edges

  poems.forEach((poem, index) => {
    const next = index === poems.length - 1 ? null : poems[index + 1].node
    const previous = index === 0 ? null : poems[index - 1].node

    createPage({
      path: poem.node.fields.slug,
      component: path.resolve(`./src/templates/poem-post.js`),
      context: {
        slug: poem.node.fields.slug,
        name: poem.node.id,
        previous,
        next,
      },
    })
  })
}