import React from 'react'
import {  Flex, Image, Link} from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const Footer = () => {
  return (
    <Flex justify = "space-between" align="center" padding="30px">
            {/* Left side Social Media Icons */}
            <Flex justify = "space-around" width="40%" padding=" 0 75px">
                <Link href="https://www.facebook.com">
                    <Image src = {Facebook} boxSize ="42px" margin = "0 15px"/>
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src = {Twitter} boxSize ="42px" margin = "0 15px"/>
                </Link>
                <Link href="https://www.email.com">
                    <Image src = {Email} boxSize ="42px" margin = "0 15px"/>
                </Link>
            </Flex>
    </Flex>
  )
}

export default Footer