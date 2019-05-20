const model = {
  namespace: "dy-form",
  initial: {
    modelKey: "key1",
    formModel: {
      key1: [
        {
          type: "input",
          required: true,
          field: "field1"
        },
        {
          type: "select",
          required: true,
          field: "field2"
        },
        {
          type: "input",
          required: true,
          field: "field3"
        }
      ],
      key2: [
        {
          type: "input",
          required: true,
          field: "fielda"
        },
        {
          type: "select",
          required: true,
          field: "fieldb"
        }
      ]
    }
  },
  reducers: {}
};

export default model;
