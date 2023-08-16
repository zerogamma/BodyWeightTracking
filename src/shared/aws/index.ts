import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromEnv } from '@aws-sdk/credential-providers';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

export const awsClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    credentials: fromEnv(),
  })
);
