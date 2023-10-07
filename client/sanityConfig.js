import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '85e4z8hj',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-04', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  const builder = imageUrlBuilder(client)

  export function urlFor(source) {
      return builder.image(source);
    }
  
  export async function getData(section){
      const data = await client.fetch(section)
      return data
  }
  export function urlToImage(data){
      for (let i = 0; i < data.length; i++) {
          data[i].image = urlFor(data[i].image).url()
      }
      return data
  }