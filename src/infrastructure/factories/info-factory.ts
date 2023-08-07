import { InfoUseCase, InfoUserHistoryUseCase, InfoUserUseCase } from '~/application/usecases';
import { InfoStorage, InfoUserHistoryStorage, InfoUserStorage } from '~/infrastructure/services';

export const InfoFactory = () => {
  const infoStorage = new InfoStorage();
  const infoUseCase = new InfoUseCase(infoStorage);
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
