import { InfoUserFactory } from '~/infrastructure/factories';

import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export default async function handler(
  req: { body: any },
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { data: string }): void; new (): any } } }
) {
  const infoUserFactory = InfoUserFactory();

  const body = req.body;

  const result = await infoUserFactory.save(body);
  if (result) res.status(200).json({ data: `sucess` });
}
