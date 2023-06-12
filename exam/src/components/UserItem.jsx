import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../user/userSlice';

function UserItem({elem}) {
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);
    const [update, setUpdate] = useState({ name: elem.name, field: elem.field, level: elem.level, hobby: elem.hobby, reading: elem.reading});
    function handleClick(id) {
        setChange(prev => !prev);
        dispatch(updateUser({ ...update, id: id }));
    }
    return ( 
        <div className='h-max text-center p-4 border-2 border-emerald-400 text-sm font-mono flex flex-col gap-2'>
            <h3 className='font-bold truncate'>{update.name}</h3>
            <h3 className='font-bold truncate'>{update.level}</h3>
            <p>{update.field}</p>
            <p>{update.hobby}</p>
            <p>{update.reading}</p>
            <button className='border-2 border-orange-300 bg-yellow-200 text p-2' onClick={() => setChange(prev => !prev)}>Update</button>
            <button
                type='delete'
                className='p-2 border-2 border-pink-300 bg-red-200 text'
                onClick={() => dispatch(deleteUser(elem.id))}>Delete</button>
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
                            value={update.level}
                            type="text"
                            className="w-full border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            onChange={event => setUpdate({ ...update, level: event.target.value })} />
                        <input
                            type="text"
                            className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            value={update.field}
                            onChange={event => setUpdate({ ...update, field: event.target.value })}
                        />
                        <input
                            type="text"
                            className="border-2 p-1 rounded-md outline-orange-300 border-emerald-200"
                            value={update.hobby}
                            onChange={event => setUpdate({ ...update, hobby: event.target.value })}
                        />
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

export default UserItem;