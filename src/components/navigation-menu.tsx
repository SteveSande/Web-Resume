import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function MyMenu() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className="display"
          href="https://www.reddit.com/r/all"
        >
          Experience
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className="NavigationMenuLink"
          href="https://www.reddit.com/r/all"
        >
          Portfolio
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className="NavigationMenuLink"
          href="https://www.reddit.com/r/all"
        >
          About
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
}

export default MyMenu;
