import { useEffect, useState } from "react";
import Nominees from "./Nominees";

const test_url = "https://c3426985-db1b-4f34-87ed-29e7349989fb.mock.pstmn.io/nominees"


export default function NomineesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
	fetch(test_url)
	.then((response) => response.json())
	.then((json) => {
	    setCategories((json))
	});

	}, []);

     return (
	<div>
	    {Object.keys(categories).map((category) => 
		<Nominees key={category} category={category} gameList={categories[category]}/>
	    )}
        </div>
     )

}
