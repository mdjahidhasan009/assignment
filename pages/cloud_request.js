import TopNav from "./components/TopNav";
import TopNavigation from "./components/TopNavigation";
import { FaSearch } from 'react-icons/fa';

const CloudRequest = () => {

  return(
    <div>
      <TopNav />
      <div className="mx-auto w-[90%]">
        <TopNavigation pageName="Cloud Request" />

        <div className="flex mt-6">
        {/* Left */}
          <div className="bg-white min-h-[60vh]">
            <div className="input_wrapper relative">
              <input className="p-2 w-[82%] bg-[#F8F8F8] mt-3 ml-3 pr-[35px]" type="text" placeholder="Search"/>
              <FaSearch className="relative text-iconColor absolute inline-block left-[-30px]" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudRequest;
