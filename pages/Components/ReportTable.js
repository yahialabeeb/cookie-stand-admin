import data from "../../data.js"
import useResource from "../../hooks/useResource.js";
import React, { useState, useEffect } from "react";

export default function ReportTable(props){
    let x=1
    const { resources, deleteResource } = useResource();
    console.log(resources);
    return(
        <>
        {resources ?
            <table className="w-1/2 mx-auto my-4">
                <thead className='bg-green-500' >
                    {data.map(it => {
                        return(
                            <th>{it}</th>  
                        )
                        
                        })
                    }    
                </thead>
                <tbody>
                    {resources.map((item,idx)=>{
                        return (
                            <tr className={`bg-green-${idx % 2 ? 400 : 300}`} key={`${idx}`}>
                            {item.hourly_sales.map((i,idx)=>{
                               return(
                                 
                                    (!idx) ? 

                                    <th key={idx} className="flex">
                                        <td className="flex pr-2">{i} <button onClick={() => deleteResource(item.id)} className="flex bg-red-700">🗑</button></td>
                                    
                                    </th>
                                    : <th key={idx}>{i}</th>
                                    
                                
                               )
                                
                            })}
                            </tr>  
                        )
                        
                    })
                    }

                </tbody>
                <tfoot className='bg-green-500' >
                    {props.totalBycol.map(item =>{
                        return (
                            <th>{item}</th>
                        )
                    })
                        
                    }
                </tfoot>
            </table>
            :
            <p className="flex items-center justify-center h-12 text-xl "	>
            No Cookie Stand Available
            </p>


        }
        </>
    )
}