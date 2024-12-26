import Swal from 'sweetalert2';

const AlertaError = ({ title, text }) => {
    return Swal.fire({
        icon: 'error',
        iconHtml: '!',
        title: title || '¡Campos vacíos!',
        text: text || 'Para continuar completa todos los campos',
        confirmButtonText: 'OK',
        confirmButtonColor: '#6b1e34'
    });
};

export default AlertaError;