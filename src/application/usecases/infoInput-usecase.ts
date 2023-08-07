import { IInfoInputStorage } from '~/application/protocols/services';
import { IInfoInputUseCase } from '~/domain/usecases/Iinfo-usecase';
import { left, right } from '~/shared/either';

export class InfoInputUseCase implements IInfoInputUseCase {
  private readonly infoStorage: IInfoInputStorage;
  constructor(infoStorage: IInfoInputStorage) {
    this.infoStorage = infoStorage;
  }

  async handle(): IInfoInputUseCase.output {
    const result = await this.infoStorage.get();

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }
}
