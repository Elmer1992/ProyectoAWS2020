const AWS = require('aws-sdk');


const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.viewcontract = (event, context, callback) => {
    var params = {
        TableName: 'images-s3-dev'
    };

    const Scan = (err, data) => {
        if (err) {
            console.info(err);
            return callback(err, {
                statusCode: 403,
                body: JSON.stringify({
                    data: []
                })
            })
        } else {
            console.info(data.Items)
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    data: data.Items
                })
            });
        }
    }

    DynamoDB.scan(params, Scan)
}