import Image from 'next/image';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import { Book } from '@/app/types/types';
import { FC } from 'react';

interface BookProps {
  books: Book[];
}

export const Books: FC<BookProps> = ({ books }) => {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-[-30px] bg-white rounded-lg">
      {books.length == 0 ? (
        <p className='text-center'>I've not added any books here yet</p>
      ) : (books.map((book: Book) => (
        <Card className="pb-4 m-4" key={book.slug} >
          <Link href={`/books/${book.slug}`}>
            <Image
              alt={book.title || ""}
              className="object-cover rounded-xl m-auto"
              src={book.img || ""}
              width={270}
              height={300}
            />
            <CardBody>
              <h4 className="font-bold text-large">{book.title}</h4>
              <small className="text-default-500">{book.date}</small>
              <p className="text-tiny uppercase font-bold">{book.author}</p>
            </CardBody>
          </Link>
          <CardFooter>
            <div className='inline-block'>
              {book.tags && book.tags.length > 0 ?
                book.tags.map((tag, tagIndex) => {
                  const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link key={`${book.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
                      <Button size="sm" radius="full">
                        {tag}
                      </Button>
                    </Link>
                  )
                })
                :
                <></>}
            </div>
          </CardFooter>
        </Card>
      )))}
    </div>
  )
}
