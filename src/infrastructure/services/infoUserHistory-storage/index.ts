import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, GetCommand } from '@aws-sdk/lib-dynamodb';
import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { InfoUser } from '~/domain/entities';
import { left, right } from '~/shared/either';

const client = DynamoDBDocument.from(new DynamoDB({ region: process.env.AWS_REGION }));

export class InfoUserHistoryStorage implements IInfoUserHistoryStorage {
  async get(): IInfoUserHistoryStorage.output {
    // const data = mockHistory;
    const params = new GetCommand({
      TableName: process.env.TABLE_NAME,
      Key: {
        id: '1',
      },
    });

    try {
      const response = await client.send(params);
      const HistoryItem = [response.Item as InfoUser];
      return right(HistoryItem);
    } catch (e) {
      return left(new Error());
    }
  }
}
