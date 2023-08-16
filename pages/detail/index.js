import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import { Inter } from 'next/font/google';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

const Detail = () => {

    const router = useRouter()
    const movieId = router.query.movieId
    const Movies = useSelector((state) => state.movie.movies)
    const [data, setData] = useState(null)
    const [date, setDate] = useState(null)


    useEffect(() => {
        getData()
    }, [movieId])


    const getData = () => {
        const obj = Movies.find(x => x.id === movieId);
        const timestamp = obj?.date * 1000; // Convert to milliseconds
        const date = new Date(timestamp);

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const day = date.getUTCDate();
        const monthName = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();

        setDate(`${day} ${monthName} ${year}`);
        setData(obj)
    }

    return (
        <main
            className={`flex min-h-screen bg-white flex-col items-center p-0 ${inter.className}`}
        >
            <Navbar
                title={"Movie Details"}
            />
            <div className=' w-full flex sm:flex-row flex-col  h-screen bg-white mt-[70px] p-4 gap-2 ' >
                <div className=' w-[100%] sm:w-[500px] h-[500px] bg-gray ' >
                    <img src={data?.image}  >
                    </img>
                </div>
                <div className=' w-[100%] h-[500px] sm:w-full text-darkgray ' >
                    <div className='flex text-darkgray items-center gap-4 h-[40px] ' >
                        <h1>{data?.title}</h1>
                        <Rating name="read-only" value={Number(data?.Ratings)} readOnly className="  " precision={0.5} size="small" />
                    </div>
                    <p>{date} | {data?.duration} | {data?.director}</p>
                    <p>Cast : {data?.Actor}</p>
                    <p>Description : {data?.desc}</p>
                </div>
            </div>
        </main>
    )
}

export default Detail