import { getItemContent } from "@/helpers/mdContentHelpers"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import {Card, CardBody, CardFooter, Image, Link, Button} from "@nextui-org/react";
import { ContentType } from "@/app/types/types";
import ContentCards from "@/components/elements/ContentCards";
import FlexCenter from "@/components/elements/FlexCenter";
import Container from "@/components/elements/Container";

export default function LabItem({ params }: any) {
  const { content, data } = getItemContent(ContentType.Lab, params.slug)

  return (
    <main>

      <FlexCenter classes="bg-[url(/img/background/nodes.jpg)] bg-cover min-w-screen">
        <ContentCards
          item={data}
          link="#"
          textAlign="text-center"
        />
      </FlexCenter>

      <FlexCenter classes="min-h-screen p-8">
        <Container classes="">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </Container>
      </FlexCenter>
      
    </main>
  )
}