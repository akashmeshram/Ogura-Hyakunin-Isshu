import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../styles/poem.module.css"

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
            }
            `
      )

    return (    
      <div>
        <h4>{data.allPoemsDataJson.totalCount} Poems</h4>
          <div className={styles.poemsContainer}>
            {data.allPoemsDataJson.edges.map(({ node }) => (
              <div className={styles.poem} key={node.id}>
                <div className={styles.head}> 
                  <h1 className={styles.id}>{node.id}</h1>
                  <Link to={node.fields.slug}>
                    <button className={styles.title}> {node.title}</button>
                  </Link>
                  
                </div>                
                <Link to={node.fields.slug} className={styles.foot}>
                  <button className={styles.author}> {node.author_en}</button>
                </Link>                                             
              </div>
            ))}
          </div>     
      </div>
                
  )
}