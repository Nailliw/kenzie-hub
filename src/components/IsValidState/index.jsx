const IsValidState = (state) => {
  if (
    state === "" ||
    state === undefined ||
    state === null ||
    JSON.stringify(state) === JSON.stringify({}) ||
    JSON.stringify(state) === JSON.stringify([])
  ) {
    return false;
  } else {
    return true;
  }
};

export default IsValidState;
