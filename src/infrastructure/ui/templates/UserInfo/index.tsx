import moment from 'moment';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InfoInput } from '~/domain/entities';
import { Input } from '~/infrastructure/ui/components/Input';
import { calcBody } from '~/infrastructure/utils/bodyCalc';
import { InputsWrapper } from './style';

type UserInfoTemplateProps = {
  data?: Array<InfoInput>;
};

export const UserInfoTemplate: FunctionComponent<UserInfoTemplateProps> = ({ data }) => {
  const router = useRouter();
  function ShowInput(input: InfoInput, index: number) {
    return <Input key={`input-${index}`} {...input} />;
  }
  const { data: session } = useSession();

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

    const Jsonfy = JSON.stringify({ ...dataBody, date: moment().format('DD/MM/YYYY'), userId: '1', id: uuidv4(), ...bodyCalc });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: Jsonfy,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result.data === 'sucess') router.push('/history', undefined, { shallow: true });
  }

  return (
    <div className="px-8">
      <main className="mainInfo">
        <h1 className="mb-16 flex gap-2">Filling your body information</h1>
        <h2 className="mb-16 flex">
          Past tracking
          <p className="text-blue-900 underline ml-2">
            <Link href="/history/">Information</Link>
          </p>
        </h2>

        <form className="flex flex-col gap-8" onSubmit={HandleCalculateAndSave}>
          <InputsWrapper>{data?.map(ShowInput)}</InputsWrapper>
          <button type="submit" className="self-end border-solid border p-1 rounded-lg">
            Calculate and Save
          </button>
        </form>
      </main>
    </div>
  );
};
