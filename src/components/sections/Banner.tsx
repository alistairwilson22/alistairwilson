import Container from "../elements/Container";
import FlexCenter from "../elements/FlexCenter";

type Props = {
  title?: string;
  lineOne?: string;
  lineTwo?: string;
  classes?: string;
  textMode?: string;
};

export default function Banner({ title, lineOne, lineTwo, classes, textMode = 'dark'}: Props) {
  const overlay = textMode == 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const text = textMode == 'dark' ? "text-normal" : "text-white"
  return (
    <FlexCenter classes={`bg-cover h-80 ${classes}`}>
      <Container classes={`bg-[${overlay}] text-center p-2 ${text}`}>
        <h1 className='p-2 capitalize'>{title}</h1>
        <p>{lineOne}</p>
        <p>{lineTwo}</p>
      </Container>
    </FlexCenter>
  )
}
