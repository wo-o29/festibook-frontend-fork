import { css } from "@emotion/react";

export const TABLET_MEDIA_QUERY = `screen and (max-width: 1024px)`;
export const MOBILE_MEDIA_QUERY = `screen and (max-width: 768px)`;

export const textOverflowEllipsis = (lineClamp: number) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineClamp};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
`;
