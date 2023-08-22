import moment from 'moment';
import { useRouter } from 'next/router';
import { FunctionComponent, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InfoInput } from '~/domain/entities';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';
import { calcBody } from '~/infrastructure/utils/bodyCalc';
import { Input } from '~/ui/components/Input';
import { FormWrapper, InforWrapper, InputsWrapper } from './style';

type UserInfoTemplateProps = {
  data?: Array<InfoInput>;
};

export const UserInfoTemplate: FunctionComponent<UserInfoTemplateProps> = ({ data }) => {
  const router = useRouter();
  const { loggedUser } = useContext(UserInfoContext);

  function ShowInput(input: InfoInput, index: number) {
    return <Input key={`input-${index}`} {...input} />;
  }

  async function HandleCalculateAndSave(event: any) {
    event.preventDefault();
    const endpoint = '/api/userForm';

    const dataBody = data
      ? data.reduce(
          (saved, current) => {
            return { ...saved, [current.id]: event.target[current.id].value };
          },
          { waistSize: 0, neckSize: 0, weight: 0, height: 0, age: 0 }
        )
      : { waistSize: 0, neckSize: 0, weight: 0, height: 0, age: 0 };

    const bodyCalc = calcBody({
      waistSize: +dataBody.waistSize,
      neckSize: +dataBody.neckSize,
      weight: +dataBody.weight,
      height: +dataBody.height,
      age: +dataBody.age,
    });

    const Jsonfy = JSON.stringify({
      ...dataBody,
      date: moment().format('DD/MM/YYYY'),
      userId: loggedUser?.username,
      id: uuidv4(),
      ...bodyCalc,
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: Jsonfy,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result.data === 'sucess')
      router.push(
        {
          pathname: '/history',
          query: { query: loggedUser?.username },
        },
        undefined
      );
  }

  return (
    <div className="px-8">
      <main className="mainInfo">
        <FormWrapper className="form">
          <h2 className="mb-8 flex gap-2 self-start">Track your body:</h2>
          <form className="flex flex-col gap-8 ml-[-8rem]" onSubmit={HandleCalculateAndSave}>
            <InputsWrapper>{data?.map(ShowInput)}</InputsWrapper>
            <button type="submit" className="self-end border-solid border p-1 rounded-lg">
              Calculate and Save
            </button>
          </form>
        </FormWrapper>
        <InforWrapper></InforWrapper>
      </main>
    </div>
  );
};
