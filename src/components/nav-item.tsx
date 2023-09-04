import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface info {
  text: string;
  link: string;
}

function NavItem(props: info) {
  return (
    <NavigationMenu.Item>
        <NavigationMenu.Link
          className="border-solid border-black border-2"
          href={props.link}
        >
          {props.text}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
  );
}

export default NavItem;