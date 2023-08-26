import { InfoUserBody } from '~/domain/entities';

const BFPCalc = ({ waistSize, neckSize, height }: { waistSize: number; neckSize: number; height: number }) => {
  return 495 / (1.0324 - 0.19077 * Math.log10(waistSize - neckSize) + 0.15456 * Math.log10(height)) - 450;
};

const FMCalc = ({ BFP, weight }: { BFP: number; weight: number }) => {
  return (BFP * weight) / 100;
};

const LMCalc = ({ FM, weight }: { FM: number; weight: number }) => {
  return weight - FM;
};

const BMICalc = ({ weight, height }: { weight: number; height: number }) => {
  return weight / (height * 0.01) ** 2;
};

const BFPBMICalc = ({ BMI, age }: { BMI: number; age: number }) => {
  return 1.2 * BMI + 0.23 * age - 16.2;
};

export const calcBody = ({
  weight,
  neckSize,
  waistSize,
  height,
  age,
}: {
  weight: number;
  neckSize: number;
  waistSize: number;
  height: number;
  age: number;
}) => {
  const BFP = BFPCalc({ waistSize, neckSize, height });
  const FM = FMCalc({ BFP, weight });
  const LM = LMCalc({ FM, weight });
  const BMI = BMICalc({ weight, height });
  const BFPBMI = BFPBMICalc({ BMI, age });

  return { BFP, FM, LM, BMI, BFPBMI };
};

const validateState = (type: string, userData: InfoUserBody[] | undefined) => {
  if (userData) {
    const actual = userData[0];
    const past = userData[1];
    switch (type) {
      case 'BFPS':
        if (actual.BFP < past.BFP) return 'up';
        if (actual.BFP > past.BFP) return 'down';
        return 'equal';
      case 'FMS':
        if (actual.FM < past.FM) return 'up';
        if (actual.FM > past.FM) return 'down';
        return 'equal';
      case 'LMS':
        if (actual.LM > past.LM) return 'up';
        if (actual.LM < past.LM) return 'down';
        return 'equal';
      case 'BMIS':
        if (actual.BMI > past.BMI) return 'up';
        if (actual.BMI < past.BMI) return 'down';
        return 'equal';
      case 'BFPBMIS':
        if (actual.BFPBMI > past.BFPBMI) return 'up';
        if (actual.BFPBMI < past.BFPBMI) return 'down';
        return 'equal';
      default:
        break;
    }
  }
  return 'equal';
};

export const getStatus = (
  index: number,
  userData: InfoUserBody[] | undefined
): { BFPS: string; FMS: string; LMS: string; BMIS: string; BFPBMIS: string } | null => {
  if (index === 0) {
    return {
      BFPS: validateState('BFPS', userData),
      FMS: validateState('FMS', userData),
      LMS: validateState('LMS', userData),
      BMIS: validateState('BMIS', userData),
      BFPBMIS: validateState('BFPBMIS', userData),
    };
  }
  return null;
};
