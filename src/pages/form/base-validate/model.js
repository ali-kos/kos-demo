const model = {
  namespace: "kos-form",
  initial: {
    testform: {
      name: "test-name",
      sex: true
    },
    visibleField: {}
  },
  validators: [
    {
      formName: "testform",
      validators: [
        {
          field: "name",
          rules: [
            "email",
            async (dispatch, getState, payload) => {
              dispatch("validating", "校验中...");

              await new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });

              // dispatch("error", "校验错误");

              // 最后一个状态需要返回
              return {
                validateStatus: "error",
                hasFeedback: true,
                help: "异步校验错误！"
              };
            }
          ]
        }
      ]
    }
  ]
};

export default model;
