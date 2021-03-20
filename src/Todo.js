import React, { Component } from 'react';

class Todo extends Component{
//     constructor(props){
//         super(props);
//         this.state ={
           
//             todo:"",
//             list:[] ,
//         }
//     }

//      // Set a user input value 
// updateInput(value){ 
// 	this.setState({ 
// 	userInput: value, 
// 	}); 
// } 
    
//     add=(e)=>{
        
//         this.setState((prev,props)=>({
          
//             todo : this.state.userInput 
            
//         })
//         )
//     }
    


//     render(){
//         console.log("Rendering");
//         return(
//             <React.Fragment>
            
//             <input type="text" name="name" value = {this.state.userInput} 
//             onChange = {item => this.updateInput(item.target.value)} ></input>
//             <button onClick={this.add}>Add</button>
//             <h3>{this.state.todo}</h3>
//             <span><button onClick = {()=>this.deleteItem()} 
// 			> 
//                Delete</button></span>
//             </React.Fragment>

//         );
//     }

constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
    
}
export default Todo;