import { 
  Container, 
  VStack, 
  Flex, 
  IconButton, 
  Center, 
  Link 
} from "@chakra-ui/react";
import { useState } from "react";
import { 
  IoHomeOutline, 
  IoHome, 
  IoGridOutline, 
  IoGrid, 
  IoWalletOutline, 
  IoWallet, 
  IoSettingsOutline, 
  IoSettings, 
  IoAddOutline 
} from "react-icons/io5";
import { NavLink as ReactRouterLink } from 'react-router-dom'

import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('dashboard')
  return(
    <Container maxW='100vw' h='100vh'>
      <VStack h='100vh'>
        <Outlet/>
      </VStack>
      <Center>
        <Flex 
          position='absolute' 
          bottom='0'
          w='90vw'
          h='50px' 
          p='0.5' 
          mb='10px'
          backgroundColor='#4A5568' 
          justifyContent='space-around' 
          alignItems='center'
          borderRadius='50px'
        >
          <Link 
            as={ReactRouterLink} 
            to='/' 
            _activeLink={{ backgroundColor: '#1a202c'}}  
            borderRadius='30px' 
            onClick={() => setActiveLink('dashboard')}
          >
            <Center w='32px' h='32px'>
              {
                activeLink === 'dashboard' ?
                <IoHome/>
                :
                <IoHomeOutline />
              }
            </Center>
          </Link>
          <Link 
            as={ReactRouterLink} 
            to='/accounts' 
            _activeLink={{ backgroundColor: '#1a202c'}} 
            borderRadius='30px' 
            onClick={() => setActiveLink('accounts')}
          >
            <Center w='32px' h='32px'>
              {
                activeLink === 'accounts' ?
                <IoWallet/>
                :
                <IoWalletOutline/>
              }
            </Center>
          </Link>
          <IconButton 
            variant='ghost' 
            aria-label='Accounts' 
            icon={<IoAddOutline/>} 
            onClick={() => setActiveLink('add')} 
          />
          <Link 
            as={ReactRouterLink} 
            to='/categories'  
            _activeLink={{ backgroundColor: '#1a202c'}} 
            borderRadius='30px' 
            onClick={() => setActiveLink('categories')}
          >
            <Center w='32px' h='32px'>
              {
                activeLink === 'categories' ?
                <IoGrid/>
                :
                <IoGridOutline/>
              }
            </Center>
          </Link>
          <Link 
            as={ReactRouterLink} 
            to='/settings' 
            _activeLink={{ backgroundColor: '#1a202c'}} 
            borderRadius='30px' 
            onClick={() => setActiveLink('settings')}
          >
            <Center w='32px' h='32px'>
              {
                activeLink === 'settings' ?
                <IoSettings/>
                :
                <IoSettingsOutline/>
              }
            </Center>
          </Link>
        </Flex>
      </Center>
    </Container>
  )
}

export default Navbar