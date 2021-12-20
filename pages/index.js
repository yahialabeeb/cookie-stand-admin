import Head from 'next/head'
import { useState } from 'react';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        
      </Head>
      <header className="py-6 items-center text-3xl bg-green-400">
        <p>Cookies Stand Admin</p>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        
      </main>

      
      <footer className=" items-center p-4 text-3xl bg-green-400" >

        <p>&copy; 2021 </p>

      </footer>  
    </div>
  )
}
