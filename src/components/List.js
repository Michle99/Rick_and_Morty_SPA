import { Character } from "./Character";
import { useState, useEffect } from "react";


export const List = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetching data
    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await fetch(
                'https://rickandmortyapi.com/api/character');

            const { results } = await data.json();

            setCharacters(results);
            setLoading(false);
        }

        fetchCharacters();
        
    }, [characters.length]);


    return (
        <div>
            <h2>Characters</h2>
            <div className='row'>
                {loading ? (
                    <div>loading....</div>
                ): (
                    characters.map((character) => (
                        <Character 
                          key={character.id}
                          name={character.name}
                          origin={character.origin}
                          image={character.image}
                        />
                    ))
                )}
            </div>
        </div>
    );
}