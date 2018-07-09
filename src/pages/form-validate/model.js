const model = {
  namespace: 'kos-form',
  initial: {
    testform: {
      name: 'test-name'
    }
  },
  validators: [{
    formName: 'testform',
    validators: [
      { field: 'name', rules: 'required' },
      { field: 'degree', rules: 'required' }
    ]
  }]
};


export default model;
