/**
 * 쿼리 키 팩토리
 * {@link https://tkdodo.eu/blog/effective-react-query-keys}
 */

export const GUIDE_BOOK_KEYS = {
  all: ["guide-book"] as const,
  lists: () => [...GUIDE_BOOK_KEYS.all, "list"] as const,
};

export const userInfoKey = {
  all: ["user"] as const,
  info: () => [...userInfoKey.all, "info"] as const,
};

export const BOOKMARK_KEYS = {
  all: ["bookmark"] as const,
  reviews: () => [...BOOKMARK_KEYS.all, "review"] as const,
  festival: () => [...BOOKMARK_KEYS.all, "festival"] as const,
};
