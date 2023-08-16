import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Movie from '@/components/movie'
import MoviesList from '../data/movies.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center p-0 ${inter.className}`}
    >
      <Navbar 
      search={true}
      />
      <div className='w-full flex flex-wrap gap-4 p-4 mt-[70px] justify-center  text-start ' >
        {
          MoviesList.map((item, index) => {
            return (
              <Movie
                key={index}
                item={item}
              />
            )
          })
        }
      </div>
    </main>
  )
}
