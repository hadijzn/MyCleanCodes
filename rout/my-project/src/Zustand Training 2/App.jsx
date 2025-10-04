import React from 'react'
import products from './Products'
import ProductCard from './ProductCard';
import Header from './Header';
export default function App() {    
  return (
    <div>
        <Header/>
        <ProductCard/>
    </div>
  )                                     
}
// TODO = Connect Zustand to the bakset
// TODO = Running mechanism of basket