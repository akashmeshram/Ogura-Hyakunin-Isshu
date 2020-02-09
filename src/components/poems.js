import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../styles/poem.module.css"
import BackgroundImage from 'gatsby-background-image'

export default () => {

    const data = useStaticQuery(
        graphql`
            query {
                allPoemsDataJson {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            id
                            author_en
                            title
                        }
                    }
                    totalCount
                }
                file(name: {eq: "card_Background_3"}) {
                  publicURL
                  childImageSharp {
                    fixed(width: 265, height: 370) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
            }
            `
      )

    return (    
      <div>
        <h4>{data.allPoemsDataJson.totalCount} Poems</h4>
          <div className={styles.poemsContainer}>
            {data.allPoemsDataJson.edges.map(({ node }) => (
              <BackgroundImage Tag="div" className={styles.poem} key={node.id} fixed={data.file.childImageSharp.fixed}>               
                  <div className={styles.head}> 
                    <h1 className={styles.id}>{node.id}</h1>
                    <Link to={node.fields.slug}>
                      <button className={styles.title}> {node.title}</button>
                    </Link>                    
                  </div>
                  <div className={styles.foot}>
                    <Link to={node.fields.slug}>
                      <button className={styles.author}> {node.author_en}</button>
                    </Link>
                  </div>                                                                                      
              </BackgroundImage>
            ))}
          </div>     
      </div>
                
  )
}