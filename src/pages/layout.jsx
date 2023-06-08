import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Saas Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
