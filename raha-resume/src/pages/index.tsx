import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Portfolio from '@/components/Portfolio'
// import SEO from '@/components/SEO'
import Skills from '@/components/Skills'

export default function page() {
  return (
    <>
      {/* <SEO/> */}
      <main className=' flex flex-col items-center  mx-auto p-6 font-poppins-black  bg-[#232020]'>
        <div className='w-full flex flex-col max-w-4xl'>
        <Header/>
        <InfoCard/>
        <Skills/>
        <Portfolio/>
        </div>

        </main>
    </>
  )
}
//max-w-4xl