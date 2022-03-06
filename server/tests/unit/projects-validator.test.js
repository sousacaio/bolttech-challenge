const ProjectsValidator = require("../../src/validation/projects")


describe('login-validator', () => {

    const sut = new ProjectsValidator()

    it('should return 403 if there is no data', () => {
        const result = sut.handle()
        expect(result.statusCode).toBe(403)
    })
})