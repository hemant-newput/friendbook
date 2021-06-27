const sanitizeHtml = require('sanitize-html');
const successResponse = function (req, res, data, customMsg) {
    res.setHeader("Content-type", "application/json; charset=utf-8");

    let dataText = JSON.stringify(data.data || {});
    let sanitizedText = sanitizeHtml(dataText).replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'");
    let sanitizedJSONData = JSON.parse(sanitizedText);
    let sanitizedCustomMsg = sanitizeHtml(data.customMessage).replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'");
    let sanitizedStartTime = sanitizeHtml(req.startTime);

    const result = {
      "success": true,
      "data": sanitizedJSONData,
      "error": null,
      "processingTimeMillis": (new Date().getTime() - sanitizedStartTime),
      "customMsg": sanitizedCustomMsg
    };
    return res.status(200).send(result);
  }

  module.exports = successResponse;