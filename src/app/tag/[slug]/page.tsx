import { ContentType, MdContent } from '@/app/types/types';
import { getFilteredListOfItems } from '@/helpers/mdContentHelpers';
import { ItemGrid } from '@/components/sections/ItemGrid';

export default function Tag({ params }: any) {
  const formattedSlug = params.slug.replace('-', ' ');

  const bookList = getFilteredListOfItems(ContentType.Book, formattedSlug) as MdContent[];
  const labList = getFilteredListOfItems(ContentType.Lab, formattedSlug) as MdContent[];

  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover h-80 text-white flex flex-col justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.4)] text-center p-4">
          <h1 className='p-4 capitalize'>{formattedSlug}</h1>
          <p></p>
        </div>
      </div>

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