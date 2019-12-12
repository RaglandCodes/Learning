import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetaData {
  //         author
  //       }
  //     }
  //   }
  // `)
  return (
    <footer>
      <p> This is the footer. Written by data.site.siteMetaData.author </p>
    </footer>
  )
}

export default Footer
