import { IInfoInputStorage } from '~/application/protocols/services';
import { right } from '~/shared/either';

export class InfoInputStorage implements IInfoInputStorage {
  async get(): IInfoInputStorage.output {
    const data = [
      { label: 'Name', description: 'your name', id: 'name' },
      { label: 'Age', description: 'your age', id: 'age' },
      {
        label: 'Weight',
        description: 'your weight in kg',
        id: 'weight',
      },
      {
        label: 'Neck Size',
        description: 'your neck size in cm',
        id: 'neckSize',
      },
      {
        label: 'Waist Size',
        description: 'your waist size in cm',
        id: 'waistSize',
      },
      {
        label: 'Height',
        description: 'your height in cm',
        id: 'height',
      },
    ];
    return right(data);
  }
}
