import {getListOfBooks} from '@/helpers/bookHelpers';
import {getListOfLab} from '@/helpers/labHelpers';
import Link from 'next/link';
import {Card, CardBody, CardFooter, Button, Image} from "@nextui-org/react";

export default function Tag({ params }) {
  const formattedSlug = params.slug.replace('-', ' ');
  const books = getListOfBooks();
  const lab = getListOfLab();
  const filteredBooks = books.filter((book) => {
    const lowercaseTags = book.tags.map((tag) => tag.toLowerCase());
    return lowercaseTags.includes(formattedSlug);
  });
  console.log(books)

  const filteredLab = lab.filter((lab) => {
    const lowercaseTags = lab.tags.map((tag) => tag.toLowerCase());
    return lowercaseTags.includes(formattedSlug);
  });

  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover h-80 text-white flex flex-col justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.4)] text-center p-4">
          <h1 className='p-4 capitalize'>{formattedSlug}</h1>
          <p></p>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h3>Lab work</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4 max-w-[80%] m-auto rounded-lg">
        {filteredLab.length == 0 ? (
          <p className='text-center'>I've not yet added any experiments for <span className='capitalize'>{formattedSlug}</span></p>
        ) : (
        filteredLab.map(item => (
            <Card className="pb-4 m-4" key={item.slug} >
              <Link href={`lab/${item.slug}`}>
              <Image
                alt={item.title}
                className="object-cover rounded-xl"
                src={item.img}
                width={270}
                max-height="300px"
              />
              <CardBody>
                <h4 className="font-bold text-large">{item.title}</h4>
                <small className="text-default-500">{item.date}</small>
                <p className="text-tiny uppercase font-bold">{item.creator}</p>
              </CardBody>
              </Link>
              <CardFooter>
                <div className='inline-block'>
                  {item.tags.map((tag, tagIndex) => { 
                    const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
                    return (
                    <Link key={`${item.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
                      <Button size="sm" radius="full">
                        {tag}
                      </Button>
                    </Link>
                  )})}
                </div>
              </CardFooter>
            </Card>
          )) )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3>Books</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4 max-w-[80%] m-auto rounded-lg">
        {filteredBooks.length == 0 ? (
          <p className='text-center'>I've not yet reviewed any books about <span className='capitalize'>{formattedSlug}</span></p>
          ) : (
          filteredBooks.map(book => (
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
              <CardFooter>
              <div className='inline-block'>
                {book.tags.map((tag, tagIndex) => { 
                  const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
                  return (
                  <Link key={`${book.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
                    <Button size="sm" radius="full">
                      {tag}
                    </Button>
                  </Link>
                )})}
              </div>
            </CardFooter>
            </Card>
          )))}
        </div>
      </div>

    </main>
  )
}