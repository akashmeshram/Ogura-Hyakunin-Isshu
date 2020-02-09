import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../styles/poempost.module.css"

export default ({ data, pageContext }) => {
  const poem = data.poemsDataJson
  const { previous, next } = pageContext

  const poemEng = poem.list_full_en
                  .split("//").map((val, key) => <span key = {key}>{val} <br /></span>)
  const poemRom = poem.list_full_romaji
                  .split("|").map((val, key) => <span key = {key}>{val} <br /></span>)
                 
  return (
    <Layout>
      <h1>{poem.id}</h1>
      <h2>{poem.author}</h2>
      <h3>{poem.author_romaji}</h3>
      
      <div className={styles.contents}>        
        <Img className={styles.poet} fixed={data.file.childImageSharp.fixed} alt={poem.author_en} />
        <div className={styles.poems}>
          <p className={styles.rom}>{poemRom}</p>     
          <p className={styles.eng}>{poemEng}</p>
        </div>                            
      </div>
      <div className={styles.pnav}>
        {previous && (<Link to={previous.fields.slug} rel="prev"> <button>← Prev</button> </Link> )}         
        {next && (<Link to={next.fields.slug} rel="next"> <button>Next →</button> </Link> )}   
      </div>      
      <Link to={"/"} rel="next" className={styles.home}> <button>Home</button> </Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $name: String!) {
    poemsDataJson(fields: { slug: { eq: $slug } }) {
      kimari_simo_list
      list_full
      list_full_en
      list_full_romaji
      list_torifuda
      author
      author_en
      author_romaji
      id
      poem_list
      poem_theme
    }
    file(extension: {eq: "jpg"}, name: {eq: $name}) {
      publicURL
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`