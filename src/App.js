import './App.css';
import React from "react"
import Axios from "axios"

function App() {

  const [enteredData, setEnteredData] = React.useState("")

  function collectIt(event)
  {
    setEnteredData(event.target.value)
  }

  function sendData()
  {
      Axios.get("https://api.unsplash.com/search/photos?client_id=z1PB4z5BuMgdw1T5dGTJzvqAQJVVCvu1esAGTJ6Xix0", {
        params: {query: enteredData}
      })
      .then(function(output)
      {
        var myArr = output.data.results
        myArr.map(function(i)
        {
          var imageUrl = i.urls.full
          var myImage = document.createElement("img")
          myImage.setAttribute("src", imageUrl)
          myImage.setAttribute("width", "200px")
          myImage.setAttribute("height", "200px")
          var myDiv = document.getElementById("div")
          myDiv.append(myImage)
        })
      })
      .catch(function(error)
      {
        console.log(error)
      })
  }

  function clearIt()
  {
    var myDiv = document.getElementById("div")
    myDiv.remove()
  }

  return (
   <div className='maindiv'>
    <p>Search Images</p>
     s:<input className='input' type="text" onChange={collectIt}/><br/><br/>
    <button className='btn' onClick={sendData}>Submit</button><br/><br/>
    <button className='btn' onClick={clearIt}>Clear</button>
    <div id='div'>
      {/* This div tag will hold all the images */}

    </div>
   </div>
  );
}

export default App;