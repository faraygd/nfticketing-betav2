import Link from "next/link";

export const SidebarMenuListing = ({label, active}) => {
  return (
    <li>
      <Link
        className={`text-gray-400 outline-none text-lg flex items-center px-6 py-2.5 ${active && 'bg-gray-800'} hover:bg-gray-800`}
        href="/"
      >
        {label}
      </Link>
    </li>
  );
};
