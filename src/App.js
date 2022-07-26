
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import CardList from './card-list/card-list.component';
import SearchBox from  './search-box/search-box.component'


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: '',
    };
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(()=>{
        return {monsters: users}

      }, 
      ()=>{
        console.log(this.state)
      }))

    }

    onSearchChange = (event)=>{
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(()=> {
         return {searchField};
       })}

  render(){
    const {monsters,searchField}=  this.state;
    const  {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{ 
      return monster.name.toLocaleLowerCase().includes(searchField);
     });
  return (
    <div className="App">
    <h1 className='app-title'>Monsters Render</h1>
    <SearchBox onSearchChangeHandler={onSearchChange} placeholder='Search Monster' className='search-box'/>
      
      <CardList monsters ={filteredMonsters} />
    </div>
    
  );
  }
}
export default App;
  
