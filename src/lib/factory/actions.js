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
    setLoading(loading) {
      return {
        type: types.loading,
        loading,
      };
    },
  };

  return methods;
}
