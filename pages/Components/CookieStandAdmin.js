import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import CreateForm from './CreateForm'
import ReportTable from "./ReportTable"

import { useState } from 'react';


export default function CookieStandAdmin(){
    const [store, set_data] = useState([]);
    const [generated, setgenerated] = useState([])
    const [totalBycol, setTotalBycol] = useState([])
    function storeHandler(event) {
        event.preventDefault();
        
        const saved = {
        location: event.target.location.value,
        minCustomers: event.target.min.value,
        maxCustomers: event.target.max.value,
        avgCookies: event.target.avg.value,
        total:0
        }
        set_data(store => [...store, saved])
        let hourly_sales=[saved.location]
        let total = ["Totals"]
        for (let i=1; i < 15;i++){
            let x = Math.random()*(Number(saved.maxCustomers)-Number(saved.minCustomers)+1) + Number(saved.minCustomers)
            x = Math.floor((x)*Number(saved.avgCookies))
            hourly_sales.push(x)
            saved.total = saved.total + x
            
        }
        // totalAll = totalAll + saved.total
        
        hourly_sales.push(saved.total)
        setgenerated(generated => [...generated, hourly_sales])
        console.log(generated);
        for (let k= 1;k<16;k++){
            let total1 = 0
           for (let j= 0;j<generated.length;j++){ 
           total1 = total1 + generated[j][k]
           }
           total1 = total1 + Number(hourly_sales[k]) 
           total.push(total1)
        }
        
        // total.push(totalAll)
        setTotalBycol(totalBycol=> total)
    }
    return (
        <>
            <Head />
            <Header/>
            <div className="px-4 pb-5 mx-40 mb-20 bg-green-200 rounded shadow-md pt-15" >
                <Main/>
                <CreateForm storeHandler={storeHandler}/>  
            </div>
            <ReportTable generated={generated} totalBycol={totalBycol}/>
            <Footer/>

        </>
    )
}