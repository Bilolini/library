import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../user/userSlice'
import { useState } from 'react';
import UserItem from './UserItem'

function Users() {
    const [counterForId, setCounterForId] = useState(2);
    const data = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.preventDefault();
        let target = event.target;
        let username = target.username.value;
        let level = target.level.value;
        let field = target.field.value;
        let hobby = target.hobby.value;
        if (username && level && field) {
            setCounterForId(prev => prev + 1)
            dispatch(addUser({ name: username, level: level,  id: counterForId, field: field , hobby: hobby}))
            target.username.value = ''
            target.level.value = ''
            target.field.value = ''
            target.hobby.value = ''
        }
    }
    return (
        <div className='flex gap-5 max-sm:flex-col px-4'>
             <div className="w-2/5 mr-10 max-sm:w-full h-max rounded-xl">
                <form action="" onSubmit={handleClick} className='grid gap-3 text-lg font-mono'>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="username">Name</label>
                        <input
                            required
                            name='username'
                            type="text"
                            placeholder='Linus Torwalds'
                            id="username"
                            className="basis-3/5 border-2 p-1 rounded-md outline-violet-300 border-teal-500" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="level">Level</label>
                        <input
                            type="text"
                            id="level"
                            placeholder='Engineering manager'
                            className="basis-3/5 border-2 p-1 rounded-md outline-violet-300 border-teal-500" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="field">Field</label>
                        <input
                            type="text"
                            id="field"
                            placeholder='Backend'
                            className="basis-3/5 border-2 p-1 rounded-md outline-violet-300 border-teal-500" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="hobby">Hobby</label>
                        <input
                            type="text"
                            id="hobby"
                            placeholder='Videogames'
                            className="basis-3/5 border-2 p-1 rounded-md outline-violet-300 border-teal-500" />
                    </div>
                    <button
                        type='submit'
                        className="border-2 w-full p-2 rounded-lg text-lg font-mono font-bold bg-cyan-200 border-cyan-500">Add a user</button>
                </form>
            </div>
        </div>
    );
}

export default Users;