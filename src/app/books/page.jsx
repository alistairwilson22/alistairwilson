import {getListOfBooks} from '@/helpers/bookHelpers';
import Image from 'next/image';
import Link from 'next/link';

export default function Books() {
  const books = getListOfBooks();
  
  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover h-64 text-white flex flex-col justify-center items-center">
        <h1 className='text-2xl'>Professional bookshelf</h1>
        <p>Here you can find some of my musings and takeaways on professional books I've read.</p>
        <p>I wish I'd started this years ago... there's things I read a decade ago that I've forgotten the name of let alone the ideas in it.  </p>
      </div>
      
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-[-30px] max-w-[80%] m-auto bg-white rounded-lg">
          {books.map(book => (
            <article key={book.slug} className='col-span-1 text-center p-4'>
              <div className='border rounded max-w-[200px] m-auto'>
                <Link href={`books/${book.slug}`}>
                  <Image src={book.img} width={100} height={150} className='m-auto my-4'/>
                  <h3 className='text-lg min-h-[120px]'>{book.title}</h3>
                  <p>{book.date}</p>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
