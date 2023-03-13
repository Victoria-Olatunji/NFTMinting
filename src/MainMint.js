import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import eruChefsNfts from './EruChefsNfts.json'; //allows us connect to our smart contract using json file we already created

const eruChefsNftsAddress = "0x6c53e17bDd495BD420dFBeA0698b0f85f00DE16f";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum); // for ethers to connect to blockchain
            const signer = provider.getSigner(); //signs the transaction
            const contract = new ethers.Contract(
                eruChefsNftsAddress,
                eruChefsNfts.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                 value: ethers.utils.parseEther((0.02 * mintAmount).toString()),  
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error", err)
            }
        }
    }
    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify = "center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontsize="48px" textshadow="0 5px #000000" marginTop="-100px">Eru Chefs Nfts Collection</Text>
                    <Text
                    fontSize="30px"
                    letterSpacing="-5.5%"
                    fontFamily="VT323"
                    textShadow="0 2px 2px #000000"
                    >
                    It's 2023. Can the Eru Chefs Nfts save human from destructive rampant NFT Speculation? Mint Eru chefs Nfts to find out.</Text>
                </div>
                {isConnected ?(
                <div>
                    <Flex align="ceneter" justify="center">
                        <Button
                        background="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px" 
                        onClick = {handleDecrement}>
                            -
                        </Button>
                        <Input
                        readOnly
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number" 
                        value={mintAmount} 
                        />
                        <Button
                        background="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick = {handleIncrement}>
                            +
                        </Button>
                    </Flex>
                    <Button
                     background="#D6517D"
                     borderRadius="5px"
                     boxShadow="0px 2px 2px 1px #0F0F0F"
                     color="white"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     marginTop="10px" 
                    onClick = {handleMint}
                    >
                        MintNow
                    </Button>
                </div>
            ) : (
                <Text
                marginTop="70px" 
                fontSize="25px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textshadow="0 3px #000000"
                color="white"
                >
                    You must be connected to mint
                </Text>     
            )}
            </Box>
        </Flex>
      );
};

export default MainMint;