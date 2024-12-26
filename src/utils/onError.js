export const onError = (error, setError) => {
  console.error(error.message);
  Object.keys(error.errors??{}).forEach((x) =>
    setError(x, { type: "custom", message: error.errors[x].toString() })
  );
};
