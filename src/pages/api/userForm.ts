import { InfoUserFactory } from '~/infrastructure/factories';

import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export default async function handler(
  req: { body: any; method: string; query: { query: string } },
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { data: string }): void; new (): any } } }
) {
  const infoUserFactory = InfoUserFactory();

  switch (req.method) {
    case 'GET': {
      const query = req.query.query;
      const result = await infoUserFactory.handle(query);
      if (result.isRight()) res.status(200).json({ data: JSON.stringify(result.value) });
      break;
    }
    case 'DELETE': {
      const id = req.body;
      const result = await infoUserFactory.delete(id);
      if (result) res.status(200).json({ data: `sucess` });
      break;
    }
    case 'POST': {
      const body = req.body;
      const result = await infoUserFactory.save(body);
      if (result) res.status(200).json({ data: `sucess` });
      break;
    }
    default:
      break;
  }
}
