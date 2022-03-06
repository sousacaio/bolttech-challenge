exports.badRequest = (body) => {
    return { statusCode: 400, body }
}
exports.forbidden = (body) => {
    return { statusCode: 403, body }
}
exports.ok = (body) => {
    return { statusCode: 200, body }
}
