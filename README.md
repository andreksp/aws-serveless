# Aws-serveless
Deploy Serveless services on AWS

# Commands

```
#install servless framework
npm install -g serverless

#install aws package for node.js
npm i @aws-sdk/s3-request-presigner
npm i @aws-sdk/s3-presigned-post
npm i @aws-sdk/client-s3

#run only to create the project
sls create -n aws-servless -t s3-signed-url

#deploy on AWS
sls deploy
```


# S3-signed-urls result

Service Information
service: s3-signed-url
stage: dev
region: sa-east-1
stack: s3-signed-url-dev
resources: 21
api keys:
  None
endpoints:
  GET - https://vs41t1mpmk.execute-api.sa-east-1.amazonaws.com/dev/object/{fileKey}
  eg.  https://vs41t1mpmk.execute-api.sa-east-1.amazonaws.com/dev/object/favicon.ico
  GET - https://vs41t1mpmk.execute-api.sa-east-1.amazonaws.com/dev/upload-url
functions:
  create-get-url: s3-signed-url-dev-create-get-url
  create-post-url: s3-signed-url-dev-create-post-url
layers:
  None


# Reference
https://github.com/enricop89/aws-serverless-samples
https://www.youtube.com/watch?v=fgG2HQWNelI