import Link from "next/link"
import styles from "./styles/button-styles.module.scss"

const Button = () => {
      return (
            <div className="buttons">
                  <Link href="/posts/first-post">
                        <button 
                              className={`${styles.button} btn nunito text-animate`}
                              style={{
                                    marginTop: 20,
                                    padding: "13px 35px",
                                    fontWeight: "200",
                                    fontSize: "24px",
                              }}
                        >
                              get started
                        </button>
                  </Link>
            </div>
      )
}

export default Button