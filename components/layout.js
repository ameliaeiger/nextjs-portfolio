import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { Inter, Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: "400", subsets: ['latin'] })



const name = 'FINN STUDIOS'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <Head>
         <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home && (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>



    <div className={styles.heroImage}>
      <div className={styles.textContainer} >
        <p className={`${pacifico.className} ${styles.CTAtext}`} >Sample call to action text.</p>
        <p className={`${styles.subtext}`} >Sample call to action text.</p>
      </div>
    </div>

    <section>{children}</section>

    </div>
  )
}

{/* IMAGE IMPORT EXAMPLE */}
{/* <Image
  priority
  src="/images/profile.jpg"
  className={utilStyles.borderCircle}
  height={108}
  width={108}
  alt=""
/> */}