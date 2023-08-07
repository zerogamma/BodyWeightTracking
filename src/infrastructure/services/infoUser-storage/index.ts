import { IInfoUserStorage } from '~/application/protocols/services';
import { right } from '~/shared/either';

export class InfoUserStorage implements IInfoUserStorage {
  async get(): IInfoUserStorage.output {
    const data = {
      weight: 68,
      neckSize: 37,
      waistSize: 78,
      height: 178,
      age: 36,
      name: 'Me',
      date: '06/08/2023',
    };
    return right(data);
  }
  async save(): IInfoUserStorage.success {
    return right('Success');
  }
}
