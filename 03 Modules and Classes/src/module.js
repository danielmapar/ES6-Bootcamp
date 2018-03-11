const fun1 = () => {
  return 1;
}

export default fun1;

export const fun2 = () => {
  return "test"
};

export {
  fun1,
  fun2 as fun3,
}
