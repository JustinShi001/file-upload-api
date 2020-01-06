// file is for command-line testing
// uploading files to AWS S3

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
