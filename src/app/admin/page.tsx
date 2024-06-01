"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React,{useState} from "react";
import TpiclIST from "../../components/AdminComponents/TopicsList"
import TopicsList from "../../components/AdminComponents/TopicsList";

export default function Navbar({ fixed }: { fixed?: boolean }) {
 
  const {data} = useSession();
  const logoutHandler = () => {
    signOut({ callbackUrl: '/login' });
  };
  console.log( data)
  return (
    <>

      <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2"  onClick={logoutHandler}>Logout</span>
                </Link>
                <TopicsList />
    </>
  );
}
