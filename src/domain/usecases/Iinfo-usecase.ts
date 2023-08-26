import { InfoInput, InfoUser, InfoUserBody, InfoUserHistory } from '~/domain/entities';
import { Either } from '~/shared/either';

// Input Information
export interface IInfoInputUseCase {
  handle: () => IInfoInputUseCase.output;
}
export namespace IInfoInputUseCase {
  export type output = Promise<Either<Error, InfoInput[]>>;
}

// User Information
export interface IInfoUserUseCase {
  handle: (param: string) => IInfoUserUseCase.output;
  save: (data: InfoUser & InfoUserBody) => IInfoUserUseCase.saveOutput;
  delete: (itemId: { userId: string; uniqueId: string }) => IInfoUserUseCase.saveOutput;
}

export namespace IInfoUserUseCase {
  export type output = Promise<Either<Error, InfoUser>>;
  export type saveOutput = Promise<Either<Error, 'success'>>;
}

// History User Information
export interface IInfoUserHistoryUseCase {
  handle: (query: string) => IInfoUserHistoryUseCase.output;
}

export namespace IInfoUserHistoryUseCase {
  export type output = Promise<Either<Error, InfoUserHistory>>;
}
