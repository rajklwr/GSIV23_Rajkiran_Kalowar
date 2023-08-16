import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Movie from '@/components/movie'
import { useSelector, useDispatch } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dispatch = useDispatch();

  const MoviesList = useSelector(state => state.movie.filteredMovies)


//   const date = new Date('2023-09-26T00:00:00Z');
// const timestamp = Math.floor(date.getTime() / 1000);
// console.log(timestamp);
  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center p-0 ${inter.className}`}
    >
      <Navbar
        search={true}
      />
      <div className='p-4 mt-[70px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center'>
        {
          MoviesList.map((item, index) => (
            <Movie key={index} item={item} />
          ))
        }
      </div>

    </main>
  )
}
