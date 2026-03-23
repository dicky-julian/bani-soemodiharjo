import Hero from './elements/hero'
import Content from './elements/content'
import './App.css'
import Location from './elements/location'

function App() {
  return (
    <div className='container' style={{ backgroundColor: 'white' }}>
      <Hero />
      <Content />
      <Location />
    </div>
  )
}

export default App
