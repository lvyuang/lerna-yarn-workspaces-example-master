import { awesomeFn } from "lvquan-x-core";

export function cli() {
  const a = 'a';
  console.log('2' + a);
  awesomeFn();
  return Promise.resolve(false);
}
