import { Loader } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const SignIn = () => {
  const router = useRouter();
  const { code } = router.query;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    !!code && setLoading(true);
  }, [code]);

  return (
    <main className="mainLoging">
      {loading ? (
        <div className="flex items-center gap-4">
          <Loader width="3rem" height="3rem" />
          Loading...
        </div>
      ) : (
        <div className="ml-8">
          Get started by
          <button
            className="loginBtn ml-2"
            onClick={() => {
              setLoading(true);
              Auth.federatedSignIn();
            }}
          >
            Sign in
          </button>
        </div>
      )}
    </main>
  );
};
