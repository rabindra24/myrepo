import React from 'react'
import HowToChooseArticle from './HowToChooseArticle'

const HowToChoose = () => {
  return (
    <div className='w-full h-full py-12 md:px-20'>
        <div className='px-5'>
            <h3 className='text-[rgb(59,123,206)] uppercase text-center text-xl '>How To Choose The</h3>
            <h2 className='text-[#3B7BCE] capitalize text-center md:text-5xl text-3xl mt-2'>Best Website Design Agency</h2>
        </div>
        <div className='flex md:flex-row flex-col py-12 justify-between mx-auto px-5'>
            <div className='max-w-[1000px] w-full'>
                <p className='text-[#3B7BCE] text-2xl font-semibold max-w-[500px] mb-3 '>Whether starting a brand from the ground up or overhauling your current website, working with a website design agency gives you access to the top experts in web design.</p>
            </div>
            <div className='max-w-[600px] w-full'>
                <p className=''>In turn, these experts have access to leading tools, modern trends, best practices and more to help ensure that your website is not only unique but built to perform — if you find the right agency, that is. Not all agencies are created equal.</p>
                <br className='py-5' />
                <p>We’ll breakdown exactly what to look for in a partner to help you choose the best website design agency for your project.</p>
            </div>
        </div>
        <div className='max-w-[900px] mx-auto '>
            <HowToChooseArticle/>

        </div>
    </div>
  )
}

export default HowToChoose