import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { awsClient } from '~/shared/aws';
import { left, right } from '~/shared/either';

export class InfoUserStorage implements IInfoUserStorage {
  async get(): IInfoUserStorage.output {
    const params = new GetCommand({
      TableName: process.env.TABLE_NAME,
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
    const command = new PutCommand({
      TableName: process.env.TABLE_NAME,
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
