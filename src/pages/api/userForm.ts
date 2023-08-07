import { InfoUserFactory } from '~/infrastructure/factories';

export default async function handler(
  req: { body: any },
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { data: string }): void; new (): any } } }
) {
  const infoUserFactory = InfoUserFactory();

  const body = req.body;

  const result = await infoUserFactory.save(body);
  if (result) res.status(200).json({ data: `sucess` });
}
