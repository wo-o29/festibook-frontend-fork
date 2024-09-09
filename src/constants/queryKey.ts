/**
 * 쿼리 키 팩토리
 * {@link https://tkdodo.eu/blog/effective-react-query-keys}
 */

export const GUIDE_BOOK_KEYS = {
  all: ["guide-book"] as const,
  lists: () => [...GUIDE_BOOK_KEYS.all, "list"] as const,
};
