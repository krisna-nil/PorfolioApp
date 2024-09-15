
const HeaderComponent = () => {
  return (
    <nav className="flex justify-between px-10 h-[15vh] items-center bg-bgcolor">
      <h1 className="text-primary">Portfolio</h1>
      <div className="flex gap-4">
        <a className=" text-textcolor hover:text-primary"href="#about" target="_blank" >About</a>
        <a className=" text-textcolor  hover:text-primary"href="#work" target="_blank" >Work</a>
        <a className=" text-textcolor  hover:text-primary"href="#experience" target="_blank" >Experience</a>
        <a className=" text-textcolor  hover:text-primary"href="#skills" target="_blank" >Skills</a>
        <a className=" text-textcolor  hover:text-primary"href="#skills" target="_blank" >Contact Us </a>

      </div>
    </nav>
  );
};
export default HeaderComponent;
