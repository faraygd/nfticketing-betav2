import { SidebarMenuListing } from './SidebarMenuListing'

export const SidebarMenuList = () => {
  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-1">
        <SidebarMenuListing active label={'Home'} />
        <SidebarMenuListing label={'Benefit'} />
        <SidebarMenuListing label={'Partner'} />
        <SidebarMenuListing label={'About'} />
      </ul>
    </nav>
  );
};
