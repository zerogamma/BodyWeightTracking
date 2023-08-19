import { FunctionComponent } from 'react';
import { UserInputHeaderCard, UserInputHeaderWrapper } from './style';

export const UserInputHeader: FunctionComponent = () => {
  return (
    <UserInputHeaderWrapper>
      <UserInputHeaderCard title="height">Height</UserInputHeaderCard>
      <UserInputHeaderCard title="weight">Weight</UserInputHeaderCard>
      <UserInputHeaderCard title="neckSize">Neck Size</UserInputHeaderCard>
      <UserInputHeaderCard title="waistSize">Waist Size</UserInputHeaderCard>
      <UserInputHeaderCard title="date">Date</UserInputHeaderCard>
    </UserInputHeaderWrapper>
  );
};
