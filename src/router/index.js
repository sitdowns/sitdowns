const routes = require('./routes')

const routeHandler = app => {
    routes.forEach(route => {
        const routed = app.route(route.path)
        route.controllers(routed)
        console.log(`serving ${route.type} ${route.path}`)
    })
}

module.exports = routeHandler
