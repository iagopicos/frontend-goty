import { Card } from "react-bootstrap";

export default function GameCard(props){
    const {developer, name, year, url} = props;
    return(
	<Card>
	    <Card.Img  variant="top" src={url} alt={name}/>
	    <Card.Title> {name} </Card.Title>
	    <Card.Text> 
	        {developer +", " + year}
	    </Card.Text>
        </Card>
    )
}
