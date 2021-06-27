const errorHandler = (req, res, error) => {
    res.setHeader("Content-type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    const result = {
        success: false,
        data: null,
        message: error.message,
        processingTimeMillis: (new Date().getTime() - req.startTime),
        customMsg: error.message,
        coreException: error.coreException
    };
    error.httpCode = error.httpCode || 401;
    return res.status(error.httpCode).send(result);
};

module.exports = errorHandler;
