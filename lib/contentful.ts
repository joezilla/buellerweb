import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface ContentfulPage {
  title: string
  slug: string
  description: string
  body: any // We'll use contentful's rich text types
  heroImage?: {
    fields: {
      file: {
        url: string
        details: {
          image: {
            width: number
            height: number
          }
        }
      }
      title: string
    }
  }
}

export async function getPage(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  })

  return response.items[0] as unknown as { fields: ContentfulPage }
}

export async function getAllPages() {
  const response = await contentfulClient.getEntries({
    content_type: 'page',
  })

  return response.items as unknown as Array<{ fields: ContentfulPage }>
} 