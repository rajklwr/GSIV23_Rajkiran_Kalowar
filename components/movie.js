import React from "react";
import { useRouter } from "next/router";
import Rating from '@mui/material/Rating';

const Movie = ({ item }) => {

    const router = useRouter()

    return (
        <div className="sm:w-[200px] w-[90%] bg-[#9B9B9B] sm:h-[264px] h-[350px] border drop-shadow-lg rounded-lg relative cursor-pointer hover:scale-[1.05] "
            onClick={() => {
                router.push('/detail')
            }}
        >
            <div className="w-full sm:h-[75px] h-[90px] bg-white absolute bottom-0 sm:text-[13px] text-[15px] rounded-b-lg text-[#000] p-1 ">
                <div className=" flex  justify-between " >
                    <p className="max-w-[50%] truncate font-semibold ">
                        {item.title}
                    </p>
                    <Rating name="read-only" value={Number(item.Ratings)} readOnly className="  " precision={0.5} size="small" />
                </div>
                <p className="two-line-truncate mt-2 ">
                    {item.desc}
                </p>
            </div>
        </div>
    )
}

export default Movie