import Image from 'next/image';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import { ContentType, MdContent } from '@/app/types/types';
import { FC } from 'react';
import Grid from '../elements/Grid';
import FlexCenter from '../elements/FlexCenter';
import Container from '../elements/Container';

interface Props {
  items: MdContent[] | null;
  type: ContentType;
}

export const ItemGrid = ({ items, type }: Props) => {

  const linkRoot = type == ContentType.Book ? "/books" : type == ContentType.Lab ? "/lab" : "";

  return (
    <Container>
      {!items || items.length == 0 ? (
        <FlexCenter>
          <p>I've not added any thing here yet</p>
        </FlexCenter>
      ) : (
        <Grid classes="mt-[-30px] bg-white rounded-lg">
          {items.map((item: MdContent) => (
            <Card className="pb-4 m-4" key={item.slug} >
              <Link href={`${linkRoot}/${item.slug}`}>
                <Image
                  alt={item.title || ""}
                  className="object-cover rounded-xl m-auto"
                  src={item.img || ""}
                  width={270}
                  height={300}
                />
                <CardBody>
                  <h4 className="font-bold text-large">{item.title}</h4>
                  <small className="text-default-500">{item.date}</small>
                  <p className="text-tiny uppercase font-bold">{item.author}</p>
                </CardBody>
              </Link>
              <CardFooter>
                <div className='inline-block'>
                  {item.tags && item.tags.length > 0 ?
                    item.tags.map((tag, tagIndex) => {
                      const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <Link key={`${item.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
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
