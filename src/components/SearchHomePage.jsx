import React from 'react'
import { Link } from 'react-router-dom'
import carJumbotron from '../images/Mercedes Car EQC 300kW Edition - 900x598 1.png'

function SearchHomePage() {
    return (
        <>
            <div className='jumbotron bg-whitesmoke  h-screen-3/4 flex flex-row justify-between gap-x-20'>
                <div className="jumbotron-content-left w-screen-1/2  flex flex-col justify-center px-16">
                    <h3 className='font-helvetica font-bold text-5xl'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
                    <p className='font-helvetica text-lg mt-16px'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="jumbotron-content-right flex flex-col relative justify-end items-center">
                    <img className='absolute bottom-12 cars-image w-screen-45vw' src={carJumbotron} alt="" />
                    <div className='bg-background-blue-car h-1/2 rounded-tl-60px w-screen-1/2 justify-self-end'></div>
                </div>
            </div>
            <div className='jumbotron  border-2 border-rose-500 h-screen-1/2 flex flex-col'>
                <div className="wrapper-home-footer flex flex-row justify-around items-center mt-12 h-full  w-full border-2 border-nyoba-blue">
                    <div className="rental-profil max-w-268px border-2 border-black h-1/2 flex flex-col gap-y-5">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="rental-services border-2 border-black h-1/2 flex flex-col gap-y-6">
                        <p>Our services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div className="rental-contact border-2 border-black flex flex-row gap-x-6">
                        <Link to={{ pathname: 'facebook.com' }} target="_blank">
                            <p>facebook</p>
                        </Link>
                        <p>instagram</p>
                        <p>twitter</p>
                        <p>email</p>
                        <p>twitch</p>
                    </div>
                    <div className="rental-copyright flex">
                        <p>Copyright Binar 2022</p>
                        <p>BINARIAN</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchHomePage