// file is for command-line testing
// uploading files to AWS S3

// include .env access
const dotenv = require('dotenv')
dotenv.config()

// Require AWS Software development Kit
const AWS = require('aws-sdk')

// define bucket name to use
const bucket = 'justinsfishtank'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

module.exports = (key, body) => {
  // Create object of params for upload calls:
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    params.Key = key
    params.Body = body
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// const uploadPromise = s3.putObject(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })
