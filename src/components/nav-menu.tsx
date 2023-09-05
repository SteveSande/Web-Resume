import NavItem from "./nav-item";

function MyMenu() {
  let projects: dropdownItemsType[] = [{text:"Your Dream Dog", path:"/projects/your-dream-dog"}, {text:"Business Website", path:"/projects/business-website"}];

  return (
    <ul className="flex w-full justify-evenly border-solid border-red-400 border-2 list-none">
      <NavItem text='Experience' link='/experience'/>
      <NavItem text='Projects'link='/projects' dropdown={true} dropdownItems={projects}/>
      <NavItem text='Contact' link='/contact' />
    </ul>
  );
}

export default MyMenu;
