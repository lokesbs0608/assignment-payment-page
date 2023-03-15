
import Styles from './Transactiom.module.scss'
import Qr from '../..//assets/qrassing.png'
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

function Transacation() {
    const [timeLeft, setTimeLeft] = useState(100);
    let navigate = useNavigate();

    useEffect(() => {
        if (!timeLeft) return navigate('payment-failed')

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleNaviagtion = (path: string) => {
        window.location.href = path
    }

    return (
        <div className={Styles.outer_container} >
            <div className={Styles.inner_conatiner} >
                <div className='text-center'>
                    <div className={Styles.small_text} > Pay Within  </div>
                    <div> <b>{timeLeft} Seconds</b> </div>
                </div>

                <div className={Styles.timer}>  <b>₹999.0</b></div>
                <div className={Styles.medium_text}> Scan QR using any UPI App</div>
                <div className={Styles.qr_conatiner} >
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                                <div  {...bindTrigger(popupState)}>
                                    <img src={Qr} alt="" width={'100%'} height={'100%'} />
                                </div>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >

                                    <div className='pe-auto' onClick={() => handleNaviagtion('https://www.google.com')} >
                                        <div className='p-3'>Open a link.</div>
                                    </div>
                                </Popover>
                            </div>
                        )}
                    </PopupState>

                </div>
                <div className={Styles.trnsaction_container}>
                    <div className={Styles.small_text}> Trasaction ID</div>
                    <div className={Styles.timer}> <b>12EV784HSDJH484</b></div>
                </div>
                <div >
                    <div className={Styles.primary_bg} >
                        <div className='w-50' >Account Number : </div>
                        <div className='w-50'>98273981798371</div>
                    </div>
                    <div className={Styles.secondary_bg} >
                        <div className='w-50'>Bank Name : </div>
                        <div className='w-50'>Karnataka Bank</div>
                    </div>
                    <div className={Styles.primary_bg} >
                        <div className='w-50' >IFSC Code : </div>
                        <div className='w-50'>KARB0000921</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transacation
