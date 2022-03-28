import React from 'react';

const PricingOption = ({option}) => {
    const {name,price} = option;
    return (
        <div className='bg-white rounded'>
            <p className='bg-indigo-200 font-semibold text-xl m-4 p-3 rounded'>{name}</p>
            <h1 className='text-6xl font-mono p-5'>{price}<span className='text-xl text-gray-500'>/mo</span></h1>
            
        </div>
    );
};

export default PricingOption;