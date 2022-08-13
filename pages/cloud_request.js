import { FaSearch } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';

import TopNav from "./components/TopNav";
import TopNavigation from "./components/TopNavigation";

const CloudRequest = () => {

  return(
    <div>
      <TopNav />
      <div className="mx-auto w-[90%]">
        <TopNavigation pageName="Cloud Request" />

        <div className="flex mt-6">
        {/* Left */}
          <div className="bg-white min-h-[60vh] rounded-lg">
            <div className="input_wrapper relative">
              <input className="p-2 w-[82%] bg-[#F8F8F8] mt-3 ml-3 pr-[35px]" type="text" placeholder="Search"/>
              <FaSearch className="relative text-iconColor absolute inline-block left-[-30px]" />

              <GoSettings className="text-iconColor inline-block" />
            </div>

          </div>

          <div className="flex-1 ml-10">
            <div className="bg-white min-h-[60vh] rounded-lg flex justify-center items-center">
              {/* Content*/}
              <div className="">
                <p className="text-placeholderColor">You don’t have any favorite filter. Pleaes create a filter first.</p>
                <button className="mt-6 py-2 px-14 bg-[#47A7FF] block w-[199px]h-[48px] text-white rounded-lg mx-auto"
                >
                  Create Favorite Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudRequest;
