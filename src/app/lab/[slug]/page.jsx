import { getLabContent } from "@/helpers/labHelpers"
import ReactMarkdown from 'react-markdown'
import {Card, CardBody, Image} from "@nextui-org/react";

export default function LabItem({ params }) {
  const { content, data } = getLabContent(params.slug)

  return (
    <main>

      <div className="bg-[url(/img/background/nodes.jpg)] bg-cover min-w-screen min-h-64 text-white flex flex-col justify-center items-center">
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
            <p className="text-tiny uppercase font-bold">{data.creator}</p>
          </CardBody>
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

