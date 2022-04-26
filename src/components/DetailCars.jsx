import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailCars() {
    const params = useParams()
    // const url = `https://rent-cars-api.herokuapp.com/customer/car/${params.id}`
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`
    const [getDataById, setGetDataById] = useState([])  

    useEffect(() => {
      axios.get(url)
      .then((response) => {
        setGetDataById(response.data)
        // console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }, [])

  return (
    <>
    {/* <div>DetailCars</div> */}
    <h1>JSON typicode</h1>
    ol
    </>
  )
}

export default DetailCars