import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [store, set_data] = useState([]);
  function storeHandler(event) {
    event.preventDefault();

    const saved = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCookies: event.target.avg.value,

    }
    set_data(store => [...store, saved])

  }
  return (
    <div className="min-h-screen py-2">

      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="py-6 items-center text-3xl bg-green-400">
        <p>Cookies Stand Admin</p>
      </header>

      <main className="rounded shadow-md pt-15 pb-5">
        <div className="bg-green-300 shadow-md rounded mx-40 px-4 pt-15 pb-2 mb-20">
          <h1 className='my-6 pt-5 text-2xl text-center'>Create Cookie Stand</h1>
          <form onSubmit={storeHandler}>

            <div className="flex" >
              <label className="" >Location</label>
              <input name="location" className="flex-auto" />
            </div>


            <div className="flex my-4">
              <div className="flex-col w-1/4 my-1">
                <label>Min Customers per hour</label>
                <input type='number' name="min" className="" />
              </div>


              <div className="flex-col w-1/4 my-1">
                <label>Max Customers per hour</label>
                <input type='number' name="max" className="" />
              </div>


              <div className="flex-col w-1/4 my-1">
                <label>Average Cookies per Sale</label>
                <input type='number' name="avg" className="" />
              </div>

              <button className="w-1/4 bg-green-500 ">Create</button>
            </div>
          </form>
        </div>
        <p className='text-center text-1xl my-5'>
          Report Table Coming Soon...
        </p>

        {store.map(item =>
            <p className='my-3 text-center text-gray-600 text-1xl'>
              {JSON.stringify(item)}
            </p>
          )
        }           
      </main>
      
      <footer className="items-center p-4 text-1xl bg-green-400" >
        <p>&copy; 2021 </p>
      </footer>  
    </div>
  )
}
