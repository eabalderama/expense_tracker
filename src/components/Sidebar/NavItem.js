import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'

const NavItem = ({ navSize, icon, title, active, to }) => {
  return(
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement='right'>
        <Link
          backgroundColor={active && '#AEC8CA'}
          p={0}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={navSize === 'large' && '100%'}
          as={ReactRouterLink}
          to={to}
        >
          <MenuButton w='100%' p={3}>
            <Flex>
              <Icon as={icon} h={5} fontSize='xl' color={active ? '#82AAAD' : 'gray.500'} />
              <Text ml={5} h={5} fontSize='sm' display={navSize === 'small' ? 'none' : 'flex'}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  )
}

export default NavItem