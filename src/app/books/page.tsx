import { getListOfItems } from '@/helpers/mdContentHelpers';
import { ContentType, MdContent } from "@/app/types/types"
import { BookSection } from '@/components/sections/BookSection';
import FlexCenter from '@/components/elements/FlexCenter';

export default function BookPage() {
  const contentType: ContentType = ContentType.Book
  const bookList = getListOfItems(contentType) as MdContent[];
  
  return (
    <main>

      <FlexCenter classes="bg-[url(/img/background/library-shelves.jpg)] bg-cover h-80 text-white">
        <div className="bg-[rgba(0,0,0,0.4)] text-center p-4">
          <h1 className='p-4 mt-0'>Professional bookshelf</h1>
          <p>Here you can find some of my musings and takeaways on professional books I've read.</p>
          <p>I wish I'd started this years ago... there's things I read a decade ago that I've forgotten the name of let alone the ideas in it.  </p>
        </div>
      </FlexCenter>
      
      <BookSection books={bookList} />

    </main>
  )
}
