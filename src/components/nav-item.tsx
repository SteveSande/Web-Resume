import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook

interface info {
  text: string;
  link: string;
  dropdown?: boolean;
  dropdownItems?: dropdownItemsType[];
}

function NavItem(props: info) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover state

  const handleMouseEnter = () => {
    setIsHovered(true); // Set isHovered to true when the mouse enters
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set isHovered to false when the mouse leaves
  };

  return (
    <li
      className="flex justify-center border-solid border-black border-2 w-1/3"
      onMouseEnter={handleMouseEnter} // Handle mouse enter event
      onMouseLeave={handleMouseLeave} // Handle mouse leave event
    >
      <Link
        className="p-2 border-solid border-green-300 border-2 text-xl"
        to={props.link}
      >
        {props.text}
        {props.dropdown && (
          <>
            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />{" "}
            {isHovered && (
              <ul className="absolute bg-white p-2">
                {props.dropdownItems?.map((item) => (
                  <li> <Link to={item.path}>{item.text}</Link></li>
                ))}
              </ul>
            )}
          </>
        )}
      </Link>
    </li>
  );
}

export default NavItem;
