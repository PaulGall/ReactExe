import { useState, useEffect } from "react"


function Counter() {

    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log(`il counter è montato`)
        return () => {
            console.log('il counter è smontato')
        }
    }, [])

    useEffect(() =>{
      let intervallo = setInterval(function () {setCount(counter + 1)},1000)

      return () => {
        clearInterval(intervallo, 1000)
      }
    }, [counter])

    return (
        <div>
          <h1>{counter}</h1>
        </div>
      );
}

export default Counter