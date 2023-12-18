import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import {FaFlask, FaRegAddressCard, FaEnvelope, FaBook} from "react-icons/fa";

export default function WhatToDo() {
    const WhatToDo = [
        {
          icon: <FaBook size="4em" className="m-auto mt-4" color="brown" />,
          title: 'Books',
          desc: 'Check out the professional book I have read and some of my notes on them.',
          link: '/books',
        },
        {
            icon: <FaFlask size="4em" className="m-auto mt-4" color="blue" />,
            title: 'The Lab',
            desc: 'View my DIY coding projects and experiments to investigate new languages.',
            link: '/lab',
        },
        {
          icon: <FaRegAddressCard size="4em" className="m-auto mt-4" color="orange"  />,
          title: 'About',
          desc: 'Find out more about me.',
          link: '/about',
        },
        {
          icon: <FaEnvelope size="4em" className="m-auto mt-4" color="green" />,
          title: 'Contact',
          desc: 'Get in contact with me.',
          link: 'mailto:hello@alistairwilson.co.uk',
        },
      ]
  
    return (
        <div className='text-center my-4'>
            <h2>What can I do here?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 lg:grid-cols-4 max-w-[80%] m-auto rounded-lg">
                
                {WhatToDo.map(toDo => (
                    <Card className="pb-4 m-4" key={toDo.title} >
                    <Link href={toDo.link}>
                    {toDo.icon}
                    <CardBody>
                        <h4 className="font-bold text-large text-center">{toDo.title}</h4>
                        <p className="text-center">{toDo.desc}</p>
                    </CardBody>
                    </Link>
                    </Card>
                ))}

            </div>
        </div>
    )
  }
  