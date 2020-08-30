import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.headerFontFamily = ['Montserrat', 'sans-serif']
Wordpress2016.bodyFontFamily = ['Montserrat', 'sans-serif']
Wordpress2016.headerWeight = 700

Wordpress2016.overrideThemeStyles = () => {
  return {
    'body': {
      backgroundColor: `#F3F3F3`,
    },
    'a': {
      color: `#005C56`,
    },
    'a:hover': {
      boxShadow: `0 -0.2em 0 0 #43B992 inset`
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'span': {
      marginRight: `0.5em`
    },
    'p': {
      marginBottom: `1.5rem`
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: `2.5rem`
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
