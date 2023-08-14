import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Logger } from 'aws-amplify';
import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

const logger = new Logger('APINEXT');
export class InfoUserStorage implements IInfoUserStorage {
  async get(): IInfoUserStorage.output {
    logger.info('table Name', process.env.AMPLIFY_STORAGE_TABLES);
    const params = new GetCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES,
      Key: {
        id: '1',
      },
    });

    try {
      const response = await awsClient.send(params);
      return right(response.Item as InfoUser);
    } catch (e) {
      return left(new Error());
    }
  }

  async save(data: InfoUser & InfoUserBody): IInfoUserStorage.success {
    const logger = new Logger('foo');
    logger.info('table Name', process.env.AMPLIFY_STORAGE_TABLES);
    const command = new PutCommand({
      TableName: process.env.AMPLIFY_STORAGE_TABLES,
      Item: data,
    });

    try {
      const response = await awsClient.send(command);
      return response ? right('Success') : left(new Error());
    } catch (error) {
      return left(new Error());
    }
  }
}
