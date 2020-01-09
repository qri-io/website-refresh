const componentWithMDXScope = require("gatsby-plugin-mdx/component-with-mdx-scope");
const path = require("path");
const startCase = require("lodash.startcase");

// [ fromPath, toPath ]
const redirects = [
  ['/blog/*', 'https://medium.com/qri-io'],
  ['/blog', 'https://medium.com/qri-io'],
  ['/desktop', '/download'],
  ['/desktop/getting-started', '/docs/getting-started/qri-desktop-quickstart'],
  ['/docs/concepts/content-addressing', '/docs/reference/content-addressing'],
  ['/docs/concepts/dataset', '/docs/dataset-components/overview'],
  ['/docs/concepts/ipfs_to_qri', '/docs/reference/ipfs_to_qri'],
  ['/docs/concepts/overview', '/docs/getting-started/what-is-qri'],
  ['/docs/concepts/*', '/docs'],
  ['/docs/concepts', '/docs'],
  ['/docs/tutorials/cli-quickstart', '/docs/getting-started/qri-cli-quickstart'],
  ['/docs/tutorials/*', '/docs'],
  ['/docs/tutorials', '/docs'],
  ['/docs/reference/starlark_syntax', '/docs/starlark/syntax'],
  ['/docs/reference/starlark_examples', '/docs/starlark/examples'],
  ['/docs/reference/starlib', '/docs/starlark/starlib'],
  ['/docs/reference', '/docs'],
  ['/docs/workflows', '/docs']
]

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // redirects
  redirects.forEach(([ fromPath, toPath ]) => {
    createRedirect({
      fromPath,
      toPath
    })
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : "/",
            component: path.resolve("./src/layouts/docs.js"),
            context: {
              id: node.fields.id,
              layout: 'docs'
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        buble: '@philpl/buble' // to reduce bundle size
      }
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from"
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: "id",
      node,
      value: node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || startCase(parent.name)
    });

    createNodeField({
      name: "weight",
      node,
      value: node.frontmatter.weight
    });
  }
};
