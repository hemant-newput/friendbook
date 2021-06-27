
class CustomError extends Error {
    name;
    message;
    stack;
    statusCode;
    data;
    coreException;
    type;

    constructor(error, message = "") {
        super("Custom Error");
        this.name = this.constructor.name;
        this.statusCode = error.statusCode || 401;
        Error.captureStackTrace(this, this.constructor);
        this.message = message || this.mapErrorMessage(error);
        this.data = []
        this.coreException = error.coreException && error.coreException.stack
    }
    mapErrorMessage(error) {
        return error.message;
    }
}

module.exports = CustomError