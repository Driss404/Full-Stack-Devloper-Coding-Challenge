
import React,{ useState } from 'react';
import './App.css';

function App() {
  const [returnedData,setReturnedData] = useState()
  const getData = async (url) => {
    const newData = await fetch(url, {      //tThe CALL to the back-end
      method: 'GET',                        //method to grab a respons from the back-end to the front-end
      headers: {                            //help us tell the respons how we are sending and accepting data
        'Content-Type': 'application/json',
        'Accept': 'application/json',       //  accepting data as JSON Formate
      }
    })
    .then(res =>  res.json());              //this is our respones from the back-end, as a json format
    console.log(newData);
    setReturnedData(newData.result);
  }

  // getData('/api01');
  
  return (
    <div className="App">
      <button onClick={()=>{getData('/api01')}}>hello</button>
      <button onClick={()=>{getData('/api02')}}>goodbye</button><br/>
      {returnedData}
    </div>
  );
}

export default App;
