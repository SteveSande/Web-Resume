import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import NavItem from "./nav-item";

function MyMenu() {
  return (
    <NavigationMenu.Root className="flex w-full justify-evenly border-solid border-red-400 border-2 list-none">
      <NavItem text='Experience' link='https://flexboxfroggy.com/'/>
      <NavItem text='Projects'link='https://www.geeksforgeeks.org/how-to-set-space-between-the-flexbox/'/>
      <NavItem text='Contact' link='https://tailwindcss.com/docs/width' />
    </NavigationMenu.Root>
  );
}

export default MyMenu;
