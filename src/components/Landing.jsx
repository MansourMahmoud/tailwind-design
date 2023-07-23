import React from 'react'
import illustrationIntro from '../assets/images/illustration-intro.png'

const Landing = () => {
    return (
        <section className='bg-[#1c2230] pt-[200px]'>
            <div className=''>
                <div className='container mx-auto element-center flex-col gap-6'>
                    <div className='w-[450px] max-w-full'>
                        <img src={`${illustrationIntro}`} alt="" className='w-full h-full' />
                    </div>
                    <div className='text-center flex flex-col gap-6 w-[560px] max-w-full'>
                        <h1 className='text-3xl md:text-4xl'>
                            All your files in one secure location
                            <br />
                            accessible anywhere
                        </h1>
                        <p className='font-normal text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, repudiandae! Incidunt veniam optio, debitis recusandae atque, asperiores quia id illo praesentium rerum fugiat dolorem, iste dolor? Obcaecati voluptatem error officiis?
                        </p>
                    </div>
                    <div className='btn w-[250px] h-[60px] rounded-full flex justify-center items-center cursor-pointer'>
                        <a href="/">
                        Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full h-[200px]'>
                <img src="/src/assets/images/bg-curvy-desktop.svg" alt="img" className='w-full h-full' />
            </div>
        </section>

    )
}

export default Landing