import Link from "next/link";

export const MenuListing = ({ label, onClick }) => {
  return (
    <li>
      <Link
        onClick={onClick}
        className="text-gray-400 font-medium text-lg hover:text-gray-200"
        href="/"
      >
        {label}
      </Link>
    </li>
  );
};
