import { ItemGrid } from '@/components/sections/ItemGrid';
import { ContentType, MdContent } from '@/app/types/types';
import { getListOfItems } from '@/helpers/mdContentHelpers';


export default function Lab() {
  const lab = ContentType.Lab
  const labList = getListOfItems(lab) as MdContent[];
  
  return (
    <main>

      <div className="bg-[url(/img/background/nodes.jpg)] bg-cover h-80 flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.4)] text-center p-4">
          <h1 className='p-4'>The Lab</h1>
          <p>Here you can find some personal dev projects of mine.</p>
          <p>You won't find commercial projects here, these are projects I've done for my own amusement or to explore a new technology.</p>
        </div>
      </div>
      
      <ItemGrid 
        items={labList} 
        type={ContentType.Lab}
      />
      
    </main>
  )
}
