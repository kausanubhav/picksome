// src/App.tsx
import { FC, useState } from "react"
import { useQuery } from "react-query"
import axios from "axios"
import Card from "./components/Card"
import Layout from "./layouts/layout"

const fetchImages = async (page: number) => {
  const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
  return response.data
}

export type Image = {
  id: string
  author: string
  download_url: string
}

const App: FC = () => {
  const [page, setPage] = useState(1)
  const { data: images, isLoading } = useQuery<Image[]>(["images", page], () => fetchImages(page), {
    keepPreviousData: true, // Keep previous data while loading new data
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <Layout>
      <div className="container px-4">
        {/* First Row for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-2 mb-2">
          {images && images.length >= 3 && (
            <>
              {/* Big Image */}
              <div className="col-span-3 flex items-stretch">
                <Card
                  src={images[0].download_url}
                  alt={images[0].author}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Two Smaller Images */}
              <div className="col-span-1 flex flex-col gap-4">
                <Card
                  src={images[1]?.download_url}
                  alt={images[1]?.author}
                  className="w-full h-1/2 object-cover"
                />
                <Card
                  src={images[2]?.download_url}
                  alt={images[2]?.author}
                  className="w-full h-1/2 object-cover"
                />
              </div>
            </>
          )}
        </div>

        {/* Responsive Layout for Smaller Screens */}
        <div className="grid grid-cols-1 gap-4 md:hidden mb-8">
          {images &&
            images.length > 0 &&
            images.map((image: Image, index: number) => (
              <Card
                key={index}
                src={image.download_url}
                alt={image.author}
                className="w-full h-60 object-cover"
              />
            ))}
        </div>

        {/* Second Row with Two Columns for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-4">
          {images && images.length > 3 && (
            <>
              <Card src={images[3]?.download_url} alt={images[3]?.author} />
              <Card src={images[4]?.download_url} alt={images[4]?.author} />
            </>
          )}
        </div>

        <div className="flex justify-center my-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-200 rounded-lg">{page}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
            onClick={() => setPage((old) => (images?.length === 5 ? old + 1 : old))}
            disabled={images && images.length < 5}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default App
