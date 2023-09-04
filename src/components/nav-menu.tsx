import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import NavItem from "./nav-item";

function MyMenu() {
  return (
    <NavigationMenu.Root className="flex w-full justify-evenly border-solid border-red-400 border-2 list-none">
      <NavItem text='Experience' link='/experience'/>
      <NavItem text='Projects'link='/projects'/>
      <NavItem text='Contact' link='/contact' />
    </NavigationMenu.Root>
  );
}

export default MyMenu;
