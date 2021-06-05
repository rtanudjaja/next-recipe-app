import Link from "next/link"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="header">
        <Link href="/">
          <a>Home Kitchen</a>
        </Link>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
