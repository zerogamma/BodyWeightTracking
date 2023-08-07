import { InfoInputUseCase, InfoUserHistoryUseCase, InfoUserUseCase } from '~/application/usecases';
import { InfoInputStorage, InfoUserHistoryStorage, InfoUserStorage } from '~/infrastructure/services';

export const InfoFactory = () => {
  const infoInputStorage = new InfoInputStorage();
  const infoUseCase = new InfoInputUseCase(infoInputStorage);
  return infoUseCase;
};

export const InfoUserFactory = () => {
  const infoUserStorage = new InfoUserStorage();
  const infoUserUseCase = new InfoUserUseCase(infoUserStorage);
  return infoUserUseCase;
};

export const InfoUserHistoryFactory = () => {
  const infoHistoryStorage = new InfoUserHistoryStorage();
  const infoUseHistoryCase = new InfoUserHistoryUseCase(infoHistoryStorage);
  return infoUseHistoryCase;
};
