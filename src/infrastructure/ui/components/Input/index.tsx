import { FunctionComponent } from 'react';
import { InfoInput } from '~/domain/entities';
import { InputWrapper } from './style';

export const Input: FunctionComponent<InfoInput> = ({ id, label, description }) => {
  return (
    <InputWrapper>
      <label htmlFor={id} title={description}>
        {label}
      </label>
      <input className="px-2 rounded-lg" type="text" id={id} required />
    </InputWrapper>
  );
};
