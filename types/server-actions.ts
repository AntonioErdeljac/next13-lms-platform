export type SAResponse<T> =
  | { data: T; error: null }
  | { data: null; error: string };
