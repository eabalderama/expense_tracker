import { Outlet } from "react-router-dom"
import { Flex, Divider, Heading, Text, Avatar, Link, Icon } from "@chakra-ui/react"
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import NavItem from "./NavItem";
import { Link as ReactRouterLink } from 'react-router-dom'
import menuItems from "../../config/sidebar"

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large')

  return(
    <Flex>
      <Flex
        pos='sticky'
        h='95vh'
        px={1}
        marginTop='2.5vh'
        marginLeft={2}
        boxShadow='0 4px 12px 0 rgba(0,0,0,0.5)'
        borderRadius='15px'
        w={navSize === 'large' && '200px'}
        flexDir='column'
        justifyContent='space-between'
      >
        <Flex
          flexDir='column'
          alignItems='flex-start'
          as='nav'
        >
          <Flex
            mt={5}
            p={3}
            h={5}
            onClick={() => {
              if(navSize === 'small'){
                changeNavSize('large')
              }else{
                changeNavSize('small')
              }
            }}
          >
              <Icon as={MdMenu} h={5} fontSize='xl' _hover={{ cursor: 'pointer' }} />
              <Text ml={5} h={5} fontWeight='bold' fontSize='sm' display={navSize === 'small' ? 'none' : 'flex'}>Finance Tracker</Text>
            </Flex>
          {
            menuItems.map((item, index) => {
              return (
                <NavItem 
                  key={`${item.title}-${index}`}
                  navSize={navSize} 
                  icon={item.icon} 
                  title={item.title} 
                  to={item.path} 
                />
              )
            })
          }
        </Flex>
        <Flex
          flexDir='column'
          w='100%'
          alignItems='flex-start'
          mb={4}
        >
            <Divider display={navSize === 'small' ? 'none' : 'flex'} />
            <Link as={ReactRouterLink} to='/profile' _hover={{ textDecor: 'none' }}>
              <Flex align='center' h={100} px={2}>
                <Avatar h='28px' w='28px' />
                <Flex
                  flexDir='column'
                  ml={4}
                  display={navSize === 'small' ? 'none' : 'flex'}
                >
                  <Heading as='h3' size='sm'>Edgar Alan Balderama</Heading>
                  <Text>Admin</Text>
                </Flex>
              </Flex>
            </Link>
            

        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  )
}

export default Sidebar