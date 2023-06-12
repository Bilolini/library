import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../user/userSlice'
import { useState } from 'react';
import UserItem from './UserItem'

function Users() {
    const [counterForId, setCounterForId] = useState(2);
    const users = useSelector(state => state.user.value);
    const books = useSelector(state => state.book.value);
    const leftBooks = [];
    const readBooks = users.map(elem => elem.reading);
    books.forEach(book => {
        if(!readBooks.includes(book.name)){
            leftBooks.push(book)
        }
    })
    console.log(leftBooks)
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.preventDefault();
        let target = event.target;
        let username = target.username.value;
        let level = target.level.value;
        let field = target.field.value;
        let hobby = target.hobby.value;
        let reading = target.reading.value;
        console.log(reading)
        if (username && level && field && reading) {
            setCounterForId(prev => prev + 1)
            dispatch(addUser({ name: username, level: level,  id: counterForId, field: field , hobby: hobby, reading: reading}))
            target.username.value = ''
            target.level.value = ''
            target.field.value = ''
            target.hobby.value = ''
            target.reading.value = ''
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
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="reading">Reading</label>
                        <select name="reading" id="reading" className="basis-3/5 border-2 p-1 rounded-md outline-violet-300 border-teal-500">
                            {/* I should check wheher the previous users took the bookand whether to take the book myself */}
                            {
                                leftBooks.map(elem => {
                                    return (
                                        <option value={elem.name} key={elem.id}>{elem.name}</option>
                                    )
                                })
                            }
                            <option value="Not reading now">Not reading now</option>
                        </select>
                    </div>
                    <button
                        type='submit'
                        className="border-2 w-full p-2 rounded-lg text-lg font-mono font-bold bg-cyan-200 border-cyan-500">Add a user</button>
                </form>
            </div>
            <div className="p-2 h-max rounded-xl w-3/5 grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-5 max-sm:w-full">
                {
                    users ?
                        users.map(elem => {
                            return (
                                <UserItem elem={elem} key={elem.id} />
                            )
                        }) : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
}

export default Users;