// Libraries
import {Sling as Hamburger} from "hamburger-react"
import { useEffect, useState } from "react"

// Styles
import styles from "./styles/menu-styles.module.scss"


const Menu = ({ isOpen, setIsOpen }) => {
      const [menuClass, setMenuClass] = useState("hidden")

      useEffect(() => {
            toggle()
      },[isOpen])

      const toggle = () => {
            isOpen ? setMenuClass("shown") : setMenuClass("hidden")
      }

      return (
            <>
            <section className={`${styles[menuClass]} ${styles.navContainer}`}>
                  <div className={`${styles.navLinks} text-animate nunito`}>
                              <a href="/">Home</a>
                              <a href="/posts/portfolio">Portfolio</a>
                              <a href="/">Contact</a>
                              <a href="/">FAQ</a>
                  </div>
            </section>

            <a className={`text-animate ${styles.hamburger}`} >
                  <Hamburger 
                        size={30}
                        direction="right"
                        distance="sm"
                        color="black"
                        toggled={isOpen}
                        toggle={() => setIsOpen(!isOpen)}
                        rounded
                  />
            </a>
            </>
      )
}

export default Menu