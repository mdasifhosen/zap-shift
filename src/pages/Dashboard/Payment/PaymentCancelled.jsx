import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h2 className="">Payment is Cancelled. Please try again</h2>
            <Link to='/dashboard/my-parcels'><button className='btn btn-primary text-blue-800'>Try Again</button></Link>
        </div>
    );
};

export default PaymentCancelled;