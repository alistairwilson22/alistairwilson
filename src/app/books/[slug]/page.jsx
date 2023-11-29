import { getBookContent } from "@/helpers/bookHelpers"
import ReactMarkdown from 'react-markdown'

export default function Book({ params }) {
  const { content, data } = getBookContent(params.slug)

  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover min-w-screen h-64 text-white flex flex-col justify-center items-center">
        <h1 className='text-2xl'>{data.title}</h1>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
      
    </main>
  )
}