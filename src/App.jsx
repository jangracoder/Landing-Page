import React from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Top from './components/Top'

function App() {
  return (
   <>
   <div className=' min-h-screen  bg-amber-50 px-6 py-3 flex flex-col gap-16 md:px-8 md:py-6 lg:px-20 lg:py-14'>
    <Top/>
    <Body/>
    <Footer/>
   
   </div>
   </>
  )
}

export default App