import React from "react"
import Footer from "./footer"

const Layout = props => {
  return (
    <div>
      {props.children}
      <p>From the layout</p>
      <Footer />
    </div>
  )
}

export default Layout
