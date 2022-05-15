import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import calendarLogo from '../images/fi_calendar.svg'
import transmisiLogo from '../images/fi_settings.svg'
import peopleLogo from '../images/fi_users.svg'

function ResultSearchCars() {
    const [cobaGet, setCobaGet] = useState([])

    // const url = 'https://rent-cars-api.herokuapp.com/customer/car'
    const url = 'https://rent-cars-api.herokuapp.com/admin/car'
    // const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCobaGet(response.data)
                // console.log(cobaGet)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className='ResultSearchCars flex flex-col items-center'>
                <div className='resultGet flex justify-center w-full relative bg-whitesmoke  h-screen-1/4'>
                    <div className="absolute -bottom-20 bg-white shadow-custom-shadow-searchBar rounded-10px flex items-center justify-center flex-col pencarianBars gap-y-7 w-80rem h-52">
                        <div className='w-full'><p className='w-fit ml-14 font-helvetica font-bold text-lg'>Pencarianmu</p></div>
                        <form className='form-helvetica flex flex-row items-center gap-x-8' action="">
                            <div className='font-rubik flex flex-col gap-y-4'>
                                <label htmlFor="tipeDriver">Tipe Driver</label>
                                <input placeholder='Pilih Tipe Driver' className='h-10 w-52 px-3 border-2 border-border-gray rounded-sm' type="text" />
                            </div>
                            <div className='font-rubik flex flex-col gap-y-4'>
                                <label htmlFor="tanggal">Tanggal</label>
                                <input className='h-10 w-52 px-3 border-2 border-border-gray rounded-sm' type="date" />
                            </div>
                            <div className='font-rubik flex flex-col gap-y-4'>
                                <label htmlFor="waktuJemput">Waktu Jemput/Ambil</label>
                                <input placeholder='Pilih Waktu' className='h-10 w-52 px-3 border-2 border-border-gray rounded-sm' type="text" />
                            </div>
                            <div className='font-rubik flex flex-col gap-y-4'>
                                <label htmlFor="jumlahPenumpang">Jumlah Penumpang (optional)</label>
                                <input placeholder='Jumlah Penumpang' className='h-10 w-52 px-3 border-2 border-border-gray rounded-sm' type="text" />
                            </div>

                            <Link to={'/result'}>
                                <button className='flex justify-center bg-[#5CB85F] rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica text-white font-bold'>Cari Mobil</div></button>
                            </Link>
                            {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
                        </form>
                    </div>
                </div>
                <div className='result-container  w-80rem mt-32'>
                    <ol className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        {cobaGet.map((result) => (
                            <li className='shadow-custom-shadow-1 flex rounded-10px z-10 h-screen-90vh' key={result.id}>
                                <div className='flex p-5 h-full'>
                                    <div className="wrapper-card flex flex-col gap-y-5 relative">
                                        <img className='max-h-290px' src={result.image} alt="" />
                                        <div className='font-helvetica font-semibold'>
                                            {result.name} / {result.category}
                                        </div>
                                        <div className='font-helvetica font-bold'>
                                            Rp {result.price} / hari
                                        </div>
                                        <div className='font-helvetica text-justify'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias ipsum et illo porro debitis accusantium natus esse dolorem voluptatibus mollitia, minima, voluptas error fugiat eligendi iusto fugit pariatur consequuntur?
                                        </div>
                                        <div className='font-helvetica flex flex-col gap-y-5'>
                                            <div className='flex flex-row gap-x-3'>
                                                <img src={peopleLogo} alt="" />
                                                <p>4 orang</p>
                                            </div>
                                            <div className='flex flex-row gap-x-3'>
                                                <img src={transmisiLogo} alt="" />
                                                <p>Manual</p>
                                            </div>
                                            <div className='flex flex-row gap-x-3'>
                                                <img src={calendarLogo} alt="" />
                                                <p>Tahun 2020</p>
                                            </div>
                                        </div>
                                        <Link style={{ textDecoration: 'none' }} to={'detail/' + result.id}>
                                            <button className='bg-[#5CB85F] h-60px w-full absolute bottom-0 text-center font-helvetica font-bold text-white'>Pilih Mobil</button>
                                        </Link>
                                    </div>
                                </div>
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
        </>
    )
}

export default ResultSearchCars