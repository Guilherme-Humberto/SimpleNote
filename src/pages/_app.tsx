import { useEffect } from 'react'
import GlobalStyles from '../styles/globals'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    async function acessVerifycation () {
        if(!localStorage.getItem("token")){
            router.push("Home")
        }
    }
    acessVerifycation()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
