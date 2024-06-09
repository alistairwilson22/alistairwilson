import Image from 'next/image';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import { MdContent } from '@/app/types/types';
import { FC } from 'react';
import Grid from '../elements/Grid';
import FlexCenter from '../elements/FlexCenter';
import Container from '../elements/Container';

interface Props {
  books: MdContent[] | null;
}

export const BookSection = ({ books }: Props) => {

  return (
    <Container>
      {!books || books.length == 0 ? (
        <FlexCenter>
          <p>I've not added any books here yet</p>
        </FlexCenter>
      ) : (
        <Grid classes="mt-[-30px] bg-white rounded-lg">
          {books.map((book: MdContent) => (
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
          ))}
        </Grid>
      )}
    </Container>
  )
}
