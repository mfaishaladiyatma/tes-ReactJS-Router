import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './css/DetailCars.module.css'

function DetailCars() {
  const [getDataById, setGetDataById] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [show, setShow] =useState(false)
  
  const params = useParams()
  const url = `https://rent-cars-api.herokuapp.com/customer/car/${params.id}`
  // const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`


  useEffect(() => {
    setIsFetching(true)
    axios.get(url)
      .then((response) => {
        setGetDataById([...getDataById, response.data])
        console.log(response.data)
        setIsFetching(false)
      }).catch((error) => {
        console.log(error)
        setIsFetching(false)
      })
  }, [])

  return (
    <>
      {/* <div>DetailCars</div> */}
      <h1>JSON typicode</h1>
      <ol>
        {getDataById.map((result) => (
          <li key={result.id}>
            <div className={styles.carsResult}>
              <div className=''>{result.name}</div>
              <img className={styles.carImage} src={result.image} alt="" />
              {result.price}
            </div>
          </li>
        ))}
        {isFetching && <div> Tunggu</div>}
      </ol>
    </>
  )
}

export default DetailCars