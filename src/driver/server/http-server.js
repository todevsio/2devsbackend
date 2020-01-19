const express = require('express')
const bodyParser = require('body-parser')
const ExpressServer = require('./express/express-server')

const rootHandler = require('../../core/use-cases/root/root.handler')
const helloHandler = require('../../core/use-cases/say-hello.handler')
const getRolesHandler = require('../../core/use-cases/roles/get-roles.handler')
const getRolesByIdHandler = require('../../core/use-cases/roles/get-roles-by-id.handler')
const addRoleHandler = require('../../core/use-cases/roles/add-role.handler')

const db = require('../db/mock-dataset') // WILL BE REPLACED WITH DB CONTEXT
const Repository = require('../db/repository')

module.exports = class HttpServer {
    constructor() { }

    start() {

        // TODO: Introduce VALIDATORS here to produce bad request further in

        new ExpressServer(express, bodyParser, [
            { method: 'get', path: '/', handler: rootHandler, data: { name: 'Gabriel' } },
            { method: 'get', path: '/hello', handler: helloHandler, data: { name: 'Gabriel' } },
            { method: 'get', path: '/roles', handler: getRolesHandler, data: new Repository(db) },
            { method: 'post', path: '/roles', handler: addRoleHandler, data: new Repository(db) },
            { method: 'get', path: '/roles/:id', handler: getRolesByIdHandler, data: new Repository(db) }
        ]).init()
    }
}

