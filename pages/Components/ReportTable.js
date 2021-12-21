import data from ""../data.js"
export default function ReportTable(props){
    return(
        <>
        {props.store.length ?
            <p className="flex items-center justify-center h-12 text-xl "	>
                No Cookie Stand Available
            </p>
            :
            <table>
                <thead>
                    {for(let i=0 ; i < data.length;i++){
                        i
                    }
                        
                    }
                </thead>
                <tbody>
                    
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>

        }
        </>
    )
}