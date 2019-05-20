const model = {
  // namespace:'countter',
  initial: {
    count: 0
  },
  reducers: {
    addStepCount(state, action) {
      const { count } = state;
      const { step } = action.payload;
      // count += 10;
      return {
        ...state,
        count: count + step
      }
    }
  },
  async setup(dispatch, getState, action) {
    //
    dispatch({
      type: 'setState',
      payload: {
        count: 10
      }
    });
  }
}

export default model;
