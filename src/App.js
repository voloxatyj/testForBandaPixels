import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import Table from './components/Table';
import axios from 'axios'
import { useUserData } from './context/DataContext'

function App() {

  const [state, dispatch] = useUserData()
  let result = []
  
  useEffect(() => {
    axios.get('https://api.github.com/search/repositories?q=KEYWORD')
      .then(res=> {
        result = res.data.items.filter(item=>localStorage.getItem(item.id)!==null || item.full_name.startsWith(state.input))
        dispatch({type: "GET_DATA", payload: result})})
      .catch(err=>console.log(err));
    }, [state.input])

  return (
    <div className="conteiner-fluid">
      <Navbar /> 
      <Table />
    </div>
  );
}

export default App;
