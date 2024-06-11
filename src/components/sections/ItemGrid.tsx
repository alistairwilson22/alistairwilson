import { ContentType, MdContent } from '@/app/types/types';
import Grid from '../elements/Grid';
import FlexCenter from '../elements/FlexCenter';
import Container from '../elements/Container';
import ContentCards from '../elements/ContentCards';

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
            <ContentCards
              item={item}
              link={`${linkRoot}/${item.slug}`}
              />
          ))}
        </Grid>
      )}
    </Container>
  )
}
