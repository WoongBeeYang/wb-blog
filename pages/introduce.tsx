import Layout from "../components/layout";
import Head from "next/head";

export default function introduce() {
  return (
    <>
      <Layout>
        <Head>
          <title>자기소개</title>
          <meta name="description" content="웅비의 블로그" />
        </Head>
        자기소개 하는 공간
      </Layout>
    </>
  );
}
