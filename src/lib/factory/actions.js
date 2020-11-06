export default function actionsFactory(types, config) {
  const methods = {
    setError(error) {
      return {
        type: types.error,
        error,
      };
    },
    setSuccess(message) {
      return {
        type: types.success,
        message,
      };
    },
    setData(data) {
      return {
        type: types.data,
        data,
      };
    },
  };

  return methods;
}
