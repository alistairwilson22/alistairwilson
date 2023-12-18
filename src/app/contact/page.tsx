'use client'

import Image from 'next/image';
import {Input, Textarea, Button} from "@nextui-org/react";
import { useReCaptcha } from "next-recaptcha-v3";
import { useState, useCallback } from 'react';
import axios from 'axios';


export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { executeRecaptcha } = useReCaptcha();

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Generate ReCaptcha token
      const token = await executeRecaptcha("form_submit");

      // Attach generated token to your API requests and validate it on the server
      try {
        const response = await axios.post('/api/sendEmail', {
          name,
          email,
          message,
        });

        console.log('Email response:', response.data);
        // Add further actions upon successful email submission (e.g., show success message)
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error (e.g., show error message)
      }

    },
    [executeRecaptcha, name, email, message],
  );

  
  return (
    <main>
      
      <div className="bg-[url(/img/background/contact.jpg)] bg-cover bg-center h-80 flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.5)] text-center p-4">
          <h1 className='mt-0'>Get in touch</h1>
          <p>If you want to contact me for any reason <br/>please use the contact form below</p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <p>Email me via <a href="mailto:hello@alistairwilson.co.uk">hello@alistairwilson.co.uk</a></p>
        </div>
        <div className='hidden'>
          <form onSubmit={handleFormSubmit}>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
              isRequired
              type="text" 
              label="Your Name" 
              labelPlacement="outside"
              placeholder="Enter your name" 
              className="m-2 name"
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input 
              isRequired
              type="email" 
              label="Email" 
              labelPlacement="outside"
              placeholder="Enter your email" 
              className="m-2 email"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Textarea
                isRequired
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                className="max-w-xs m-2 text-area"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button className="bg-[#465B65] text-white m-2" variant="shadow" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
