import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromCognitoIdentity } from '@aws-sdk/credential-providers';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const credentials = {
  credentials: fromCognitoIdentity({
    identityId: 'arn:aws:amplify:us-east-1:565157000051:apps/d19tcmdm1t8i2u',
    customRoleArn: 'arn:aws:iam::565157000051:role/amplifyconsole-backend-role',
  }),
};

export const awsClient = DynamoDBDocumentClient.from(new DynamoDBClient(credentials));
