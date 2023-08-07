import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { InfoUserHistory } from '~/domain/entities';
import { left, right } from '~/shared/either';

const client = DynamoDBDocument.from(new DynamoDB({ region: process.env.AWS_REGION }));

export class InfoUserHistoryStorage implements IInfoUserHistoryStorage {
  async get(): IInfoUserHistoryStorage.output {
    const params = new ScanCommand({
      TableName: process.env.TABLE_NAME,
      Select: 'ALL_ATTRIBUTES',
      ExpressionAttributeNames: { '#userId': 'userId' },
      ExpressionAttributeValues: {
        ':userId': '1',
      },
      FilterExpression: '#userId = :userId',
    });

    try {
      const response = await client.send(params);
      const HistoryItem = response.Items as InfoUserHistory;
      return right(HistoryItem);
    } catch (e) {
      return left(new Error());
    }
  }
}
