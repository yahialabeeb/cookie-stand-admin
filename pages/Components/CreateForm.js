export default function CreateForm(props){
    return(
        <form onSubmit={props.storeHandler}>
                <div className="flex my-4 ">
                    <div className="w-3/4 px-4 py-2 " >
                        <label className="flex ml-40" >ADD LOCATION</label>
                        <input name="location" className="flex-auto w-3/4 ml-10" />
                    </div>
                        <button className="flex-col w-1/4 py-5 pl-12 mx-4 text-3xl bg-green-500">Create</button>
                </div>
                <div className="flex my-4 ">
                    <div className="flex-col w-1/4 px-5 py-2 mx-10">
                        <label>Min Customers per hour</label>
                        <input type='number' name="min" className="" />
                    </div>


                    <div className="flex-col w-1/4 px-5 py-2 mx-10">
                        <label>Max Customers per hour</label>
                        <input type='number' name="max" className="" />
                    </div>


                    <div className="flex-col w-1/4 px-5 py-2 mx-10">
                        <label>Average Cookies per Sale</label>
                        <input type='number' name="avg" className="center" />
                    </div>
                </div>
            </form>
        
    )

}