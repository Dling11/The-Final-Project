import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import AuthGuard from "~/common/authguard";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { isPublic = false } = Component as typeof Component & {
    isPublic?: boolean;
  };

  return (
    <SessionProvider session={session}>
      <AuthGuard isPublic={isPublic}>
        <Component {...pageProps} />
      </AuthGuard>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
