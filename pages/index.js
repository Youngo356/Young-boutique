import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eva Young Boutique</title>
        <meta name="description" content="Eva Young Boutique - Stylish Fashion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <iframe src="/index.html" style={{width: '100%', height: '100vh', border: 'none'}} />
      </main>
    </>
  );
}
