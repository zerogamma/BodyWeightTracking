import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Logger } from 'aws-amplify';
import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

const logger = new Logger('APINEXT-SAVE');

export class InfoUserStorage implements IInfoUserStorage {
  async get(userId: string): IInfoUserStorage.output {
    const table = process.env.MAIN_TABLE as string;
    const params = new GetCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)[table] : table,
      Key: {
        id: userId,
      },
    });

    try {
      const client = await awsClient();
      const response = await client.send(params);
      return right(response.Item as InfoUser);
    } catch (e) {
      logger.error('error InfoUser Get: ', e);
      return left(`error ${e}`);
    }
  }

  async save(data: InfoUser & InfoUserBody): IInfoUserStorage.success {
    const table = process.env.MAIN_TABLE as string;
    const command = new PutCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)[table] : table,
      Item: data,
    });

    try {
      const client = await awsClient();
      const response = await client.send(command);
      return response ? right('Success') : left('empty');
    } catch (e) {
      logger.error('error Form Save: ', e);
      return left(`error ${e}`);
    }
  }
}
