import EduLang from '@/components/EduLang'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Portfolio from '@/components/Portfolio'
// import SEO from '@/components/SEO'
import Skills from '@/components/Skills'
import TimeLine from '@/components/TimeLine'

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
        <EduLang/>
        <TimeLine/>
        <Footer/>
        </div>
        </main>
    </>
  )
}
// TODO = max-w-4xl
// TODO = give them all fonts of there own 
// TODO = make it work with languages
// TODO = give Link to parts 
// TODO = responsive Full 
