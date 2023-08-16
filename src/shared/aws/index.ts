import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const getSettings = () => {
  return new DynamoDBClient({
    region: process.env.AMPLIFY_STORAGE_REGION as string,
  });
};

export const awsClient = DynamoDBDocumentClient.from(getSettings());
