module.exports = function GetRolesHandler({ headers, params, query, body, data }) {
    const roles = data.connect('roles')
    roles.push({ id: roles.length + 1, desc: body.role })

    return { status: 201, data: { path: `roles/${roles.length}` } }
}