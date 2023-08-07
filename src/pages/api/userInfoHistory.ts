import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          id: { S: '1' },
        },
      })
    );

    return res.status(200).json(Item);
  }
}
