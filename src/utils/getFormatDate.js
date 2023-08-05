import { format } from 'date-fns';
import { es } from 'date-fns/locale'

export const getFormatDate = (date) => {
    const fechaObj = new Date(date);
    const formatDate =  format(fechaObj, 'MMM d, HH:mm', { locale: es });
    return formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
};
