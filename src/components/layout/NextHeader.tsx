"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import Image from 'next/image'

export default function NextHeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const links = [
        { 
            name: 'Home', 
            href: '/',
            is_active: false
        },
        { 
            name: 'Books', 
            href: '/books',
            is_active: false
        },
        { 
            name: 'Lab', 
            href: '/lab',
            is_active: false
        },
        { 
            name: 'About', 
            href: '/about',
            is_active: false
        },
    ]

  return (
    <Navbar shouldHideOnScroll className="bg-[#465B65] p-2">
        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
        />
      <NavbarBrand>
        <Link href="/">
            <Image src="/img/layout/logo.png" alt="Alistair Wilson" width={64} height={64}/>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {links.map((item, index ) => (
        <NavbarItem key={index}>
          <Link className="text-white" href={item.href}>
            {item.name}
          </Link>
        </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-white text-[#465B65]" href="mailto:hello@alistairwilson.co.uk" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-4">
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="pt-2">
            <Link
              className="w-full text-[#465B65]"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
