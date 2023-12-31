import { IInfoUserStorage } from '~/application/protocols/services';
import { InfoUser, InfoUserBody } from '~/domain/entities';
import { IInfoUserUseCase } from '~/domain/usecases/Iinfo-usecase';
import { left, right } from '~/shared/either';

export class InfoUserUseCase implements IInfoUserUseCase {
  private readonly infoStorage: IInfoUserStorage;
  constructor(infoStorage: IInfoUserStorage) {
    this.infoStorage = infoStorage;
  }

  async handle(param: string): IInfoUserUseCase.output {
    const result = await this.infoStorage.get(param);

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }

  async save(data: InfoUser & InfoUserBody): IInfoUserUseCase.saveOutput {
    const result = await this.infoStorage.save(data);
    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }
    return right('success');
  }

  async delete(itemId: { userId: string; uniqueId: string }): IInfoUserUseCase.saveOutput {
    const result = await this.infoStorage.delete(itemId);
    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }
    return right('success');
  }
}
