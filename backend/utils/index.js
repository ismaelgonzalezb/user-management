function validateBody(properties, body) {
    const errors = [];

    for (const property of properties) {
        if (!body[property]) {
            errors.push("The property " + property + " is missing!!");
        }
    }
    return errors;

}

module.exports = {
    validateBody
};