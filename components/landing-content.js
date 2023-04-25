// Next
import localFont from "next/font/local"

// Custom
import Button from "./button"
import utilStyles from "../styles/utils.module.css"

// Styles
import styles from "./styles/landing-content-styles.module.scss"

const myFont = localFont({ src: "../public/fonts/Recoleta-RegularDEMO.otf" })


const LandingContent = () => {
     return (
            <div className={`${styles.textContainer} text-animate`} >
                  <p className={`${myFont.className} ${styles.CTAtext}`} > Hi, I'm Amelia. </p>
                  <div className={`${styles.CTAsubtext} ${utilStyles.montserrat}`}>
                        <p style={{margin: "0px"}}> I'm a passionate Front End Developer, UI/UX Designer, and content creator.</p>
                        <p style={{margin: "0px"}}> Let's build something together. </p>
                  </div>
                  <div className={styles.buttonContainer}>
                        <Button />
                  </div>
            </div>
        )
}

export default LandingContent