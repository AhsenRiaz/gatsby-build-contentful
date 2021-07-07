import * as React from "react"
import {useStaticQuery , graphql} from "gatsby"

const IndexPage = () => {

  const query = useStaticQuery(
    graphql `
    query  {
      allContentfulBlogPost {
        nodes {
          title
        }
      }
    }
    `
  )

  const data = query.allContentfulBlogPost.nodes
  console.log("data" , data)

  return (
   <div>
     {data.map((arr , i) => (
       <h1 key={i} >{arr.title}</h1>
     ))}
   </div>
  )
}

export default IndexPage
