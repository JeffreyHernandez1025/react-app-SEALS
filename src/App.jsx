import React, { useState } from 'react';

import './App.css';

function App() {
const [secret, setSecret] = useState("notSecret .85s infinite alternate")

  return (
    <div>
    <div>
      <h1> Top Three Creeds I Have Practiced </h1>
    </div><div>
        <h3 className='num'> Number 1: </h3>
        <div className='div'>
          <h4> I Shall Lead By Example </h4>
          <p style={{color: 'white', paddingLeft: 20, animation: secret}}> This creed is very important to me. It reminds me to always be my best self, in order to set the example. The way that I show this creed is by always doing what seems right, helping my friends, doing my work, and paying attention in class. I do this all to lead by example and hopefully inspire people.</p>
        </div>
      </div><div>
        <h3 className='num'> Number 2: </h3>
        <div className='div'>
          <h4> I Believe Nothing Is Hard Just A Lot Of Work </h4>
          <p style={{color: 'white', paddingLeft: 20, animation: secret}}> This creed is also very important to me. Ever since I first heard it, it stuck with me. This is because it really changed my mindset over what I could accomplish.I practice this creed by fixing my mindset into knowing that I can accomplish any task that I put myself up to.</p>
        </div>
      </div><div>
        <h3 className='num'> Number 2: </h3>
        <div className='div'>
          <h4> I Will Strive To Know Myself Better And Seek Self-Improvement </h4>
          <p style={{color: 'white', paddingLeft: 20, animation: secret}}> This creed is a reminder that I can always improve. I believe that this creed is one of the most important because if you don't strive for finding your weaknesses, you'l never grow. I have been practicing this creed by searching for activities that allow me to learn new skills, like this program.</p>
        </div>
      </div><li></li><li></li><li></li><li></li><li></li><li></li>
      <div id="secretDiv">
        <button id="secretOn" onClick={() => {
          setSecret('secret .85s infinite alternate')
        }}>
           secret on 
           </button>
        <button id="secretOff" onClick={() => {
          setSecret('notSecret .85s infinite alternate')
        }}> secret off </button>
        </div>
        </div>
  );
}

export default App;
