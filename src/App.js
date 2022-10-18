import { useState } from 'react';
import './App.css';
import CardList from './components/CardLists';

function App() {

  const [list, setList] = useState([{

    id: 1,
    opt: "Новинка",
    price: 'full'

  }, {

    id: 2,
    opt: "Круглый год",
    price: 'full'

  }, {

    id:3,
    opt: "",
    price: ''

  }])

  return (

    <div className=" m-full w-full md:w-full flex flex-col justify-between items-center">

      <CardList list={list}/>

    </div>
  );
}

export default App;
