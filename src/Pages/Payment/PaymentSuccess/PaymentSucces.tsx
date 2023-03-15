import Styles from './PaymentSuccess.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function PaymentSucces() {
    return (
        <div className={Styles.container}>
            <div className='text-center'>
                <div className='fs-12'>
                    <CheckCircleOutlineIcon fontSize='large' color='success' />
                </div>
                <div>Payment Success</div>
            </div>
        </div>
    )
}

export default PaymentSucces
