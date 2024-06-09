import ReactMarkdown from 'react-markdown'
import {Card, CardBody, CardFooter, Button, Image, Link} from "@nextui-org/react";
import { getItemContent } from '@/helpers/mdContentHelpers';
import { ContentType } from '@/app/types/types';

export default function Book({ params }: any) {
  const { content, data } = getItemContent(params.slug, ContentType.Book)

  return (
    <main>

      <div className="bg-[url(/img/background/library-shelves.jpg)] bg-cover min-w-screen text-white flex flex-col justify-center items-center">
      <Card className="pb-4 m-4 max-w-[250px]" key={data.slug} >
        <Image
            alt={data.title}
            className="object-cover rounded-xl"
            src={data.img}
            width={250}
            max-height="300px"
          />
        <CardBody className="text-center">
          <h4 className="font-bold text-large">{data.title}</h4>
          <small className="text-default-500">{data.date}</small>
          <p className="text-tiny uppercase font-bold">{data.author}</p>
        </CardBody>
        <CardFooter>
          <div className='inline-block'>
            {data.tags.map((tag: any, tagIndex: any) => { 
              const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
              return (
              <Link key={`${data.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
                <Button size="sm" radius="full">
                  {tag}
                </Button>
              </Link>
            )})}
          </div>
        </CardFooter>
      </Card>
      </div>

      <div className="flex min-h-screen flex-col justify-between p-24">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
      
    </main>
  )
}