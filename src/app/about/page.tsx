import Link from 'next/link';
import {Card, CardBody, Image} from "@nextui-org/react";
import Tech from '@/components/sections/Tech';
import Banner from '@/components/sections/Banner';


export default function About() {
  
  return (
    <main className='text-center'>

      <Banner
        title="About"
        lineOne="Welcome to my website."
        lineTwo="If you're wondering what this website is and who it's for, you've come to the right page."
        classes="bg-[url(/img/background/causeway1.jpg)]"
        textMode='dark'
      />
      
      <div className='px-24 pt-12 border-bottom'>
        <h2>Who am I?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <h4>Personally</h4>
            <p>Here's some very quick run down of my history.</p>
            <p>I grew up in South West London (New Malden if you know the area), and headed to Manchester for university in 2008.</p>
            <p>I've lived in Manchester ever since (15 years at time of writing).</p>
            <p>I've been married to a lovely Northern Irish woman since 2012, and now have 3 great kids to boot. Norah & Jessica are identical twin girls born 2016 and Caleb followed in 2018.</p>
          </div>
          <div>
            <h4>Professionally</h4>
            <p>I entered into the tech scene back in 2012.</p>
            <p>I was fortunate to work with a great team and was given a lot of opportunities in my first tech job so stayed at that company for 11 years.</p>
            <p>In this role I quickly moved from testing and quality assurance to being the primary project manager for a number of large enterprise tech projects.</p>
            <p>My role adapted around 5 years in when I started up a new department aimed at providing hands on development for end customer web projects across a network of over 300 graphic design studios in multiple countries.</p>
            <p>I moved on to simultaneously lead 2 departments:<br/>
            In one team I was project manager for a team of senior developers working on a web-2-print CMS connecting end-users to studios, studios to suppliers, orders and invoices to accounting systems.<br/>
            In the other I was a lead developer for a team of junior developers working on end customer web applications.</p>
            <p>In 2024 I decided it was time for a new challenge and took on a position as head of development for a small team working on lead generation for law firms. I've also worked on a php based content management system for the company.</p>
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
              <p>In part that's to explore different technologies.</p>
              <p>More than that, the content is also mostly written for myself. The notes on professional books will make most sense to myself as they're really internal notes meant to trigger my memory.</p>
          </div>
          <div className='m-4 p-2'>
              <h4>Mum?</h4>
              <p>Anyone who builds anything knows their mum is the biggest fan and customer right?</p>
              <p>Ok so this isn't really written for my mum, or for my friends either.</p>
              <p>So if you're a friend or family, move along. There's no need to delve too deep and find things in here to make fun of me for.</p>  
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
