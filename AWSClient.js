import AWS from 'aws-sdk';
import {awsS3DevUser, awsmobile} from './aws-exports';
import Amplify, {API} from 'aws-amplify';

API.configure(awsmobile);

export const appSyncGraphQl = async ({query, variables, sort, limit, filter}) => {
  try {
    const res = await Amplify.API.graphql({
      query,
      variables,
      sort,
      limit,
      filter
    });

    console.log('res, filter', res, filter);
    return { status: 200, res: res.data }
  } catch (error) {
    console.log('error', error);
    return { status: 400, res: error }
  }
}

export const getPreSignedUrl = async (key) => {
  const s3Access = new AWS.S3({
    accessKeyId: awsS3DevUser.accessKeyId,
    secretAccessKey: awsS3DevUser.secretAccessKeyId,
    region: awsS3DevUser.region,
  });

  const s3Params = {
    Bucket: awsS3DevUser.bucket,
    Key: key
  };

  const url = await s3Access.getSignedUrl('getObject', s3Params);
  return url;
};
