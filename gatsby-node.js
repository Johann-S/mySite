exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/, // fix bootstrap import during the build
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
