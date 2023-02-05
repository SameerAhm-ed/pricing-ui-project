import { Box, Button, Flex, Heading, HStack, Icon, Stack, StackProps, Text } from '@chakra-ui/react'

const TickIcon = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z" fill="#652CD3" />
        </svg>
    )
}

const ItemList = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as="li" spacing="5" {...rest} alignItems='start'>
            <Icon as={TickIcon} w="22px" h="22px" />
            <Text textAlign={['left', 'left', 'center']}>{children}</Text>
        </HStack>
    )
}

const Pricing = () => {
    return (
        <Box mx='6'>
            <Box
                textAlign="center"
                maxW="994px"
                margin="auto"
                mt="-40"
                borderRadius="xl"
                overflow="hidden"
                boxShadow=" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
                as='section'
            >
                <Flex direction={['column', 'column', 'row']}>
                    <Box bg="#F0EAFB" p="60px">
                        <Text fontWeight="extrabold" fontSize="xl">Premium PRO</Text>
                        <Heading as="h3" fontSize={['5xl', '5xl', '6xl']} mt="4">$329</Heading>
                        <Text color="#171923" fontWeight="medium" fontSize="lg" mt="2">billed just once</Text>
                        <Button colorScheme="purple" size="lg" w="282px" mt="6" >Get Started</Button>
                    </Box>
                    <Box p="60px" fontSize="lg" bg="white">
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Stack as="ul" spacing="5" pt="6">
                            <ItemList>International calling and messaging API</ItemList>
                            <ItemList>Additional phone numbers</ItemList>
                            <ItemList>Automated messages via Zapier</ItemList>
                            <ItemList>24/7 support and consulting</ItemList>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Pricing