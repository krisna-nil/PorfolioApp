import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches, Button } from '@mantine/core';
import { IconXboxX } from '@tabler/icons-react';
import { navLinks } from './HeaderComponent';

// const size=useMatches({
//   xs:'md',
//   sm:'lg'
// });
function SideBarComponent() {
  const [opened, { toggle }] = useDisclosure(false);
  const size=useMatches({
    xs:'md',
    sm:'lg'
 });

  return (
    <>
       <Drawer.Root  className='bs:hidden !-z-10'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className='!-z-0' bg="#112240">
          <Drawer.Body className='mt-20 xs:mt-24  flex flex-col gap-5' bg="#112240">
            {navLinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:!hidden !z-50 relative' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
    </>
  );
}
export default SideBarComponent;