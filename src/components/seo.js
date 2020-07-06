import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function SEO({ title, description, path, ogpath }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            name
          }
        }
      }
    `
  )
  console.log(site)
  const hostname = site.siteUrl
  const ogImageUrl = ogpath
    ? `${hostname}/${ogpath}`
    : `${hostname}/${site.image}`
  const url = path ? `${hostname}/${path}` : hostname
  const finalTitle = title ? `${site.title} | ${title}` : site.title
  const fullDescription = description || site.description
  const author = site.author
  const name = site.name

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta content={finalTitle} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={fullDescription} name="description" />
      <meta content={fullDescription} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={name} property="og:site_name" />
      <meta content={ogImageUrl} property="og:image" />
      <meta content={"image/png"} property="og:image:type" />
      <meta content={ogImageUrl} property="og:image:url" />
      <meta content={ogImageUrl} property="og:image:secure_url" />
      <meta content="summary_large_image" name="twitter:card"></meta>
      <meta content={finalTitle} property="twitter:title" />
      <meta content={fullDescription} property="twitter:description" />
      <meta content={author} property="twitter:creator" />
      <meta content={ogImageUrl} property="twitter:image" />
      <html lang="en-GB" />
    </Helmet>
  )
}

export default SEO
