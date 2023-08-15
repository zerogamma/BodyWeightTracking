import { AttributeValue, DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { Logger } from 'aws-amplify';

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
        TableName: 'BodyInfo',
        Key: {
          id: { S: '1' },
        },
      })
    );

    return res.status(200).json(Item);
  }
}
