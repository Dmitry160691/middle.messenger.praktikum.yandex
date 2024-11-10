declare global {
  type Nullable<T> = T | null | {};

  type StringIndexed = Record<string, any>;
}

export {};
