import moment from 'moment';
import { FunctionComponent } from 'react';
import { InfoUser } from '~/domain/entities';
import { UserInputCard, UserInputListWrapper } from './style';

export const UserInputList: FunctionComponent<InfoUser> = ({ date, neckSize, waistSize, weight, height }) => {
  return (
    <UserInputListWrapper>
      <UserInputCard title="date">{moment(date).format('DD/MM/YY')}</UserInputCard>
      <UserInputCard title="height">{height}</UserInputCard>
      <UserInputCard title="weight">{weight}</UserInputCard>
      <UserInputCard title="neckSize">{neckSize}</UserInputCard>
      <UserInputCard title="waistSize">{waistSize}</UserInputCard>
    </UserInputListWrapper>
  );
};
