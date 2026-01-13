import './App.css'
// import { WeatherApp } from './components/WeatherApp';
import { Uncontrolled, Controlled, LifecycleDemo } from './components/Controllers';

function App() {


  return (
    <>
    {/* <WeatherApp /> */}
    <Uncontrolled />
    <Controlled />
    <LifecycleDemo />
    </>
  )
}

export default App