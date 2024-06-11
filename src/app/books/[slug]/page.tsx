import ReactMarkdown from 'react-markdown'
import { Card, CardBody, CardFooter, Button, Image, Link } from "@nextui-org/react";
import { getItemContent } from '@/helpers/mdContentHelpers';
import { ContentType } from '@/app/types/types';
import ContentCards from '@/components/elements/ContentCards';
import FlexCenter from '@/components/elements/FlexCenter';
import Container from '@/components/elements/Container';

export default function Book({ params }: any) {
  const { content, data } = getItemContent(ContentType.Book, params.slug)

  return (
    <main>

      <FlexCenter classes="bg-[url(/img/background/library-shelves.jpg)] bg-cover">
        <ContentCards
          item={data}
          link="#"
          textAlign="text-center"
        />
      </FlexCenter>

      <FlexCenter classes="min-h-screen p-8">
        <Container classes="gap-4">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </Container>
      </FlexCenter>

    </main>
  )
}