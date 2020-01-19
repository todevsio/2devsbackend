/**
 * TODO: REMOVE THIS
 */

module.exports = function RootHandler({ headers, params, query, body, data }) {
    const msg = 
    `
    <h3>Attempt to reach <h1>/roles</h1> for an example!</h3>
    `
    return { status: 200, data: msg }
}