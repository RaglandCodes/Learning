import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Ragland</h1>

      <h2>About Me</h2>

      <p>
        {" "}
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  )
}

export default IndexPage
