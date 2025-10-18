import React from 'react'

export default function Footer() {
    const Links = [
    { name: 'linkedin', id: 4, Link: '#', image: '/assets/linkedin.png' },
    { name: 'telegram', id: 3, Link: '#', image: '/assets/telegram.png' },
    { name: 'github', id: 5, Link: '#', image: '/assets/github.png' },
    { name: 'instagram', id: 1, Link: '#', image: '/assets/instagram.png' },
    { name: 'whatsapp', id: 2, Link: '#', image: '/assets/whatsapp.png' }
  ]
  return (
        <section className=''>
      <div className='text-gray-400 text-2xl flex flex-col items-center '>
      <p>raha.seo@gmail.com</p>
      <p>09203251667</p>
      </div>
      <div className='flex justify-center'>
              {Links.map((item)=>(
        <div className='mt-5  ' key={item.id}>
          <img className='mx-2' src={item.image}/>
        </div>
      ))}
      </div>
    </section>
  )
}
