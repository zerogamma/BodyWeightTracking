import { InfoUser, InfoUserBody } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoUserStorage {
  get: (params: string) => IInfoUserStorage.output;
  save: (params: InfoUser & InfoUserBody) => IInfoUserStorage.success;
}

export namespace IInfoUserStorage {
  export type output = Promise<Either<string, InfoUser>>;
  export type success = Promise<Either<string, 'Success'>>;
}
