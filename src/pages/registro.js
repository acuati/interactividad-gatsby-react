import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormRegistro from "../components/formregistro"

const Registro = () => (
  <Layout>
    <FormRegistro/>
   
  
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Registro