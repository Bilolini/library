import { NavLink, Outlet } from 'react-router-dom'
const linksArray = [
    {
        to: 'books',
        name: 'Books'
    },
    {
        to: 'users',
        name: 'Users'
    },
    {
        to: 'main',
        name: 'World libraries'
    }
]

function App() {
    const linksMappedArray = linksArray.map((elem, index) => {
        return (
            <NavLink className='text-2xl  xl:text-xl lg:text-xl md:text-xl max-sm:text-2xl hover:underline focus:bg-slate-900 focus:text-slate-100 p-2 focus:rounded-md font-bold' key={index} to={elem.to}>{elem.name}</NavLink>
        )
    })
    return (
        <div className='container px-3 m-auto'>
            <nav className='flex flex-row justify-around p-3 max-sm:flex-col max-sm:text-center'>
                {
                    linksMappedArray
                }
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default App;
// 1. tailwind responsive design didn`t work until adding max- attribute to the md,sm,lg breakpoints