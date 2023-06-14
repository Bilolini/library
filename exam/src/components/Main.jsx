import { useState } from "react";

function Main() {
    const worldLibraries = [
        {
            id: 1,
            order: 1,
            name: 'Harvard library',
            url: 'harvard.jpg'
        },
        {
            id: 2,
            order: 2,
            name: 'Yale library',
            url: 'yale.jpg'
        },
        {
            id: 3,
            order: 3,
            name: 'John Hopkins library',
            url: 'john-hopkins.jpg'
        }
    ];
    const [cardList, setCardList] = useState(worldLibraries);
    const [currentCard, setCurrentCard] = useState(null);
    function dragStartHandlaer(e, elem){
        // console.log('drag', elem)
        setCurrentCard(elem)
    }
    function dragEndHandler(e){
        e.target.style.background = 'white'
    }
    function dragOverHandler(e){
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }
    function dropHandler(e, elem){
        e.preventDefault();
        // console.log('drop', elem)

        setCardList(cardList.map(c => {
            if(c.id == elem.id){
                return {...c, order: currentCard.order}
            }
            if(c.id == currentCard.id){
                return {...c, order: elem.order}
            }

            return c;
        }))
        e.target.style.background = 'white'
    }

    const sortCards = (a, b) => {
        if(a.order > b.order){
            return 1;
        } else {
            return -1;
        }
    }

    const mappedWorldLibraries = cardList.sort(sortCards).map((elem, index) => {
        return (
            <div
                onDragStart={(e) => dragStartHandlaer(e, elem)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, elem)}
                key={index}
                draggable={true}
                className="text-center border-2 border-emerald-300 cursor-grab"
            >
                <h3
                    className="font-bold text-lg"
                >{elem.name}</h3>
                <img
                    src={elem.url}
                    alt={elem.name}
                    className="w-full h-96" />
            </div>
        )
    })
    return (
        <div>
            <div
                className="p-5 grid xl:grid-cols-3 md:grid-cols-1 gap-5 max-sm:w-full"
            >{mappedWorldLibraries}</div>
            <blockquote className="m-4">
                <q className="font-bold text-xl bg-slate-400">A reader lives a thousand lives before he dies . . . The man who never reads lives only one.</q>
            </blockquote>
        </div>
    );
}

export default Main;