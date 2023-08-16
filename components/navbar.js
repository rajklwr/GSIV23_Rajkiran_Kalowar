import { MdHome } from 'react-icons/md'
import { useRouter } from 'next/router';




function Navbar({ search, title }) {

    const router = useRouter();

    return (
        <nav className="bg-[#fff] p-4 w-full  border flex justify-between drop-shadow-lg fixed z-[500]  " >
            {
                search &&
                <input
                    className=" border sm:w-[50%] h-[40px] bg-gray rounded-md px-8 placeholder-[#000] "
                    placeholder="Search"
                    type="text" >
                </input>
            }
            {
                title &&
                <h1 className=' text-darkgray text-[30px]  ' >{title}</h1>
            }
            <div className="w-[50px] flex items-center justify-center " >
                <MdHome
                    color='#4A4A4A'
                    size={30}
                    className='cursor-pointer hover:scale-[1.05]'
                    onClick={() => {
                        router.push('/')
                    }}
                />
            </div>
        </nav>
    );
}

export default Navbar;
