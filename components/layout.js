import { useEffect, useState } from "react"

// Next
import Head from "next/head"
import Image from "next/image"

// Custom
import LandingContent from "./landing-content"
import Menu from "./menu"

// Styles
import utilStyles from "../styles/utils.module.css"
import styles from "./styles/layout.module.scss"
import Services from "./services"
import { Tooltip } from "@mui/material"

const name = "AMELIA EIGER"
export const siteTitle = "Amelia Eiger"


export default function Layout({ children, home }) {
      const [isOpen, setIsOpen] = useState(false)
      const [dimensions, setDimensions] = useState({})

      useEffect(() => {
            resize()
      },[])
      
      const resize = () => {
            setDimensions({
                  width: window.innerWidth,
                  height: window.innerHeight
            })
      }

  return (
      <>
        <Head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div style={{minWidth: dimensions.width, minHeight: dimensions.height}} className={styles.containerContainer}>
            <div className={styles.container} style={{minHeight: dimensions.height}} >
            {/* ------------------------- HEADER ------------------------- */}
                  <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

                  {home && (
                        <h1 className={`${utilStyles.logo} ${utilStyles.text} ${styles.siteName}`}>
                              <Image src="/icons/lightblack.png" width={200} height={200} className={styles.icon}/>
                              Amelia Eiger
                        </h1>
                  )}
                        <div className={`${styles.mailContainer} text-animate`}>
                              <Tooltip title="Contact Me" placement="right" arrow>
                                    <Image src="/icons/bubble2.png" width={200} height={200} className={styles.mail}/>
                              </Tooltip>
                        </div>
            {/* ------------------------------------------------------------------ */}
            {/* ----------------------------- CONTENT ------------------------------ */}
                  {home && (
                        <div className={`${styles.heroContainer} text-animate`}>
                                    <LandingContent />
                              </div>
                        )}
                  {!home && <section>{children}</section>}
            {/* -------------------------------------------------------------------- */}
            </div>
            <div 
                  className="text-animate"
                  style={{position: "absolute", top: dimensions.height, minHeight: dimensions.height, minWidth: dimensions.width}}>
                  <Services />
            </div>
      </div>
    </>
  )
}