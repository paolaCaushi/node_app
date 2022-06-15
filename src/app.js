const fastify = require('fastify');
const fastify_swagger = require('@fastify/swagger')

const {productsRoute: todosRoute} = require('./routes/route')

const build = (opts = {}, optsSwagger={}) => {
    const app = fastify(opts)
    app.register(fastify_swagger, optsSwagger)
    app.register(todosRoute)
    return app
}

module.exports = {build}