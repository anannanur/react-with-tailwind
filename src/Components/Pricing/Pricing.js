import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const options = [
        {
            id: 1, name: 'Free', price: '0', benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: '9.99', benefits: [
                'Everything on regular',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: '19.99', benefits: [
                'Everything on price',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-400 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque expedita modi?</p>
            <div className='grid md:grid-cols-3 gap-8 mt-6'>
                {
                    options.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;