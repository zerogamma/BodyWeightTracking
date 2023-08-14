import { FunctionComponent } from 'react';
import { UserBodyCalcHeaderCard, UserBodyCalcHeaderWrapper } from './style';

export const UserBodyCalcHeader: FunctionComponent = () => {
  return (
    <UserBodyCalcHeaderWrapper>
      <UserBodyCalcHeaderCard title="Body fat percentage">BFP</UserBodyCalcHeaderCard>
      <UserBodyCalcHeaderCard title="Fat mass">FM</UserBodyCalcHeaderCard>
      <UserBodyCalcHeaderCard title="Lean Mass">LM</UserBodyCalcHeaderCard>
      <UserBodyCalcHeaderCard title="Body Mass Index">BMI</UserBodyCalcHeaderCard>
      <UserBodyCalcHeaderCard title="Body fat percentage (BMI)">BFP(BMI)</UserBodyCalcHeaderCard>
    </UserBodyCalcHeaderWrapper>
  );
};
