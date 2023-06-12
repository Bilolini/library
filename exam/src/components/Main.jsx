function Main() {

    const worldLibraries = [
        {
            name: 'Harvard library',
            url: 'https://kienviet.net/wp-content/uploads/2020/12/2-19.jpg'
        },
        {
            name: 'Yale library',
            url: 'https://library.yale.edu/sites/default/files/beinecke720.jpeg'
        },
        {
            name: 'John Hopkins library',
            url: 'https://www.timeshighereducation.com/student/sites/default/files/inline-images/Peabody%20Petroff.jpg'
        }
    ];
    const mappedWorldLibraries = worldLibraries.map((elem, index) => {
        return (
            <div key={index} className="text-center border-2 border-emerald-300 p-3">
                <h3 className="font-bold text-lg" >{elem.name}</h3>
                <img src={elem.url} alt="" className="w-full h-96" />
            </div>
        )
    })
    console.log(worldLibraries)
    return (
        <div>
            <div className="p-5 grid xl:grid-cols-3 md:grid-cols-2 gap-5 max-sm:w-full">{mappedWorldLibraries}</div>
            <blockquote className="m-4">
              <q className="font-bold text-xl bg-slate-400">A reader lives a thousand lives before he dies . . . The man who never reads lives only one.</q>  
            </blockquote>
        </div>
    );
}

export default Main;