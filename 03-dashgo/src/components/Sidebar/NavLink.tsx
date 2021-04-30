import Link from 'next/link';
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml='4' fontWeight='medium'>
          { children }
        </Text>
      </ChakraLink>
    </Link>
  );
}
