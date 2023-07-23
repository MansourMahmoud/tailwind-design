import React, { useState } from 'react'
import quotes from '../assets/images/bg-quotes.png'
import profile1 from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'

const Testimonials = () => {
    const [testData, setTestData] = useState([
        {
            id: 1,
            img: profile1,
            name: "Acces your files,anywhere",
            position: "Founder & CEO, Huddle",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero fuga voluptate voluptatum consequatur sed aut nemo delectus"
        },
        {
            id: 2,
            img: profile2,
            name: "Acces your files,anywhere",
            position: "Founder & CEO, Huddle",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero fuga voluptate voluptatum consequatur sed aut nemo delectus"
        },
        {
            id: 3,
            img: profile3,
            name: "Acces your files,anywhere",
            position: "Founder & CEO, Huddle",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero fuga voluptate voluptatum consequatur sed aut nemo delectus"
        },
    ])

    return <section className='pb-[350px]'>
        <div className='container relative'>
            <div className='absolute left-[20px] top-[-35px]'>
                <img src={`${quotes}`} alt="quote" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                {testData.map((item)=>(
                    <div key={item.id} className='z-10 bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]'>
                        <p className='text-sm font-normal tracking-[0.8px] mb-[30px]'>
                            {item.desc}
                        </p>
                        <div className='flex gap-5'>
                        <div>
                            <img className='w-[50px] h-[50px] rounded-full object-contain' src={`${item.img}`} alt="profile" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <strong className=''>{item.name}</strong>
                            <p className='font-normal text-sm'>{item.position}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
}

export default Testimonials