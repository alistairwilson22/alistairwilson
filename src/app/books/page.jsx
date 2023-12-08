import {getListOfBooks} from '@/helpers/bookHelpers';
import Link from 'next/link';
import {Card, CardBody, Image} from "@nextui-org/react";


export default function Books() {
  const books = getListOfBooks();
  
  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover h-80 text-white flex flex-col justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.4)] text-center p-4">
          <h1 className='p-4'>Professional bookshelf</h1>
          <p>Here you can find some of my musings and takeaways on professional books I've read.</p>
          <p>I wish I'd started this years ago... there's things I read a decade ago that I've forgotten the name of let alone the ideas in it.  </p>
        </div>
      </div>
      
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-[-30px] max-w-[80%] m-auto bg-white rounded-lg">
          {books.map(book => (
            <Card className="pb-4 m-4" key={book.slug} >
              <Link href={`books/${book.slug}`}>
              <Image
                alt={book.title}
                className="object-cover rounded-xl"
                src={book.img}
                width={270}
                max-height="300px"
              />
              <CardBody>
                  <h4 className="font-bold text-large">{book.title}</h4>
                  <small className="text-default-500">{book.date}</small>
                  <p className="text-tiny uppercase font-bold">{book.author}</p>
                </CardBody>
                </Link>
            </Card>
          ))}
        </div>
      </div>

    </main>
  )
}
