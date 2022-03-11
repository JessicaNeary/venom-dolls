var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event) => {
    var params = {
        Destination: {
          ToAddresses: ["jessicafneary@gmail.com"],
        },
        Message: {
          Body: {
            Text: { Data: "Purchase made by " + event.customer_details.email },
          },
    
          Subject: { Data: "Test Email" },
        },
        Source: "jessicafneary@gmail.com",
      };
      return ses.sendEmail(params).promise();
};
