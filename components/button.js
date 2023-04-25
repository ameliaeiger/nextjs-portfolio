import styles from "./styles/button-styles.module.scss"

const Button = () => {
      const handleClick = () => {
            window.scrollTo({
                  top: 1000,
                  behavior: "smooth"
            })
      }


      return (
            <div className="buttons">
                  <button 
                        className={`${styles.button} btn nunito text-animate`}
                        style={{
                              marginTop: 20,
                              padding: "13px 35px",
                              fontWeight: "200",
                              fontSize: "24px",
                        }}
                        onClick={() => handleClick()}
                  >
                        get started
                  </button>
            </div>
      )
}

export default Button