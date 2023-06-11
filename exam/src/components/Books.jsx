// import all necessities
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../book/bookSlice'
import { useState } from 'react';
import BookItem from './BookItem';

function Books() {
    // to put an id to the book elements we create
    const [counterForId, setCounterForId] = useState(2);

    // getting data from redux
    const data = useSelector(state => state.book.value);
    const dispatch = useDispatch();

    // this is to send the data to add to the book.value in redux
    // there can be a better way to take data from input like a library, or ref hook, I though it would be easier to use Vanilla Js
    const addBook = (event) => {
        event.preventDefault();
        let target = event.target;
        let name = target.name.value;
        let date = target.date.value;
        let status = target.status.checked;
        let photo = target.photo.value || 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ArtOfComputerProgramming.svg/1200px-ArtOfComputerProgramming.svg.png';
        if (name && date) {
            setCounterForId(prev => prev + 1)
            dispatch(add({ name: name, date: date, status: status, id: counterForId, photo: photo }))
            target.name.value = ''
            target.date.value = ''
            target.status.checked = ''
            target.photo.value = ''
        }
    }
    return (
        <div className='flex gap-5 max-sm:flex-col px-4'>
            <div className="w-2/5 mr-10 max-sm:w-full">
                <form action="" onSubmit={addBook} className='grid gap-3 text-lg font-mono'>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="name">Name</label>
                        <input
                            required
                            name='name'
                            type="text"
                            placeholder='Algorithms'
                            id="name"
                            className="basis-3/5 border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="author">(Co)-Author</label>
                        <input
                            type="text"
                            id="author"
                            placeholder='Donald Knuth'
                            className="basis-3/5 border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="photo">Photo url</label>
                        <input
                            type="text"
                            id="photo"
                            placeholder='https://google.com/photos'
                            className="basis-3/5 border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="lg:flex-row md:flex-col sm:flex-col flex justify-between">
                        <label htmlFor="date">Date</label>
                        <input
                            required
                            lang="en"
                            type="date"
                            id="date"
                            className="basis-3/5 border-2 p-1 rounded-md outline-orange-300 border-emerald-200" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="status">Status</label>
                        <input
                            type="checkbox"
                            id="status"
                            className="basis-3/5 border-2 outline-orange-300 border-emerald-200" />
                    </div>
                    <button
                        type='submit'
                        className="border-2 w-full p-2 rounded-lg text-lg font-mono font-bold bg-indigo-200 border-indigo-500">Add a book</button>
                </form>
            </div>
            <div className="w-3/5 grid xl:grid-cols-3 md:grid-cols-2 p-2 lg:gap-10 gap-5 max-sm:w-full">
                {
                    data ?
                        data.map(elem => {
                            return (
                                <BookItem elem={elem} key={elem.id} />
                            )
                        }) : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
}

export default Books;
