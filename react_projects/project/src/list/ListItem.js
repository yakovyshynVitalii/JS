import React, { createElement } from 'react';
import cx from 'classnames';
import  "./List.css";



function HandelList(props){
    return props.item.map(function(item){
        let listItemCompleted = cx({
            'List-item_text': true,
            'List-item-completed': item.completed
        })
        return(
            <div className = "List-item"  id={item.id}>
                <p className={listItemCompleted}>{item.text}</p>
                <div className = "button_container">
                    <button className="List-item-delete_button" onClick = {()=> props.handelDeleteListElement(item.id)}>X</button>
                    <button className="List-item-completed_button" onClick = {()=> props.handelItemDone(item.id, !item.completed)}>Done</button>
                </div>
               
            </div>
        )  
   })
}


export default HandelList;