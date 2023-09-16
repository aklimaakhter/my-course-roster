import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-4">

            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}></Card>)
            }
        </div>
    );
};

export default Home;