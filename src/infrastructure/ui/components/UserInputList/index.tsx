import { FunctionComponent } from 'react';
import { InfoUser } from '~/domain/entities';
import { UserInputCard, UserInputListWrapper } from './style';

export const UserInputList: FunctionComponent<InfoUser> = ({ date, neckSize, waistSize, weight, height }) => {
  return (
    <UserInputListWrapper>
      <UserInputCard title="height">{height}</UserInputCard>
      <UserInputCard title="weight">{weight}</UserInputCard>
      <UserInputCard title="neckSize">{neckSize}</UserInputCard>
      <UserInputCard title="waistSize">{waistSize}</UserInputCard>
      <UserInputCard title="date">{date}</UserInputCard>
    </UserInputListWrapper>
  );
};
