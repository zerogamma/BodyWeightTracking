import { AttributeValue, DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { Amplify, Logger } from 'aws-amplify';
import awsExports from '~/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });
const client = new DynamoDBClient({});
const logger = new Logger('APINEXT');

export default async function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: Record<string, AttributeValue> | undefined): any; new (): any };
    };
  }
) {
  if (req.method === 'GET') {
    logger.info('table Name', process.env.AMPLIFY_STORAGE_TABLES);
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: process.env.AMPLIFY_STORAGE_TABLES,
        Key: {
          id: { S: '1' },
        },
      })
    );

    return res.status(200).json(Item);
  }
}
