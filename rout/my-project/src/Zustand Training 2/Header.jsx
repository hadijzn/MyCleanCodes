import React from 'react'
import useBasketStore from './useBasketStore';
export default function Header() {
    const { basket, getTotalPrice } = useBasketStore();

  return (
    <div className='flex justify-between text-gray-900 bg-gray-700 h-14'>
        <p className='mx-6 my-4'>Home </p>
        <div className='mx-6 my-4 flex'>basket 
          <p className='ml-2'>{getTotalPrice()}$</p>  </div>
    </div>
  )
}
