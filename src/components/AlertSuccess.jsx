import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const AlertSuccess = ({ route }) => {
    const navigate = useNavigate();

    useEffect(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Muy bien!',
            text: 'Se ha finalizado el proceso de registro exitosamente',
            confirmButtonText: 'OK',
            confirmButtonColor: '#6b1e34',
            didClose: () => navigate(route),
        });
    }, [navigate, route]);

    return null;
};

export default AlertSuccess;