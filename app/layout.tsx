import { SessionProvider } from "../components/sessionProvider";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth/next";
import "./globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex ">
              <div className=" hidden mr-3 login-img max-w-xs overflow-y-auto md:min-w-[20rem] md:inline-flex ">
                <Sidebar />
              </div>

              {/* Client Provider */}
              <ClientProvider />

              <div className="bg-[#ffff] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
