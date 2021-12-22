import data from "../../data.js"
export default function ReportTable(props){

    
    return(
        <>
        {props.generated.length ?
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
                    {props.generated.map((item,idx)=>{
                        return (
                            <tr className={`bg-green-${idx % 2 ? 400 : 300}`} key={`${idx}`}>
                            {item.map((i,idx)=>{
                               return(
                                <th key={idx}>{i}</th>   
                             
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