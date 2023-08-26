import { FunctionComponent } from 'react';
import { InfoUserBody } from '~/domain/entities';
import { Status } from '~/ui/components/Status/Status';
import { UserBodyCalcCard, UserBodyCalcListWrapper } from './style';

export const UserBodyCalcList: FunctionComponent<
  InfoUserBody & { withStatus: { BFPS: string; FMS: string; LMS: string; BMIS: string; BFPBMIS: string } | null }
> = ({ BFP, FM, LM, BMI, BFPBMI, withStatus }) => {
  return (
    <UserBodyCalcListWrapper>
      <UserBodyCalcCard title="Body fat percentage">
        {BFP?.toFixed(2)}
        <p className="text-xs mt-1">%</p>
        {withStatus && <Status type={withStatus.BFPS} />}
      </UserBodyCalcCard>
      <UserBodyCalcCard title="Fat mass">
        {FM?.toFixed(2)}
        <p className="text-xs mt-0">Kg</p>
        {withStatus && <Status type={withStatus.FMS} />}
      </UserBodyCalcCard>
      <UserBodyCalcCard title="Lean Mass">
        {LM?.toFixed(2)}
        <p className="text-xs mt-0">Kg</p>
        {withStatus && <Status type={withStatus.LMS} />}
      </UserBodyCalcCard>
      <UserBodyCalcCard title="Body Mass Index">
        {BMI?.toFixed(2)}
        <p className="text-[0.50rem] mt-1">Kg/m2</p>
        {withStatus && <Status type={withStatus.BMIS} />}
      </UserBodyCalcCard>
      <UserBodyCalcCard title="Body fat percentage (BMI)">
        {BFPBMI?.toFixed(2)}
        <p className="text-xs mt-0">%</p>
        {withStatus && <Status type={withStatus.BFPBMIS} />}
      </UserBodyCalcCard>
    </UserBodyCalcListWrapper>
  );
};
