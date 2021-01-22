#!/bin/zsh
BUCKET_NAME=shubh-react-apps
BUCKET_EXISTS=$(aws s3api list-buckets | jq -r '.Buckets[] | select(.Name | contains("shubh-react-apps")) | .Name')
if  [[ -n "$BUCKET_EXISTS" ]] && [[ "$BUCKET_NAME" == "$BUCKET_EXISTS" ]] ; then
  echo "The AWS S3 bucket ${BUCKET_NAME} exists"
else
  echo "The AWS S3 bucket ${BUCKET_NAME} does not exist, creating bucket"
  BUCKET_CREATED=$(aws s3api create-bucket --bucket ${BUCKET_NAME} | jq -r ".Location")
  if [ ! -z ${BUCKET_CREATED} ]; then
    echo "The AWS S3 bucket ${BUCKET_NAME} created"
  else
    echo "Something went wrong in creating bucket"
    exit 1
    fi
fi
echo "Uploading build to S3 bucket ${BUCKET_NAME}"
aws s3 cp --recursive build ${BUCKET_NAME}/base-web-client/build
EXIT_CODE=$?
echo "Finished uploading build"
exit ${EXIT_CODE}
