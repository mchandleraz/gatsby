const path = require(`path`)
const fs = require(`fs-extra`)

exports.createPages = async ({ store, boundActionCreators }) => {
  const { program } = store.getState()
  const { upsertPage } = boundActionCreators
  const currentPath = path.join(__dirname, `./raw_dev-404-page.js`)
  const newPath = path.join(program.directory, `.cache`, `dev-404-page.js`)

  fs.copySync(currentPath, newPath)

  upsertPage({
    component: newPath,
    path: `/dev-404-page/`,
  })
}
