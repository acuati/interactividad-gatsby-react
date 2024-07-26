import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"
import DarkMode from "./Darkmode"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [darkmode, setDarkMode]=useState(false);
  const handleDarkMode =()=>{
    setDarkMode(!darkmode)
  }
  return (
    <>
    <button style={{
    backgroundColor:'#333',
    color: 'white',
    position: 'fixed',
    right: 0
  }}
    onClick={handleDarkMode}>
      {darkmode?'Encender':'Apagar'}
  </button>
    <DarkMode dark={darkmode}>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className="container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      </DarkMode>
    </>
  )
}

export default Layout
