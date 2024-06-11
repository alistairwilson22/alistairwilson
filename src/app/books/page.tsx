import { getListOfItems } from '@/helpers/mdContentHelpers';
import { ContentType, MdContent } from "@/app/types/types"
import FlexCenter from '@/components/elements/FlexCenter';
import { ItemGrid } from '@/components/sections/ItemGrid';
import Banner from '@/components/sections/Banner';

export default function BookPage() {
  const contentType: ContentType = ContentType.Book
  const bookList = getListOfItems(contentType) as MdContent[];
  
  return (
    <main>

      <Banner
        title="Professional bookshelf"
        lineOne="Here you can find some of my musings and takeaways on professional books I've read."
        lineTwo="It's an imperfect book, there's old books I've read and forgotten and listed books I'm half way through and might abandon and return to in the future."
        classes="bg-[url(/img/background/library-shelves.jpg)]"
        textMode='light'
      />

      <ItemGrid 
        items={bookList}
        type={ContentType.Book}
      />

    </main>
  )
}
