
import { Route, Routes, redirect } from 'react-router-dom'
import PaymentSucces from '../Pages/Payment/PaymentSuccess/PaymentSucces'
import PaymentFailure from '../Pages/Payment/PaymentFailure/PaymentFailure'
import Transacation from '../Pages/Payment/Transacation'


const Navigation = () => {

    return (
        <Routes>
             <Route path="/" element={<Transacation />} />
            <Route path="payment-success" element={<PaymentSucces />} />
            <Route path="payment-failed" element={<PaymentFailure />} />
        </Routes>
    )
}
export default Navigation