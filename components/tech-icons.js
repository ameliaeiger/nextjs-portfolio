import Image from "next/image"

import styles from "./styles/tech-icon-styles.module.scss"

const TechIcons = () => {

     return (
          <>
          <section className={`${styles.techIconsSectionContainer} text-animate`}>

               <div className={`${styles.iconSection}`}>
                    <div className={`${styles.iconContainer} text-animate`}>
                         <Image src="/icons/dev.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                    </div>
                    <div className={`${styles.iconContainer} text-animate`}>
                         <Image src="/icons/react.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                         <Image src="/icons/javascript.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                         <Image src="/icons/css3.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                         <Image src="/icons/html5.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                         <Image src="/icons/jquery.png" width={64} height={64} className={`${styles.figma} text-animate`} />

                    </div>
               </div>


               <div className={`${styles.iconSection}`}>
                    <div className={`${styles.iconContainer} text-animate`}>
                         <Image src="/icons/code.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                    </div>
                    <div className={`${styles.iconContainer} text-animate`}>
                         <Image src="/icons/figma.png" width={64} height={64} className={`${styles.figma} text-animate`} />
                         <Image src="/icons/github.png" width={200} height={200} className={`${styles.icon} text-animate`} />
                    </div>
               </div>

          </section>
          </>
     )
}

export default TechIcons