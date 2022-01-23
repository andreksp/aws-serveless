const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { createPresignedPost } = require("@aws-sdk/s3-presigned-post");
const { S3Client, GetObjectCommand } =require("@aws-sdk/client-s3");

const config = require('./../config.json');
//folder inside the S3
//const prePath = 'signed-url-demo/'
const prePath = ''
const clientParams = {
  region: config.REGION
}


module.exports.createGetUrl = async (event) => {

  const pathParams = event.pathParameters;
  const client = new S3Client(clientParams);
  const fileName = pathParams.fileKey || null;

  console.log(fileName);
  console.log(fileName);

  if (!fileName) {
    throw new Error("File not found!. Check prepath (folder)")
  }
  const getObjectParams = {
    Bucket: config.S3_BUCKET,
    Key: `${prePath}${fileName}`
  }
  console.log("S3_BUCKET");
  console.log(config.S3_BUCKET);

  console.log("Folder-FileName");
  console.log(getObjectParams.Key);

  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        url
      },
      null,
      2
    ),
  };
};

module.exports.createPostUrl = async (event) => {

  const client = new S3Client(clientParams);
  const key = `${prePath}${(Math.random() + 1).toString(36).substring(2)}`
  const { url, fields } = await createPresignedPost(client, {
    Bucket: config.S3_BUCKET,
    key,
    Expires: 600, //Seconds to expire
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        url,
        fields
      },
      null,
      2
    ),
  };
};