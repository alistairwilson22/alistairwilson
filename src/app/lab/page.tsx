import { ItemGrid } from '@/components/sections/ItemGrid';
import { ContentType, MdContent } from '@/app/types/types';
import { getListOfItems } from '@/helpers/mdContentHelpers';
import Banner from '@/components/sections/Banner';


export default function Lab() {
  const lab = ContentType.Lab
  const labList = getListOfItems(lab) as MdContent[];
  
  return (
    <main>

      <Banner
        title="The Lab"
        lineOne='Here you can find some personal dev projects of mine.'
        lineTwo="You won't find commercial projects here, these are projects I've done for my own amusement or to explore a new tech."
        classes="bg-[url(/img/background/nodes.jpg)]"
        textMode='dark'
      />
      
      <ItemGrid 
        items={labList} 
        type={ContentType.Lab}
      />
      
    </main>
  )
}
