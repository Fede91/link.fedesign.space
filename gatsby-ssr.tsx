import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Satoshi-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiBlackFont"
    />,
    <link
      rel="preload"
      href="/fonts/Satoshi-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiMediumFont"
    />,
    <link
      rel="preload"
      href="/fonts/Satoshi-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/TsukimiRounded-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="TsukimiRoundedFont"
    />,
  ]);
};
