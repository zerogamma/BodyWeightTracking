import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { Amplify, Logger } from 'aws-amplify';
import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { InfoUserHistory } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';
import { tableName } from '../config';

Amplify.Logger.LOG_LEVEL = 'INFO';

const logger = new Logger('APINEXT', 'INFO');
export class InfoUserHistoryStorage implements IInfoUserHistoryStorage {
  async get(query: string): IInfoUserHistoryStorage.output {
    const params = new QueryCommand({
      TableName: tableName,
      Select: 'ALL_ATTRIBUTES',
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId',
      },
      ExpressionAttributeValues: {
        ':userId': query,
      },
      IndexName: 'userId-date-index',
      ScanIndexForward: false,
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
