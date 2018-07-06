export default {
  namespace: 'auth',
  initial: {
    authData: {}
  },
  reducers: {
    setAuth(state, action) {
      const { authData } = state;
      const { payload } = action;

      return {
        ...state,
        authData: {
          ...authData,
          ...payload
        }
      }
    }
  },
  asyncs: {
    async checkAuth(dispatch, getState, action) {
      const { authCode } = action.payload;
      setTimeout(() => {
        const payload = {};
        payload[authCode] = true;
        const action = { type: 'setAuth', payload };

        dispatch(action)
      }, 1000);
    }
  },
  async setup(dispatch, getState, action) {
    // dispatch({
    //   type: 'checkAuth'
    // })
  }
}
