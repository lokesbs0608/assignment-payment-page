import Styles from './PaymentFailure.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function PaymentFailure() {
    return (
        <div className={Styles.container}>
            <div className='text-center'>
                <div>
                    <CancelOutlinedIcon fontSize='large' color='error'/>
                </div>
                <div>Payment Failed</div>
            </div>
        </div>
    )
}

export default PaymentFailure
