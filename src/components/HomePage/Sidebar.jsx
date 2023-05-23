import { XMarkIcon } from "@heroicons/react/24/outline";
import { SidebarMenuList } from './SidebarMenuList'

export const Sidebar = ({ status, setStatus }) => {
  return (
    <aside
      className={
        status
          ? "fixed top-0 right-0 w-[300px] h-screen z-10 duration-300"
          : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
      }
      style={{backgroundColor: '#24303F'}}
    >
      {/* Sidebar heading */}
      <div className="flex px-6 pb-4 pt-8 items-center justify-between">
        <h2 className="text-xl flex text-gray-200">
          Ticketing <span className="font-bold text-gray-200">LabsNFT</span>
        </h2>
        <XMarkIcon
          onClick={() => {
            setStatus(false);
          }}
          className="w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
        />
      </div>

      <SidebarMenuList />
    </aside>
  );
};
