import { Info, InfoUser, InfoUserHistory } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoUseCase {
  handle: () => IInfoUseCase.output;
}
export namespace IInfoUseCase {
  export type output = Promise<Either<Error, Info[]>>;
}

// User Information
export interface IInfoUserUseCase {
  handle: () => IInfoUserUseCase.output;
}

export namespace IInfoUserUseCase {
  export type output = Promise<Either<Error, InfoUser>>;
}

// History User Information
export interface IInfoUserHistoryUseCase {
  handle: () => IInfoUserHistoryUseCase.output;
}

export namespace IInfoUserHistoryUseCase {
  export type output = Promise<Either<Error, InfoUserHistory>>;
}
