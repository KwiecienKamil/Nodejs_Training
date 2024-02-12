import axios from "axios"
import { useEffect } from "react"


const App = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/squad").then((res) => {
      console.log(res);
    })
    })
  return (
    <div>
      
    </div>
  )
}

export default App
