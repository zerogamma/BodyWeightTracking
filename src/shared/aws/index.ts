import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Amplify, Auth, Logger } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const logger = new Logger('AWSDYNAMO');

const getSettings = async () => {
  logger.info('loading credential');
  const credentials = await Auth.currentCredentials();

  return new DynamoDBClient({
    region: process.env.AMPLIFY_STORAGE_REGION as string,
    apiVersion: '2012-08-10',
    credentials: credentials,
  });
};

export const awsClient = async () => {
  const dynamoClient = await getSettings();
  return DynamoDBDocumentClient.from(dynamoClient);
};
