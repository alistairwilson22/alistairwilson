import { MdContent } from "@/app/types/types";
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  item: MdContent;
  link?: string;
  textAlign?: string;
};

export default function ContentCards({ item, link, textAlign }: Props) {
  return (
    <Card className={`pb-4 m-4 max-w-[250px] `} key={item.slug} >
      <Link href={`${link}`}>
        <Image
          alt={item.title || ""}
          className="object-cover rounded-xl m-auto"
          src={item.img || ""}
          width={270}
          height={300}
        />
        <CardBody>
          <h4 className={`font-bold text-large ${textAlign}`}>{item.title}</h4>
          <small className={`text-default-500 ${textAlign}`}>{item.date}</small>
          <p className={`text-tiny uppercase font-bold ${textAlign}`}>{item.author}</p>
        </CardBody>
      </Link>
      <CardFooter>
        <div className='inline-block'>
          {item.tags && item.tags.length > 0 ?
            item.tags.map((tag, tagIndex) => {
              const formattedTag = tag.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={`${item.slug}-${tagIndex}`} href={`/tag/${formattedTag}`} className='m-1 leading-10'>
                  <Button size="sm" radius="full" className="text-wrap max-w-[100px]">
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
  )
}
