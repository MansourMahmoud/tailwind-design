import React, { useState } from 'react'

const Features = () => {

  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem doloribus tempore dolores, placeat libero, ratione nostrum eius saepe expedita totam fugit architecto"
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem doloribus tempore dolores, placeat libero, ratione nostrum eius saepe expedita totam fugit architecto"
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem doloribus tempore dolores, placeat libero, ratione nostrum eius saepe expedita totam fugit architecto"
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem doloribus tempore dolores, placeat libero, ratione nostrum eius saepe expedita totam fugit architecto"
    },
  ])

  return (
    <section className='mt-10 pb-[150px]'>
      <div className='container'>

        <div className='gap-[100px] grid grid-cols-1 md:grid-cols-2 w-[820px] mx-auto max-w-full'>
          {items.map((item) => (

            <div key={item.title} className='element-center flex-col text-center'>
              <img className='w-[80px] h-[80px] object-contain' src={`/src/assets/images/${item.icon}`} alt="icon" />

              <h1 className='text-xl font-semibold'>
                {item.title}
              </h1>

              <p className='font-normal text-sm'>
                {item.desc}
              </p>
            </div>


          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
