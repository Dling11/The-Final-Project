import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";

interface AuthGuardProps {
  isPublic?: boolean;
}

const AuthGuard: FC<PropsWithChildren & AuthGuardProps> = ({
  isPublic,
  children,
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    if (!isPublic && !session && !loading) {
      void router.replace({
        pathname: "/api/auth/signin",
        query: {
          callbackUrl: router.asPath,
        },
      });
    }
  }, [isPublic, loading, router, session]);

  if (
    loading || // while retrieving session
    (!isPublic && !session) // page requires auth and no session, wait useEffect to redirect
  ) {
    return <>Loading</>;
  }

  return <>{children}</>;
};

export default AuthGuard;
