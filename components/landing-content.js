// Next
import localFont from "next/font/local"

// Custom
import Button from "./button"

// Styles
import styles from "./styles/landing-content-styles.module.scss"

const myFont = localFont({ src: "../public/fonts/Recoleta-RegularDEMO.otf" })


const LandingContent = () => {
     return (
            <div className={`${styles.textContainer} text-animate`} >
                  <p className={`${styles.CTAtext} ${myFont.className}`} > Hi, I'm Amelia.</p>
                  <p className={`${styles.CTAsubtext} nunito`} > Front-End Engineer, UI/UX Designer, and mobile application developer. </p>
                  <div className={styles.buttonContainer}>
                        <Button />
                  </div>
            </div>
        )
}

export default LandingContent