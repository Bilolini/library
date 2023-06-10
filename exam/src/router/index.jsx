import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Books from '../components/Books';
import Users from '../components/Users';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='books' element={<Books />} />
            <Route path='users' element={<Users />}/>
        </Route>
    )
)

export default router;