import React from 'react';
import Card from './Card';


/* Type 1 - One way of coding it
const CardList= ({robots})=> {

    const cardComponent = robots.map((user,i) => {
        return (<Card 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>);
    })

    return (
        
        <div>
            {cardComponent// we are using {} to inform the language to percieve it as JS.
            }
        </div>
    );
}

export default CardList;
*/

//Second way
const CardList= ({robots})=> {

    return (
        
        <div>
            {
                robots.map((user,i) => {// first param - object; second param  index
                return (
                    <Card 
                    key={i}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                    ); 
                }
            )}
        </div>
    );
}

export default CardList;