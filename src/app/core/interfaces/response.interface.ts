export interface IResponse<T> {
  response: T;
}

export interface IGetItems<T> {
  data: T[];
  checksum?: string,
  total: number,
}