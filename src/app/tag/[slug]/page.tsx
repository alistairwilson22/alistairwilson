import { ContentType, MdContent } from '@/app/types/types';
import { getFilteredListOfItems } from '@/helpers/mdContentHelpers';
import { ItemGrid } from '@/components/sections/ItemGrid';
import Banner from '@/components/sections/Banner';

export default function Tag({ params }: any) {
  const formattedSlug = params.slug.replace('-', ' ');

  const bookList = getFilteredListOfItems(ContentType.Book, formattedSlug) as MdContent[];
  const labList = getFilteredListOfItems(ContentType.Lab, formattedSlug) as MdContent[];

  return (
    <main>

      <Banner
        title={formattedSlug}
        classes="bg-[url(/img/background/nodes.jpg)]"
        textMode='dark'
      />

      <div className="py-4 mb-4 text-center">
        <h3>Lab work</h3>
      </div>
      <ItemGrid items={labList} type={ContentType.Lab}/>

      <div className="py-4 mb-4 text-center">
        <h3>Books</h3>
      </div>
      <ItemGrid items={bookList} type={ContentType.Book}/>

    </main>
  )
}