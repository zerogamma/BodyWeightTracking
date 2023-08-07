import { InfoUserHistory } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoUserHistoryStorage {
  get: () => IInfoUserHistoryStorage.output;
}

export namespace IInfoUserHistoryStorage {
  export type output = Promise<Either<Error, InfoUserHistory>>;
}
