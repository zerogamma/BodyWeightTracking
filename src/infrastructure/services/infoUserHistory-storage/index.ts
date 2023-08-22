import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Amplify, Logger } from 'aws-amplify';
import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { InfoUserHistory } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

Amplify.Logger.LOG_LEVEL = 'INFO';

const logger = new Logger('APINEXT', 'INFO');
export class InfoUserHistoryStorage implements IInfoUserHistoryStorage {
  async get(query: string): IInfoUserHistoryStorage.output {
    const table = process.env.MAIN_TABLE as string;
    const params = new ScanCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)[table] : table,
      Select: 'ALL_ATTRIBUTES',
      ExpressionAttributeNames: { '#userId': 'userId' },
      ExpressionAttributeValues: {
        ':userId': query,
      },
      FilterExpression: '#userId = :userId',
    });

    try {
      const client = await awsClient();
      const response = await client.send(params);
      const HistoryItem = response.Items as InfoUserHistory;
      return right(HistoryItem);
    } catch (e) {
      logger.error('error History Get: ', e);
      return left(`error ${e}`);
    }
  }
}
