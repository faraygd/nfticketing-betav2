import Link from "next/link";
import { FooterMenuListing } from './FooterMenuListing'

export const FooterMenuList = ({ items }) => {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <FooterMenuListing key={i} href={item.href} label={item.label} />
      ))}
    </ul>
  );
};
