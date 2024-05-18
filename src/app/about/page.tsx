import Link from 'next/link';
import {Card, CardBody, Image} from "@nextui-org/react";
import Tech from '@/components/sections/Tech';


export default function About() {
  
  return (
    <main className='text-center'>

      <div className="bg-[url(/img/background/causeway1.jpg)] bg-cover h-80 flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.4)] text-center p-4">
          <h1 className='p-4 mt-0'>About</h1>
          <p>Welcome to my website.</p>
          <p>If you're wondering what this website is and who it's for, you've come to the right page</p>
        </div>
      </div>
      
      <div className='px-24 pt-12 border-bottom'>
        <h2>Who am I?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <h4>Personally</h4>
            <p>I'll avoid getting philosophical on that question, and instead just give abit of a low down on who Alistair Wilson (that's me) is.</p>
            <p>I grew up in South West London (New Malden if you want to be exact), and headed to Manchester for university back in 2008.</p>
            <p>I've lived in Manchester ever since (15 years at time of writing).</p>
            <p>I've married a Northern Irish woman, and now have 3 great kids two identical girl twins and a boy just under 3 years under (so I had 3 kids under 3 for awhile).</p>
          </div>
          <div>
            <h4>Professionally</h4>
            <p>I entered into the tech scene back in 2012.</p>
            <p>I was fortunate to have a good boss and lots of opportunities in my first tech job so stayed for 11 years.</p>
            <p>In that role I quickly moved from testing and quality assurance to being the primary project manager for a number of large enterprise tech projects.</p>
            <p>My role adapted around 5 years in when I started up a new department aimed at providing hands on development for end customer web projects across a network of over 300 graphic design studios in multiple countries.</p>
            <p>I moved on to simultaneously lead 2 departments:<br/>
            In one team I was project manager for a team of senior developers working on a web-2-print CMS connecting end-users to studios, studios to suppliers, orders and invoices to accounting systems.<br/>
            In the other I was a lead developer for a team of junior developers working on end customer web applications.</p>
          </div>
        </div>
      </div>

      <div className='px-24 pt-12'>
        <h2>Who are you?</h2>
        <p>I'm a believer of writing to an intended audience. The writing style in documentation for example would be quite different if for a customer vs internal developer notes.</p>
        <p>So there's a few different audiences I have in mind with this website</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <div className='m-4 p-2'>
              <h4>Me</h4>
              <p>This website is mostly for my own benefit.</p>
              <p>In part that's to explore different technologies (Next.js for this site).</p>
              <p>More than that, the content is also mostly written for myself. The notes on professional books will make most sense to myself as they're </p>
          </div>
          <div className='m-4 p-2'>
              <h4>Mum?</h4>
              <p>Anyone who builds anything knows their mum is the biggest fan and customer right?</p>
              <p>Ok so this isn't really written for my mum, or for my friends either.</p>
              <p>So if you're a friend or family, move along. There's no need to delve too deep and find things to make fun of me for.</p>  
          </div>
          <div className='m-4 p-2'>
            <h4>Recruiters / employers</h4>
            <p>This website is also with you in mind. What can I say except your welcome!</p>
            <p>The parts you'll find most interesting are the projects in the lab.</p>
            <p>You can check out the professional books section, the notes on each book probably isn't going to be the most interesting thing to you, but you can get a flavour of some of my interests from the job titles and the tags.</p>
          </div>
        </div>
        <p>Check out the section below on what my main tech stack experiences are, although I'm open to exploring more and different ones.</p>
      </div>

      <Tech />

      <div className='px-24 py-12'>
        <h2>Can I see your CV?</h2>
        <p>Sure you can, you can see an online version at <a href="http://cv.alistairwilson.co.uk">http://cv.alistairwilson.co.uk</a></p>
      </div>
      
    </main>
  )
}
