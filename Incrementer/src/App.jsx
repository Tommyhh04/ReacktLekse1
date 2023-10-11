import './App.css'

function App() {
 

  return (
    <div className="grid--card">
    <div className="incrementer--card">
       {/*Main content*/}
      <div className="incrementer--title">
        <h3>Incrementer or subtracter</h3>
       </div>
      {/*Displays the buttons and number that will be changed on button press*/}
        <div className="incrementer--buttons">
        <button className="minus">⬇️</button>
        <h2>0</h2>
        <button className="plus">⬆️</button>
        </div>
    </div>
</div>
  )
}

export default App
