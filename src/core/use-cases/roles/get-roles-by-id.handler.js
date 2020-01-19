module.exports = function GetRolesByIdHandler({ headers, params, query, body, data }) {
    const role = data.connect('roles').find(role => role.id === Number(params.id))
    return {
        status: role ? 200 : 404,
        data: role ? role : {}
    }
}