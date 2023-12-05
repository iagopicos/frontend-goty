import { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import GameCard from "./CardGames";


export default function Nominees(props) {
    const {category, gameList} = props

    return(
	<Container>
	    {category}
	    <CardGroup>
		{gameList.map(game =>
			<GameCard key={game.name + "." + category} 
				    name={game.name} 
				    developer={game.developer} 
				    year={game.year}
				    url={game.image}/>
		)}	
	    </CardGroup>
	</Container>
    )
}
