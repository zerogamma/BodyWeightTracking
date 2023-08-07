import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

export const awsClient = DynamoDBDocument.from(new DynamoDB({ region: process.env.REGION }));
