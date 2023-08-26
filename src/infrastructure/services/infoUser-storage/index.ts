import { DeleteCommand, PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { Logger } from 'aws-amplify';
import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';
import { tableName } from '../config';

const logger = new Logger('APINEXT-SAVE');

export class InfoUserStorage implements IInfoUserStorage {
  async get(userId: string): IInfoUserStorage.output {
    const params = new QueryCommand({
      TableName: tableName,
      ProjectionExpression: 'height,age',
      Limit: 1,
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId',
      },
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    });

    try {
      const client = await awsClient();
      const response = await client.send(params);
      const validated = response.Items ? response.Items[0] : {};
      return right(validated as InfoUser);
    } catch (e) {
      logger.error('error InfoUser Get: ', e);
      return left(`error ${e}`);
    }
  }

  async save(data: InfoUser & InfoUserBody): IInfoUserStorage.success {
    const command = new PutCommand({
      TableName: tableName,
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

  async delete(itemId: { userId: string; uniqueId: string }): IInfoUserStorage.success {
    console.log(itemId);
    const command = new DeleteCommand({
      TableName: tableName,
      Key: itemId,
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
