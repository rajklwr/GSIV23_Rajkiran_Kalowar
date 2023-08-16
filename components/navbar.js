import { MdHome } from 'react-icons/md'
import { useRouter } from 'next/router';
import {useSelector, useDispatch} from 'react-redux';
import {updateSearchKey, filterMovies} from '../redux/action/movie';




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
                <input
                    className=" border sm:w-[50%] h-[40px] bg-gray rounded-md px-8 placeholder-[#000] "
                    placeholder="Search"
                    type="text"
                    onChange={handleSearchChange}
                    >
                </input>
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
