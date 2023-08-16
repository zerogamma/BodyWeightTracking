import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Logger } from 'aws-amplify';
import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

const logger = new Logger('APINEXT-SAVE');

export class InfoUserStorage implements IInfoUserStorage {
  async get(): IInfoUserStorage.output {
    logger.info('table Name GET', process.env.AMPLIFY_STORAGE_TABLES);
    const params = new GetCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)['BodyInfo'] : 'BodyInfo',
      Key: {
        id: '1',
      },
    });

    try {
      const response = await awsClient.send(params);
      return right(response.Item as InfoUser);
    } catch (e) {
      logger.error('error happened', e);
      return left(`error ${e}`);
    }
  }

  async save(data: InfoUser & InfoUserBody): IInfoUserStorage.success {
    logger.info('table Name save', process.env.AMPLIFY_STORAGE_TABLES);
    const command = new PutCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)['BodyInfo'] : 'BodyInfo',
      Item: data,
    });

    try {
      const response = await awsClient.send(command);
      return response ? right('Success') : left('empty');
    } catch (e) {
      logger.error('error happened', e);
      return left(`error ${e}`);
    }
  }
}
