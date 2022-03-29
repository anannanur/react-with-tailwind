import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    console.log(props);
    return (
        <div>
            <p className='flex items-center text-xl font-sans'><CheckCircleIcon className='w-4 h-4 mr-2 text-green-400'></CheckCircleIcon>
            {props.benefit}</p>
        </div>
    );
};

export default Benefit;