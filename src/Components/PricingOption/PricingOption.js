import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

import Benefit from '../Benefit/Benefit';

const PricingOption = ({option}) => {
    const {name,price,benefits} = option;
    return (
        <div className='bg-white rounded'>
            <p className='bg-indigo-400 font-semibold text-xl m-4 p-3 rounded'>{name}</p>
            <h1 className='text-6xl font-mono font-bold p-5'>${price}<span className='text-xl text-gray-500'>/mo</span></h1>
        <div className='px-6'>
            <h3 className='text-2xl font-semibold text-left'>Benefits:</h3>
            {
                benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
            }
            <button className='flex justify-center w-full bg-green-500 text-white py-3 my-3 mt-5 rounded font-semibold items-center'>Buy Now <ArrowRightIcon className='ml-2 w-6 h-6'></ArrowRightIcon> </button>
        </div>
        </div>
    );
};

export default PricingOption;