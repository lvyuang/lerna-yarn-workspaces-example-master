import { awesomeFn } from "lvquan-x-core";

export function cli() {
  console.log('1');
  awesomeFn();
  return Promise.resolve(false);
}
