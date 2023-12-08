import Image from 'next/image';
import {Input, Textarea, Button} from "@nextui-org/react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Get in touch</h1>
      <p>If you want to contact me for any reason please use the contact form below</p>

      <div>
        <form>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input 
          isRequired
          type="text" 
          label="Your Name" 
          placeholder="Enter your name" 
          />
          <Input 
          isRequired
          type="email" 
          label="Email" 
          placeholder="Enter your email" 
          />
        </div>
        <Textarea
          isRequired
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="max-w-xs"
        />
        <Button color="primary" variant="shadow">
          Submit
        </Button>
        </form>
      </div>
    </main>
  )
}
