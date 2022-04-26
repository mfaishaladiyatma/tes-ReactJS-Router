import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './css/ResultSearchCars.module.css'
import { Link } from 'react-router-dom'

function ResultSearchCars() {
    const [cobaGet, setCobaGet] = useState([])

    // const url = 'https://rent-cars-api.herokuapp.com/customer/car'
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCobaGet(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className='ResultSearchCars'>
                <h1>ResultSearchCars</h1>
                <div className='resultGet'>
                    <div className='result-container'>
                        <ol>
                            {cobaGet.map((result) => (
                                <li key={result.id} >
                                    <Link style={{textDecoration:'none'}} to={'detail/' + result.id}>
                                        <div className={styles.carsResult}>
                                            {/* {result.name}
                                            <img className={styles.carImage} src={result.image} alt="" />
                                            {result.category} */}
                                            {result.title}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* <div>
            {cobaGet.map((result) => (
                <div>{result}</div>
            ))}
        </div> */}
                </div>
            </div>
        </>
    )
}

export default ResultSearchCars