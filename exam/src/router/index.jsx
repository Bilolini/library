import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Books from '../components/Books';
import Users from '../components/Users';
import Main from '../components/Main';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='books' element={<Books />} />
            <Route path='users' element={<Users />}/>
            <Route path='main' element={<Main />} />
        </Route>
    )
)

export default router;