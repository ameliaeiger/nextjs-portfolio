import Image from "next/image"
import TechIcons from "./tech-icons"

import styles from "./styles/services-styles.module.scss"

const Services = () => {

     return (
          <div className={`${styles.servicesContainer} text-animate`}>
               Services
               <TechIcons />
          </div>
     )
}

export default Services