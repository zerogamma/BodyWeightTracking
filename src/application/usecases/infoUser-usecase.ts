import { IInfoUserStorage } from '~/application/protocols/services';
import { IInfoUserUseCase } from '~/domain/usecases/Iinfo-usecase';
import { left, right } from '~/shared/either';

export class InfoUserUseCase implements IInfoUserUseCase {
  private readonly infoStorage: IInfoUserStorage;
  constructor(infoStorage: IInfoUserStorage) {
    this.infoStorage = infoStorage;
  }

  async handle(): IInfoUserUseCase.output {
    const result = await this.infoStorage.get();

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }
}
