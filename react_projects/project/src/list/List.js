import React, { createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cx from 'classnames';
import HandelList from "./ListItem";
import  "./List.css";


class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listContainer : [],
            listElemnt : {
                text:"",
                id:'',
                copleted : false
            }
        }

        this.handelAddListElemnt = this.handelAddListElemnt.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handelItemDone =this.handelItemDone.bind(this)
        this.handelDeleteListElement =this.handelDeleteListElement.bind(this)

    }


    handleChange2(e) {
        this.setState({
            listElemnt: {
                text: e.target.value,
                id: uuidv4(),
                copleted: false
            }
        })
    }

   
    handelAddListElemnt(e){
        if( this.state.listElemnt.text !== ""){
            this.setState( state =>{
                const list = [...state.listContainer, state.listElemnt];
                return{
                  listContainer: list,
                  listElemnt:{
                      text :"",
                      id : '',
                      completed: false
                  }
                };
            })
        }
     
    };

    handelItemDone(id,done){
        this.setState (()=>({
            listContainer: this.state.listContainer.map(item => (item.id===id)?{...item, completed: done} : item)
        }))
    }


    handelDeleteListElement(id){
        console.log(id);
        const filterlistElemnt = this.state.listContainer.filter(item => item.id !==id);
        this.setState({
            listContainer : filterlistElemnt
        })
    }
    
  
    
    render(){
     
        return(
            <div>
                <input className = "Add-to-list_input"
                    type="text"
                    onChange={this.handleChange2}
                    value={this.state.listElemnt.text}
                    placeholder={'what do you need to do?'}
                />
                <button className = "Add-to-list_button"  onClick={ this.handelAddListElemnt }>Add to list</button>
                <div>
                <HandelList className="List-item" item={this.state.listContainer} handelDeleteListElement={this.handelDeleteListElement} handelItemDone ={this.handelItemDone} />
                </div>
            </div>
        )
    }
}





export default List;