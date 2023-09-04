import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface info {
  text: string;
  link: string;
}

function NavItem(props: info) {
  return (
    <NavigationMenu.Item className="flex justify-center border-solid border-black border-2 w-1/3">
        <NavigationMenu.Link
          className='p-2 border-solid border-green-300 border-2 text-xl'
          href={props.link}
        >
          {props.text}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
  );
}

export default NavItem;