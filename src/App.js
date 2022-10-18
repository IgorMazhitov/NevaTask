import { useState } from 'react';
import './App.css';
import CardList from './components/CardLists';

function App() {

  const [list, setList] = useState([{

    id: 1,
    opt: "Новинка"

  }, {

    id: 2,
    opt: "Круглый год"

  }, {

    id:3,
    opt: ""

  }])

  return (

    <div className=" m-full w-full md:w-full flex flex-col justify-between items-center">

      <CardList list={list}/>

    </div>
  );
}

export default App;
