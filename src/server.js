const {build}= require('./app')

const app = build({logger: true}, {exposeRoute: true, routePrefix: '/docs', swagger: {info:{title: "Fastify API", version: "1.0.0"}}})

app.listen({port: 3000})