// src/services/swalService.js
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showAlert = (options) => {
    return MySwal.fire(options);
};

const showTimedAlert = (alertType, duration, title, subtitle) => {
    let icon = 'info';

    switch (alertType) {
        case 'success':
            icon = 'success';
            break;
        case 'error':
            icon = 'error';
            break;
        case 'warning':
            icon = 'warning';
            break;
        default:
            icon = 'info';
    }

    return MySwal.fire({
        icon: icon,
        title: title,
        text: subtitle,
        timer: duration,
        showConfirmButton: false,
        timerProgressBar: true,
    });
};

const swalService = {
    showAlert,
    showTimedAlert,
};

export default swalService;
