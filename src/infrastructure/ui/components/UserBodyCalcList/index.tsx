import { FunctionComponent } from 'react';
import { InfoUserBody } from '~/domain/entities';
import { UserBodyCalcCard, UserBodyCalcListWrapper } from './style';

export const UserBodyCalcList: FunctionComponent<InfoUserBody> = ({ BFP, FM, LM, BMI, BFPBMI }) => {
  return (
    <UserBodyCalcListWrapper>
      <UserBodyCalcCard title="Body fat percentage">{BFP?.toFixed(2)}</UserBodyCalcCard>
      <UserBodyCalcCard title="Fat mass">{FM?.toFixed(2)}</UserBodyCalcCard>
      <UserBodyCalcCard title="Lean Mass">{LM?.toFixed(2)}</UserBodyCalcCard>
      <UserBodyCalcCard title="Body Mass Index">{BMI?.toFixed(2)}</UserBodyCalcCard>
      <UserBodyCalcCard title="Body fat percentage (BMI)">{BFPBMI?.toFixed(2)}</UserBodyCalcCard>
    </UserBodyCalcListWrapper>
  );
};
