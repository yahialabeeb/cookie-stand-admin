import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import CreateForm from './CreateForm'
import ReportTable from "./ReportTable"

import { useState } from 'react';


export default function CookieStandAdmin(){
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
        <>
            <Head />
            <Header/>
            <div className="px-4 pb-5 mx-40 mb-20 bg-green-300 rounded shadow-md pt-15" >
                <Main/>
                <CreateForm storeHandler={storeHandler}/>  
            </div>
            <ReportTable store={store}/>
            <Footer/>

        </>
    )
}