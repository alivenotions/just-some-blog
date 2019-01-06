import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <React.Fragment>
            <div
              style={{
                ...scale(0.2),
                marginBottom: rhythm(1),
              }}
            >
              <p>
                Hi! I am <strong>{author}</strong>. I'm a software engineer, poet, and a musician.
                This blog is a space for my personal opinions.
                <br /> <br />
                Feel free to message me about anything. I hope you have a good time here!
              </p>
            </div>
            <div style={{ ...scale(0.1), marginTop: rhythm(1) }}>
              <span><a href={`https://twitter.com/${social.twitter}`} target='_blank' rel="noopener">Twitter</a></span>
              <span><a href={`https://github.com/${social.github}`} target='_blank' rel="noopener">Github</a></span>
              <span><a href={`mailto:${social.mail}`}>Mail</a></span>
              <span><a href="/rss.xml"  target='_blank' rel='noopener'>RSS</a></span>
            </div>
          </React.Fragment>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          mail
        }
      }
    }
  }
`

export default Bio
