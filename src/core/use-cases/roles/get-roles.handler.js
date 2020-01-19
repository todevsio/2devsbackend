module.exports = function GetRolesHandler({ headers, params, query, body, data }) {
    const roles = data.connect('roles')
    return { status: 200, data: roles }
}