import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../book/bookSlice';


function BookItem({ elem }) {
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);
    const [update, setUpdate] = useState({ name: elem.name, date: elem.date, author: elem.author, photo: elem.photo, status: elem.status });
    function handleClick(id) {
        setChange(prev => !prev);
        dispatch(updateBook({ ...update, id: id }));
    }

    return (
        <div className='h-max text-center p-4 border-2 border-emerald-400 text-sm font-mono flex flex-col gap-2'>
            <img src={update.photo} className='max-sm:h-80 h-64 w-full' alt="" />
            <h3 className='font-bold truncate'>{update.name}</h3>
            <h3 className='font-bold truncate'>{update.author}</h3>
            <p>{update.date}</p>
            <p>{update.status ? 'available' : 'gven out'}</p>
            <button className='border-2 border-orange-300 bg-yellow-200 text p-2' onClick={() => setChange(prev => !prev)} >Update</button>
            <button
                type='delete'
                className='p-2 border-2 border-pink-300 bg-red-200 text'
                onClick={() => dispatch(deleteBook(elem.id))}>Delete</button>
            {
                change
                    ?
                    <form className='flex flex-col gap-3'>
                        <input
                            value={update.name}
                            type="text"
                            className="w-full border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            onChange={event => setUpdate({ ...update, name: event.target.value })} />
                         <input
                            value={update.author}
                            type="text"
                            className="w-full border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            onChange={event => setUpdate({ ...update, author: event.target.value })} />
                        <input
                            type="date"
                            className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            value={update.date}
                            onChange={event => setUpdate({ ...update, date: event.target.value })}
                        />
                        <input
                            type="text"
                            value={update.photo}
                            className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            onChange={event => setUpdate({ ...update, photo: event.target.value })}
                        />
                        <input
                            type="checkbox"
                            id="status"
                            className="border-2 outline-orange-300 border-emerald-200"
                            onChange={event => setUpdate({ ...update, status: event.target.checked })}
                            checked={update.status} />
                        <button
                            type="button"
                            className='p-2 border-2 border-orange-300 bg-yellow-200 text'
                            onClick={() => handleClick(elem.id)}>Save</button>

                    </form>
                    : <></>
            }
        </div>
    );
}

export default BookItem;