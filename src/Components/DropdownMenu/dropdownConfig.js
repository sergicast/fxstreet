import { ReactComponent as Hide } from '../../assets/img/hide.svg';
import { ReactComponent as Improve } from '../../assets/img/improve.svg';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';

export const dropdownConfig = [
    {
        label: 'Hide',
        key: 'hide',
        Icon: () => <Hide />,
        hasSubMenu: false
    },
    {
        label: 'Improve my feed',
        key: 'improve',
        Icon: () => <Improve />,
        hasSubMenu: true
    },
];
