import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {Link} from 'react-router-dom';

interface info {
  text: string;
  link: string;
}

function NavItem(props: info) {
  return (
    <NavigationMenu.Item className="flex justify-center border-solid border-black border-2 w-1/3">
        <Link
          className='p-2 border-solid border-green-300 border-2 text-xl'
          to={props.link}
        >
          {props.text}
        </Link>
      </NavigationMenu.Item>
  );
}

export default NavItem;