import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import WhatToDo from '@/components/sections/WhatToDo';
import Tech from '@/components/sections/Tech';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <WhatToDo />

      <Tech />
      
    </main>
  )
}
