export type None<T> = { [K in keyof T]?: never }
export type EitherOrBoth<T1, T2> = T1 & None<T2> | T2 & None<T1> | T1 & T2;
export type FirstOrBoth<T1, T2> = T1 & None<T2> | T1 & T2;
