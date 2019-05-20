export const m1 = store => next => async action => {
  console.log("m1 start");
  next(action);
  console.log("m1 end");
};

export const m2 = store => next => async action => {
  console.log("m2 start");
  next(action);
  console.log("m2 end");
};
