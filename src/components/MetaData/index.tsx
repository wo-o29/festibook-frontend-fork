import Head from "next/head";
import { useRouter } from "next/router";

import { startTransition, useEffect, useState } from "react";

interface MetaDataProps {
  title?: string; // 각 페이지에 보여질 제목 추가
}

export default function MetaData({
  title = "국내 모든 축제 정보 한 곳에서 확인하기 | FestiBook",
}: MetaDataProps) {
  const { asPath } = useRouter();
  // const [currentUrl, setCurrentUrl] = useState<string>("");
  // useEffect(() => {
  //   startTransition(() => {
  //     setCurrentUrl(window.location.origin + asPath);
  //   });
  // });

  const currentUrl = "";
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content="FestiBook" />
      <meta name="keyword" content="FestiBook, 축제 정보" />
      <meta
        name="description"
        content="국내 모든 축제 정보 한 곳에서 확인하기 | FestiBook"
      />
      {/* Open Graph */}
      <meta property="og:title" content="FestiBook" />
      <meta
        property="og:description"
        content="국내 모든 축제 정보 한 곳에서 확인하기 | FestiBook"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="/icons/logo.svg" />
      <meta property="og:image:alt" content="FestiBook 로고 이미지" />
      <meta property="og:locale" content="ko_KR" />
      {/* Twitter */}
      <meta property="twitter:title" content="FestiBook" />
      <meta
        name="twitter:description"
        content="국내 모든 축제 정보 한 곳에서 확인하기 | FestiBook"
      />
      <meta name="twitter:card" content="website" />
      <meta property="twitter:site" content={currentUrl} />
      <meta name="twitter:image" content="/icons/logo.svg" />
      <meta property="twitter:image:alt" content="FestiBook 로고 이미지" />
    </Head>
  );
}
