import React, { useState } from 'react'
import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { NavLink as ReactRouterLink } from 'react-router-dom'

interface NavItemProps {
  navSize: string;
  icon: IconType;
  title: string;
  to: string;

}

const NavItem = ({ navSize, icon, title, to } : NavItemProps) => {
  return(
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement='right'>
        <Link
          p={0}
          borderRadius={8}
          _activeLink={{ backgroundColor: '#AEC8CA'}}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={navSize === 'large' ? '100%' : 'auto'}
          as={ReactRouterLink}
          to={to}
        >
          <MenuButton w='100%' p={3}>
            <Flex>
              <Icon as={icon} h={5} fontSize='xl' color={'gray.500'} />
              <Text ml={5} h={5} fontSize='sm' display={navSize === 'small' ? 'none' : 'flex'}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  )
}

export default NavItem