import React, { createElement } from 'react';


class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listElemnt : "what do you need to do?" ,
            listContainer : []
        }

        this.handelAddListElemnt = this.handelAddListElemnt.bind(this)
        this.handelList = this.handelList.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handelDeleteListElement =this.handelDeleteListElement.bind(this)
    }


    handleChange2(e) {
        this.setState({listElemnt: e.target.value})
    }

   
    handelAddListElemnt(){
      this.setState( state =>{
          const list = [...state.listContainer, state.listElemnt];

          return{
            listContainer: list,
            listElemnt: "what do you need to do?",
          };
      })
    };
    handelDeleteListElement(key){
        let arr = this.state.listContainer;
        arr.splice(key,1);
        this.setState({listContainer:arr});

    }
    
    handelList(){

        return this.state.listContainer.map(function(item){
            return <li key={item}>{item}</li> 
       })
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    onChange={this.handleChange2}
                    value={this.state.listElemnt}
                />
                <button onClick={ this.handelAddListElemnt }>Add to list</button>
                <ul>
                    {this.handelList()}
                </ul>
                <button onClick = {this.handelDeleteListElement}>X</button>
            </div>
        )
    }
}





export default List;