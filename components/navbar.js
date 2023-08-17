import { MdHome, MdSearch } from 'react-icons/md'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchKey, filterMovies } from '../redux/action/movie';




function Navbar({ search, title }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(updateSearchKey(e.target.value));
        dispatch(filterMovies());
    };

    return (
        <nav className="bg-[#fff] h-[70px] p-4 w-full  border flex justify-between drop-shadow-lg fixed z-[500]  " >
            {
                search &&
                <div className='w-full flex relative' >
                    <div className=' w-[40px] h-[40px] text-darkgray absolute left-0 flex items-center justify-center ' >
                        <MdSearch
                            size={25}
                        />
                    </div>
                    <input
                        className=" border sm:w-[50%] h-[40px] bg-gray text-darkgray rounded-md px-[40px] placeholder-darkgray "
                        placeholder="Search"
                        type="text"
                        onChange={handleSearchChange}
                    >
                    </input>
                </div>
            }
            {
                title &&
                <h1 className=' text-darkgray text-[25px]  ' >{title}</h1>
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
