export default function ReportTable(props){
    return(
        <>
        {props.store.length ?
            <h1>5</h1>
            :
            <p className="flex items-center justify-center h-12 text-xl "	>
                No Cookie Stand Available
            </p>


        }
        </>
    )
}