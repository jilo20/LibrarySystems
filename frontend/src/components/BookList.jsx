import Button from "./Button"

export default function BookList(){
    return (
        <>
            <div className="w-full w-[80%] bg-red-100 flex justify-around mt-10 gap-20 px-30">
                <input type="text"  className="bg-green-400 flex-1 p-2"/>

                <div className="flex gap-10">
                    <select className="bg-yellow-200 px-4">
                        <option value="Action" >Action</option>
                        <option value="Education" >Education</option>
                        <option value="Horror" >Horror</option>
                        <option value="Others" >Others</option>
                    </select>
                    
                    <Button variant={'searchbutton'} 
                            content={'Search'}
                            stylee={'bg-gray-300 text-gray-900 h-10 text-md p-2 px-6'}></Button>
                </div>
            </div>

            <table className="bg-blue-300 m-10 w-full">
                <thead className="bg-yellow-300">
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Book Genre</th>
                </thead>
            </table>
        </>
    )
}