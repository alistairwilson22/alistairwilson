import {getListOfLab} from '@/helpers/labHelpers';
import Link from 'next/link';
import {Card, CardBody, CardFooter, Button, Image} from "@nextui-org/react";


export default function Lab() {
  const lab = getListOfLab();
  
  return (
    <main>

      <div className="bg-[url(/img/background/nodes.jpg)] bg-cover h-80 flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.4)] text-center p-4">
          <h1 className='p-4'>The Lab</h1>
          <p>Here you can find some personal dev projects of mine.</p>
          <p>You won't find commercial projects here, these are projects I've done for my own amusement or to explore a new technology.</p>
        </div>
      </div>
      
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-[-30px] max-w-[80%] m-auto bg-white rounded-lg">
          {lab.map(item => (
            <Card className="pb-4 m-4" key={item.slug} >
              <Link href={`lab/${item.slug}`}>
              <Image
                alt={item.title}
                className="object-cover rounded-xl m-auto"
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
          ))}
        </div>
      </div>
      
    </main>
  )
}
