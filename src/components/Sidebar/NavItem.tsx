import React from 'react'
import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { motion } from "framer-motion";

interface NavItemProps {
  isOpen: boolean;
  icon: IconType;
  title: string;
  to: string;
}

const variants = {
  open: { 
    alignItems: 'flex-start',
  },
  closed: { 
    alignItems: 'center',
    transition: {
      delay: 0.5
    }
  },
}

const textVariants = {
  open: {
    display: 'flex',
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.2
    }
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const NavItem = ({ isOpen, icon, title, to } : NavItemProps) => {
  return(
    <Flex
      as={motion.div}
      mt={30}
      flexDir='column'
      w='100%'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <Menu placement='right'>
        <Link
          p={0}
          borderRadius={8}
          _activeLink={{ backgroundColor: '#AEC8CA'}}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w='100%'
          as={ReactRouterLink}
          to={to}
        >
          <MenuButton w='100%' p={3}>
            <Flex alignItems="center">
              <Icon as={icon} h={5} fontSize='xl' color={'gray.500'} />
              <Text as={motion.div} ml={5} h={5} fontSize='sm' variants={textVariants} animate={isOpen ? 'open' : 'closed'}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  )
}

export default NavItem