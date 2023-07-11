import { Box, Flex, Link, Icon } from '@chakra-ui/react';
import { FiMail, FiPhone, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.200" color="gray.600">
      <Flex justifyContent="center" alignItems="center">
        <Link href="mailto:pablo@toksol.io" mx={2}>
          <Icon as={FiMail} boxSize={40} />
        </Link>
        <Link href="tel:+573024878295" mx={2}>
          <Icon as={FiPhone} boxSize={40} />
        </Link>
        <Link href="https://github.com/pablofelipe01/lr-tour-nfts" mx={2}>
          <Icon as={FiGithub} boxSize={40} />
        </Link>
        <Link href="https://www.instagram.com/pablofacebedo/" mx={2}>
          <Icon as={FiInstagram} boxSize={40} />
        </Link>
        <Link href="https://twitter.com/tokensolutions" mx={2}>
          <Icon as={FiTwitter} boxSize={40} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
