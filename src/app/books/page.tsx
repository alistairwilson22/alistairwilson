import { getListOfItems } from '@/helpers/mdContentHelpers';
import { ContentType, MdContent } from "@/app/types/types"
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
        lineTwo="It's an imperfect list. There's books I've read, forgotten and not listed, and some books listed I've parked for now."
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
