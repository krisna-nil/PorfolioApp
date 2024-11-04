import { IconHexagonLetterN } from '@tabler/icons-react';
import SideBarComponent from './SideBarComponent';
const links=["About","Work","Experience","Contact"]
const navLinks=(col:Boolean)=>{ 
  return links.map((link,index)=>{
   return  <a className={`${col? 'flex flex-col items-center':''} text-textcolor text-lg font-mono hover:text-primary`} href={`#${link}`} target="_blank" ><span className="text-primary">0{index+1}. </span>{link}</a>
  }) 

}
const HeaderComponent = () => {
  return (
    <nav className="flex justify-between px-10 h-[18vh] items-center bg-bgcolor">
      <IconHexagonLetterN stroke={1.4} size={60} color="#64FFDA"/>
      <div className="md:flex gap-8 hidden">
      {navLinks(false)}
      </div>
    <SideBarComponent/> 
    </nav>
  );
};
export default HeaderComponent;
export{navLinks}