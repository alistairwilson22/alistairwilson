import Link from 'next/link';
import {Card, CardBody, Image} from "@nextui-org/react";


export default function About() {
  
  return (
    <main>

      <div className="bg-[url(/img/background/nodes.jpg)] bg-cover h-80 flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.4)] text-center p-4">
          <h1 className='p-4'>About</h1>
          <p>Welcome to my website.</p>
          <p>If you're wondering what this website is and who it's for, you've come to the right page</p>
        </div>
      </div>
      
      <div className='px-24 pt-24 border-bottom'>
        <h2>Who am I?</h2>
        <h4>Personally</h4>
        <p>I'll avoid getting philosophical on that question, and instead just give abit of a low down on who Alistair Wilson (that's me) is.</p>
        <p>I grew up in South West London (New Malden if you want to be exact), and headed to Manchester for university back in 2008.</p>
        <p>I've lived in Manchester ever since (15 years at time of writing).</p>
        <p>I've married a Northern Irish woman, and now have 3 great kids two identical girl twins and a boy just under 3 years under (so I had 3 kids under 3 for awhile).</p>
        <h4>Professionally</h4>
        <p></p>
      </div>

      <div className='px-24 pt-24'>
        <h2>Who are you?</h2>
        <p>I'm a believer of writing to an intended audience. The writing style in documentation for example would be quite different if for a customer vs internal developer notes.</p>
        <p>So there's a few different audiences I have in mind with this website</p>
        <h4>Me</h4>
        <p>This website is mostly for my own benefit.</p>
        <p>In part that's to explore different technologies (Next.js for this site).</p>
        <p>More than that, the content is also mostly written for myself. The notes on professional books will make most sense to myself as they're </p>
        <h4>Mum?</h4>
        <p>Anyone who builds anything knows their mum is the biggest fan and customer right?</p>
        <p>Ok so this isn't really written for my mum, or for my friends either.</p>
        <p>So if you're a friend or family, move along. There's no need to delve too deep and find things to make fun of me for.</p>
        <h4>Recruiters / employers</h4>
        <p>This website is also with you in mind. What can I say except your welcome!</p>
        <p>The parts you'll find most interesting are the projects in the lab.</p>
        <p>You can check out the professional books section, the notes on each book probably isn't going to be the most interesting thing to you, but you can get a flavour of some of my interests from the job titles and the tags.</p>
        <p>Check out the section below on what my main tech stack experiences are, although I'm open to exploring more and different ones.</p>
      </div>

      <div className='px-24 pt-24'>
        <h2>What's your tech stack?</h2>
        <h4>Languages</h4>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
          <li>Node</li>
          <li>React</li>
          <li>Vue</li>
          <li>Next</li>
          <li>Typescript</li>
          <li>Laravel</li>
          <li>Yii</li>
        </ul>
      </div>

      <div className='px-24 py-24'>
        <h2>Can I see your CV?</h2>
        <p>Sure you can, you can see an online version at <a href="http://cv.alistairwilson.co.uk">http://cv.alistairwilson.co.uk</a></p>
      </div>
      
    </main>
  )
}
