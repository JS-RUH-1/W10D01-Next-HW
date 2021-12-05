import Link from "next/link";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="not-found">
      <Head>
        <title>FirstNext | 404 </title>
        <meta name="description" content="404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>ops...</h1>
      <h2>This page can not be found</h2>
      <Link href="/">
        <a>
          <h3>Go To Home Page</h3>
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
