import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// const credentials = {
//   region: configuration.aws.region,
//   credentials: {
//     accessKeyId: configuration.aws.accessKeyId,
//     secretAccessKey: configuration.aws.secretAccessKey,
//   },
// };

export const awsClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
