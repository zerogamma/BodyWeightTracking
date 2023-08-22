import { InfoUserHistory } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoUserHistoryStorage {
  get: (query: string) => IInfoUserHistoryStorage.output;
}

export namespace IInfoUserHistoryStorage {
  export type output = Promise<Either<string, InfoUserHistory>>;
}
