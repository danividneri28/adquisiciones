import Swal from "sweetalert2";

export const onError = (error, setError) => {
  console.error(error.message);
  Object.keys(error.errors ?? {}).forEach((x) =>
    setError(x, { type: "custom", message: error.errors[x].toString() })
  );

  if (error.code == 422 && !error.success)
    Swal.fire({
      icon: "error",
      iconHtml: "!",
      title: "¡Opss...!",
      text: error.message,
      confirmButtonText: "OK",
      confirmButtonColor: "#6b1e34",
    });
};
