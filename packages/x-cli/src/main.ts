import { awesomeFn } from "lvquan-x-core";

export function cli() {
  console.log('2');
  awesomeFn();
  return Promise.resolve(false);
}
