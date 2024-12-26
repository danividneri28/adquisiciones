import Swal from "sweetalert2";

export const onAlert = (errors) => {
  Object.keys(errors).length>0&&
  Swal.fire({
    icon: 'error',
    iconHtml:'!',
    title: `¡Campos ${Object.keys(errors).some(x=>errors[x].type!='required')?'invalidos':'vacíos'}!`,
    text: 'Para continuar completa todos los campos',
    confirmButtonText: 'OK',
    confirmButtonColor:'#6b1e34'
  });
};
