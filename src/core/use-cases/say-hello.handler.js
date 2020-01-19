/**
 * TODO: REMOVE THIS
 */

module.exports = function HelloHandler({ headers, params, query, body, data }) {
    const msg = data ? `Hello, ${data.name}!` : 'Hello World!'
    return { status: 200, data: msg }
}