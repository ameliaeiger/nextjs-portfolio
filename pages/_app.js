import Layout from "../components/layout";
import "../styles/globals.css"
import variables from "../styles/variables.modules.scss"

export default function App({ Component, pageProps}) {
     return (
            <Component variables={variables} {...pageProps} />
     )
   }