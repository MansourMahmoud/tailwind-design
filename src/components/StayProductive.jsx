import React from 'react'
import illustrationStayProductive from '../assets/images/illustration-stay-productive.png'
import iconArrow from '../assets/images/icon-arrow.svg'

const StayProductive = () => {
  return <section className='pb-[150px]'>
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
    <div>
        <img className='w-full h-full' src={`${illustrationStayProductive}`} alt="stay-productive-img" />
    </div>
    <div>
    <h2 className='font-medium text-[30px] leading-[50px]'>
        Stay productive,
        <br />
        wherever you are
    </h2>
    <div className='text-sm font-normal my-[15px] tracking-[0.8px]'>
        <p className='mb-[15px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis suscipit sint deleniti voluptatem. Cupiditate, autem? Aut quia eaque culpa praesentium fuga consequatur sequi doloribus! Obcaecati delectus dolores excepturi magnam?
        </p>
        
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis suscipit sint deleniti voluptatem. Cupiditate, autem? Aut quia eaque culpa praesentium fuga consequatur sequi doloribus! Obcaecati delectus dolores excepturi magnam?
        </p>
        
    </div>
    <a href="/" className='flex text-primary hover:text-[#42b0d1] border-b-2 border-primary border-solid transition-colors duration-200 pb-[5px] gap-[15px] w-fit'>
        See how Fylo works
        <img className='w-[20px] animate-moveRight h-[20px] object-contain' src={`${iconArrow}`} alt="arrow-img" />
    </a>
    </div>
    
    </div>
  </section>
}

export default StayProductive