import Image from "next/image";
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ns5agwng',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-25',
})

async function getData() {
  return await client.fetch(`*[_type == "page"][0]`)
}

export default async function Home() {
  const data = await getData()
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}
