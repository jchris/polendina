const defaultOptions = {
  reporter: 'spec'
}

function loader (src) {
  return src
}

loader.pitch = function pitch (remainingRequest) {
  const options = Object.assign(defaultOptions, this.query)

  return `
    require("!script-loader!mocha/mocha.js");
    mocha.setup({ reporter: '${options.reporter}', ui: 'bdd' })
    require(${JSON.stringify(`!!${remainingRequest}`)})
  `
}

module.exports = loader