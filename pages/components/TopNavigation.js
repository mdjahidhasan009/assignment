import { TiRefresh } from 'react-icons/ti';

const TopNavigation = ({ pageName }) => {
  return (
    <div className="h-[60px] bg-white mt-5 rounded-lg">
      <h1 className="p-4 text-xl font-semibold">{pageName} <TiRefresh className="inline-block font-xl fa-xs text-iconColor" /></h1>
    </div>
  )
}

export default TopNavigation;
