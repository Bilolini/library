import { useDispatch, useSelector } from 'react-redux'
import { add } from '../book/bookSlice'
import { useState } from 'react';

function Books() {
    const data = useSelector(state => state.book.value);
    const [counterForId, setCounterForId] = useState(0);
    const dispatch = useDispatch();
    const addBook = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const status = event.target.status.checked;
        if(name && date && status){
            setCounterForId(prev => prev+1)
            dispatch(add({name: name, date: date, status: status, id: counterForId}))
        }
    }
    return (
        <div>
            <div className="w-2/5 ">
                <form action="" onSubmit={addBook} className='grid gap-3 text-lg'>
                    <div className="flex justify-between ">
                        <label htmlFor="name">Name</label>
                        <input required type="text" id="name" className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="date">Date</label>
                        <input  required type="date" id="date" className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="status">Status</label>
                        <input required type="checkbox" id="status" className="border-2 outline-orange-300 border-emerald-200" />
                    </div>
                    <button type='submit' className="border-2 w-full bg-emerald-200 border-indigo-500">Add a book</button>
                </form>
            </div>
            <div className="w-3/5">
                {
                    data ?
                    data.map(elem => {
                        return(
                            <div key={elem.id}>
                                
                            </div>
                        )
                    }) : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
}

export default Books;

// name, date, id, status