exports.badRequest = (body) => {
    return { statusCode: 400, body }
}
exports.ok = (body) => {
    return { statusCode: 200, body }
}
