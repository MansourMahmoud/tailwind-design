import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "SignIn"])
  const headerRef = useRef()

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        headerRef.current.style.backgroundColor = "#0c1524"
        headerRef.current.style.padding = "20px 0"
      }else{
        headerRef.current.style.backgroundColor = "transparent"
        headerRef.current.style.padding = "60px 0"
      }
    })
  },[])


  return (
    <header ref={headerRef} className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div className="container mx-auto flex justify-between items-center gap-8 sm:gap-0 flex-col sm:flex-row">
      <a>
        <img src="/src/assets/images/logo.svg" alt="" />
      </a>
      <nav>
        <ul className="flex gap-5 items-center">
          {links.map((link, index) => (
            <li key={index} >
              <a className="text-white opacity-80 hover:opacity-100 hover:underline transition-opacity duration-200 " href={`${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header