import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Amplify, Logger } from 'aws-amplify';
import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { InfoUserHistory } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

const logger = new Logger('APINEXT', 'INFO');
export class InfoUserHistoryStorage implements IInfoUserHistoryStorage {
  async get(): IInfoUserHistoryStorage.output {
    logger.debug('table Name', process.env.AMPLIFY_STORAGE_TABLES);
    const params = new ScanCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES,
      Select: 'ALL_ATTRIBUTES',
      ExpressionAttributeNames: { '#userId': 'userId' },
      ExpressionAttributeValues: {
        ':userId': '1',
      },
      FilterExpression: '#userId = :userId',
    });

    try {
      const response = await awsClient.send(params);
      const HistoryItem = response.Items as InfoUserHistory;
      return right(HistoryItem);
    } catch (e) {
      logger.error('error happened', e);
      return left(`error ${e}`);
    }
  }
}
