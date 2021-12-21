export default function CreateForm(props){
    return(
        <form onSubmit={props.storeHandler}>

                <div className="flex" >
                    <label className="" >Location</label>
                    <input name="location" className="flex-auto" />
                </div>


                <div className="flex my-4 ">
                    <div className="flex-col w-1/4 px-4 py-2 mx-4 bg-green-200">
                        <label>Min Customers per hour</label>
                        <input type='number' name="min" className="" />
                    </div>


                    <div className="flex-col w-1/4 px-4 py-2 mx-3 bg-green-200">
                        <label>Max Customers per hour</label>
                        <input type='number' name="max" className="" />
                    </div>


                    <div className="flex-col w-1/4 px-4 py-2 mx-3 bg-green-100">
                        <label>Average Cookies per Sale</label>
                        <input type='number' name="avg" className="center" />
                    </div>

                    <button className="w-1/4 bg-green-500 ">Create</button>
                </div>
            </form>
        
    )

}