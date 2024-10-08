import { useState } from "react";
import './ListGroup.css'

interface Props {
    items : string[];
    heading : string;
    onSelectItem : (item : string) => void;
}

function ListGroup({items,heading,onSelectItem} : Props){
    const [selectedIndex,setSelectedIndex] = useState(0);
    return(
        <>
            <h2>{heading}</h2>
            { items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                {items.map((item,index) => (
                    <li 
                        className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        key={item} 
                        onClick={ () => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        } }
                        >{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;