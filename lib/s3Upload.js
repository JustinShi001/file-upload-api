// file is for command-line testing
// uploading files to AWS S3

// include .env access
const dotenv = require('dotenv')
dotenv.config()

// Require AWS Software development Kit
const AWS = require('aws-sdk')
// not sure if we need this:
// UUID Package
const uuid = require('uuid')

// define bucket name to use
const bucket = 'justinsfishtank'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject calls:
const params = {
  Bucket: bucket,
  Key: 'file-test.txt',
  Body: 'Hellow World!'
}

// const uploadPromise = s3.putObject(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })

s3.putObject(params).promise()
  .then(console.log)
  .catch(console.error)
