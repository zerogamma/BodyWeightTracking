import { IInfoUserHistoryStorage } from '~/application/protocols/services';
import { IInfoUserHistoryUseCase } from '~/domain/usecases/Iinfo-usecase';

import { left, right } from '~/shared/either';

export class InfoUserHistoryUseCase implements IInfoUserHistoryUseCase {
  private readonly infoStorage: IInfoUserHistoryStorage;
  constructor(infoStorage: IInfoUserHistoryStorage) {
    this.infoStorage = infoStorage;
  }

  async handle(): IInfoUserHistoryUseCase.output {
    const result = await this.infoStorage.get();

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }
}
