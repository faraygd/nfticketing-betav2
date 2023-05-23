import Link from "next/link";

export const FooterMenuListing = ({ label, href }) => {
  return (
    <li>
      <Link className="text-sm text-gray-300" href={href}>
        {label}
      </Link>
    </li>
  );
};
