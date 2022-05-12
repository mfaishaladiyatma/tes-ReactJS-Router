import React from 'react'
import { Link } from 'react-router-dom'
import { Listbox, Transition } from '@headlessui/react'
import carJumbotron from '../images/Mercedes Car EQC 300kW Edition - 900x598 1.png'

function SearchHomePage() {
    return (
        <>
            <div className='relative jumbotron bg-whitesmoke  h-screen-3/4 flex flex-row justify-between gap-x-16'>
                <div className="jumbotron-content-left w-screen-1/2  flex flex-col justify-center  ml-24">
                    <h3 className='font-helvetica font-bold text-5xl'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
                    <p className='font-helvetica text-lg mt-16px'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="jumbotron-content-right flex flex-col relative justify-end items-center">
                    <img className='absolute bottom-12 cars-image w-screen-45vw' src={carJumbotron} alt="" />
                    <div className='bg-background-blue-car h-1/2 rounded-tl-60px w-screen-1/2 justify-self-end'></div>
                </div>
                <div className="wrapper-searchBar -bottom-7rem absolute w-full flex justify-center">
                    <div className="bg-white shadow-custom-shadow-searchBar rounded-10px flex justify-center searchBarCars  w-75rem h-52">
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
                                <button className='flex justify-center bg-[#38d424] rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica text-white font-bold'>Cari Mobil</div></button>
                            </Link>
                            {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchHomePage