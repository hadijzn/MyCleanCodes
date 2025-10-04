import React from 'react'
import products from './Products'
import useBasketStore from './useBasketStore';
export default function ProductCard() {
  const {addToBasket} = useBasketStore()
  const {deleteBasket,basket} = useBasketStore()
  console.log(useBasketStore());
  return (
    <div>
        <ul className='flex  bg-gray-500'>
        {products.map((product)=>{  
    return <li className='bg-gray-600 mx-4 p-4' key={product.id}>
  <div className=' p-2  w-fit'>
    <img className='w-80 h-72 ' src={product.img} />
  </div>
          <p className='ml-4'>{product.name}</p>
         <p className='ml-4'>{product.price}</p>
         <button className='rounded-md bg-red-500 text-white w-12 h-15 ml-4' onClick={() => addToBasket(product)}>Buy</button>
         {basket.map((item) => (
          <li key={item.id}>
          <button className='rounded-md bg-blue-500 text-white w-12 h-15 ml-4 mt-2' onClick={() => deleteBasket(product)}>Delete</button>
         
         </li>
))}

    </li>
        })}
        </ul>
    </div>
  )
}

