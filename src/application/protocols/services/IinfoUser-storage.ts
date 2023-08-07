import { InfoUser, InfoUserBody } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoUserStorage {
  get: () => IInfoUserStorage.output;
  save: (params: InfoUser & InfoUserBody) => IInfoUserStorage.success;
}

export namespace IInfoUserStorage {
  export type output = Promise<Either<Error, InfoUser>>;
  export type success = Promise<Either<Error, 'Success'>>;
}
