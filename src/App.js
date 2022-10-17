import { useState } from 'react';
import './App.css';
import CardList from './components/CardLists';

function App() {

  const [list, setList] = useState([{

    id: 1

  }, {

    id: 2

  }, {

    id:3

  }])

  return (

    <div className=" m-full w-full md:w-full flex flex-col justify-between items-center">

      <CardList list={list}/>

    </div>
  );
}

export default App;
