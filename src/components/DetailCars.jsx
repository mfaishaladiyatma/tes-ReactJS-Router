import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import arrowUp from '../images/fi_chevron-up.svg'
import arrowDown from '../images/fi_chevron-down.svg'
import peopleImg from '../images/fi_users.svg'
import calendarImg from '../images/fi_calendar.svg'
import transmisiLogo from '../images/fi_settings.svg'

function DetailCars() {
  const [getDataById, setGetDataById] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [arrow, setArrow] = useState(arrowUp)

  const params = useParams()
  // const url = `https://rent-cars-api.herokuapp.com/customer/car/${params.id}`
  const url = `https://rent-cars-api.herokuapp.com/admin/car/${params.id}`
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

  const handleButton = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      setArrow(arrowDown)
    } else {
      setArrow(arrowUp)
    }
  }

  return (
    <>
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
      <div className="wrapper-detail-cars mt-32 grid grid-cols-custom-3 grid-rows-2  px-32 gap-x-10 justify-items-stretch h-screen-150vh">
        <div className='p-5 flex tentang-paket col-span-2 row-span-2  h-fit rounded-10px shadow-custom-shadow-1'>
          <div className='flex flex-col gap-y-5 font-helvetica w-full'>

            <div>
              <p className='font-bold'>Tentang Paket</p>
            </div>

            <p className=''>Include</p>

            <ul className='list-disc list-inside text-gray flex flex-col gap-y-2'>
              <li>Apa saja yang termasuk dalam paket durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>

            <p>Exclude</p>

            <ul className='list-disc list-inside text-gray flex flex-col gap-y-2'>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtima lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>

            <div className='mt-5 flex flex-row justify-between'>
              <p className='font-bold'>Refund, Reschedule, Overtime</p>
              {/* <button onClick={() => setIsOpen(!isOpen)}> */}
              <button className='animate-bounce  border-1 border-gray rounded-full flex justify-center items-center shadow-custom-shadow-1' onClick={handleButton}>
                <img src={arrow} alt="" />
              </button>
            </div>

            {/* SALAH SATU CARA DOM*/}
            {/* {!isOpen ? (
              <ul className='list-disc list-inside text-gray flex flex-col gap-y-2'>
                <li>Tidak termasuk biaya sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            ) :
              (
                null
              )} */}

            {/* Cara Kedua DOM*/}

            {/* <ul className={`${!isOpen ? 'flex transition-all duration-300'  : 'hidden transition-all duration-300'} list-disc list-inside text-gray  flex-col gap-y-2 h-full top-0`}>
              <li>Tidak termasuk biaya sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul> */}

            {/* <div className={`h-full ${isOpen ? 'translate-y-0' : 'translate-y-full'} ease-in-out duration-300`}></div> */}

            <Transition
              show={!isOpen}
              className='text-gray'
              enter=" transition ease-in-out duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave=" transition ease-in-out duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-full"
            >
              <ul className='list-disc list-inside flex flex-col gap-y-2'>
                <li>Tidak termasuk biaya sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Transition>
          </div>
        </div>
        <div className='flex shadow-custom-shadow-1 rounded-10px p-5 h-fit'>
          {getDataById.map((result) => (
            <div key={result.id}>
              <div className='flex flex-col gap-y-5'>
                <img className='' src={result.image} alt="" />
                <div className='font-bold font-helvetica text-xl'>{result.name} / {result.category}</div>
                <div className='flex flex-row gap-x-3 font-helvetica text-sm text-gray'>
                  <div className='flex flex-row gap-x-2'>
                    <img src={peopleImg} alt="" />
                    4 Orang
                  </div>
                  <div className='flex flex-row gap-x-2'>
                    <img src={transmisiLogo} alt="" />
                    Manual
                  </div>
                  <div className='flex flex-row gap-x-2'>
                    <img src={calendarImg} alt="" />
                    Tahun 2020
                  </div>
                </div>
                <div className='flex flex-row justify-between font-helvetica mt-3'>
                  <div><p>Total</p></div>
                  <div className='font-bold'><p>Rp 430.000</p></div>
                </div>

                <button className='bg-[#5CB85F] mt-10 h-60px text-white font-bold'>Lanjutkan Pembayaran</button>
              </div>
            </div>
          ))}
          {isFetching && <div> Tunggu</div>}
        </div>
      </div>
    </>
  )
}

export default DetailCars