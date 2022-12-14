import Layout from "../components/layout";
import Head from "next/head";
import { INTRODUCE } from "../config";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import TweetEmbed from "react-tweet-embed";
import { ExtendedRecordMap } from "notion-types";
import { useRouter } from "next/router";
import { getPageTitle } from "notion-utils";
import { useTheme } from "next-themes";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      import("prismjs/components/prism-markup-templating.js"),
      import("prismjs/components/prism-markup.js"),
      import("prismjs/components/prism-bash.js"),
      import("prismjs/components/prism-c.js"),
      import("prismjs/components/prism-cpp.js"),
      import("prismjs/components/prism-csharp.js"),
      import("prismjs/components/prism-docker.js"),
      import("prismjs/components/prism-java.js"),
      import("prismjs/components/prism-js-templates.js"),
      import("prismjs/components/prism-coffeescript.js"),
      import("prismjs/components/prism-diff.js"),
      import("prismjs/components/prism-git.js"),
      import("prismjs/components/prism-go.js"),
      import("prismjs/components/prism-graphql.js"),
      import("prismjs/components/prism-handlebars.js"),
      import("prismjs/components/prism-less.js"),
      import("prismjs/components/prism-makefile.js"),
      import("prismjs/components/prism-markdown.js"),
      import("prismjs/components/prism-objectivec.js"),
      import("prismjs/components/prism-ocaml.js"),
      import("prismjs/components/prism-python.js"),
      import("prismjs/components/prism-reason.js"),
      import("prismjs/components/prism-rust.js"),
      import("prismjs/components/prism-sass.js"),
      import("prismjs/components/prism-scss.js"),
      import("prismjs/components/prism-solidity.js"),
      import("prismjs/components/prism-sql.js"),
      import("prismjs/components/prism-stylus.js"),
      import("prismjs/components/prism-swift.js"),
      import("prismjs/components/prism-wasm.js"),
      import("prismjs/components/prism-yaml.js"),
    ]);
    return m.Code;
  })
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

const Tweet = ({ id }: { id: string }) => {
  return <TweetEmbed tweetId={id} />;
};

export default function Introduce({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
}) {
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  let bgColor:boolean;

  if (!recordMap) {
    return null;
  }

  
    if(theme === 'light') {
      bgColor = false
    } else {
      bgColor = true
    }
  
  const title = getPageTitle(recordMap);
  console.log(title, recordMap);

  if (typeof window !== "undefined") {
    const keys = Object.keys(recordMap?.block || {});
    const block = recordMap?.block?.[keys[0]]?.value;
    const g = window as any;
    g.recordMap = recordMap;
    g.block = block;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <meta name="description" content="????????? ?????????" />
        </Head>
        <div className="dark:text-white">
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={bgColor}
            rootDomain={"www.naver.com"}
            rootPageId={"www.naver.com"}
            previewImages={previewImagesEnabled}
            components={{
              nextImage: Image,
              nextLink: Link,
              Collection,
            }}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({}) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(`${INTRODUCE}`);

  return {
    props: { recordMap },
  };
}
