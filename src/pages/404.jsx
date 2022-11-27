import React from "react"

import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout >


    <Link to="/" >
      <div className="hover:text-bloghalka-second text-bloghalka-main ">
        <h3 className="font-bold text-center text-4xl md:text-5xl">404</h3>
      </div>
    </Link>

  </Layout>

)

export default NotFoundPage
