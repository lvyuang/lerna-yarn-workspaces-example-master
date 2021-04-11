import { awesomeFn } from "lvquan-x-core";

export function cli() {
  const a = 'a';
  console.log('4' + a);
  awesomeFn();
  return Promise.resolve(false);
}
