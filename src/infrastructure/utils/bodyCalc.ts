const BFPCalc = ({ waistSize, neckSize, height }: { waistSize: number; neckSize: number; height: number }) => {
  return 495 / (1.0324 - 0.19077 * Math.log10(waistSize - neckSize) + 0.15456 * Math.log10(height)) - 450;
};

const FMCalc = ({ BFP, weight }: { BFP: number; weight: number }) => {
  return BFP * weight;
};

const LMCalc = ({ FM, weight }: { FM: number; weight: number }) => {
  return weight - FM;
};

const BMICalc = ({ weight, height }: { weight: number; height: number }) => {
  return weight / height ** 2;
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
