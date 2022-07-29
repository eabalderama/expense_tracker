import { Outlet } from "react-router-dom"
import { Flex, Divider, Heading, Text, Avatar, Link, Icon, chakra } from "@chakra-ui/react"
import { MdMenu } from "react-icons/md";
import NavItem from "./NavItem";
import { Link as ReactRouterLink } from 'react-router-dom'
import menuItems from "../../config/sidebar"
import { motion, isValidMotionProp } from "framer-motion";
import { useState } from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

const variants = {
  open: { 
    width: '200px',
    transition: {
      ease: 'easeInOut',
    }
  },
  closed: { 
    width: '50px',
    transition: {
      ease: 'easeInOut'
    }
  },
}

const textVariants = {
  open: {
    opacity: 1,
    display: 'flex',
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
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return(
      <Flex>
          <MotionBox
            initial={false}
            display='flex'
            pos='sticky'
            h='95vh'
            px={1}
            marginTop='2.5vh'
            marginLeft={2}
            boxShadow='0 4px 12px 0 rgba(0,0,0,0.5)'
            borderRadius='15px'
            flexDir='column'
            justifyContent='space-between'
            animate={isOpen ? "open" : "closed"}
            // @ts-ignore no problem in operation, although type error appears.
            variants={variants}
          >
            <Flex flexDir='column' alignItems='flex-start' as='nav'>
              <Flex
                mt={5}
                p={3}
                h={5}
                onClick={() => setIsOpen(isOpen => !isOpen)}
              >
                  <Icon as={MdMenu} h={5} fontSize='xl' _hover={{ cursor: 'pointer' }} />
                  <Text as={motion.div} ml={5} h={5} fontWeight='bold' fontSize='sm' variants={textVariants} animate={isOpen ? "open" : "closed"}>Finance Tracker</Text>
                </Flex>
              {
                menuItems.map((item, index) => {
                  return (
                    <NavItem 
                      key={`${item.title}-${index}`}
                      isOpen={isOpen} 
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
                <ColorModeSwitcher/>
                <Divider  />
                <Link as={ReactRouterLink} to='/profile' _hover={{ textDecor: 'none' }}>
                  <Flex align='center' h={100} px={2}>
                    <Avatar h='28px' w='28px' />
                    <Flex
                      as={motion.div}
                      flexDir='column'
                      ml={4}
                      variants={textVariants} animate={isOpen ? "open" : "closed"}
                      // display={!isOpen ? 'none' : 'flex'}
                    >
                      <Heading as='h3' size='sm'>Edgar Alan Balderama</Heading>
                      <Text>Admin</Text>
                    </Flex>
                  </Flex>
                </Link>
              </Flex>
          </MotionBox>
        <Outlet />
      </Flex>
  )
}

export default Sidebar