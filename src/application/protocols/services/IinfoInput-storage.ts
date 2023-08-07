import { InfoInput } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoInputStorage {
  get: () => IInfoInputStorage.output;
}

export namespace IInfoInputStorage {
  export type output = Promise<Either<Error, InfoInput[]>>;
}
