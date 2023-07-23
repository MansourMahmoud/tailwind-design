import React from 'react'

const GetStarted = () => {
    return <section>
        <div className='container relative'>
            <div className='bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] max-w-full min-h-[275px] p-[30px]'>
                <h2 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>
                    Get early access today
                </h2>
                <p className='w-[620px] max-w-full mx-auto text-center mb-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora a accusamus exercitationem praesentium deleniti doloremque reprehenderit veniam illo non similique porro.
                </p>
                <form action="" className='w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]'>
                    <input className='w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] text-[#1c2230] outline-none border-none text-sm font-medium' type="email" placeholder='email@example.com' />
                    <button className='w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-full ' type='submit'>Get Started For free</button>
                </form>
            </div>
        </div>
    </section>
}

export default GetStarted