module.exports = class ExpressServer {
    constructor(
        express,
        parser,
        routers = [
            {
                method: 'get',
                path: '/',
                handler: defaultHandler,
                data: {}
            }
        ], config = {
            port: process.env.PORT || 3000
        }) {
        this.app = express()
        this.router = express.Router()
        this.parser = parser
        this.routers = routers
        this.config = config
    }

    initRoutes() {
        this.routers.forEach(router => {
            this.router[router.method](router.path, (req, res) => {
                try {
                    const result = router.handler({
                        headers: req.headers,
                        params: req.params,
                        query: req.query,
                        body: req.body,
                        data: router.data
                    })

                    // TODO: INTRODUCE ABSTRACTION LAYER FOR SEGREGATING HANDLER AND STATUS CODES RESPONSABILITIES
                    // TODO: INTRODUCE VALIDATION

                    res.status(result.status).send(result.data)
                } catch (err) {
                    res.status(500).send({message: 'An Internal Server Error Ocurred'})
                }
            })
        })
    }

    init() {
        this.initRoutes()
        this.app.use(this.parser.json({ extended: false }))
        this.app.use(this.parser.urlencoded({ extended: false }))
        this.app.use(this.router)
        this.app.listen(this.config.port, () => console.log(`Server listening on ${this.config.port}`))
    }
}

function defaultHandler(req, res) {
    res.send({ message: 'Request Reached Server', time: `${new Date().toString()}` })
}