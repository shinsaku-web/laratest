import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ItemEditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Box padding={"80px 0px"} position="relative">
            <Button
                onClick={() => navigate("/item")}
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"120px"}
                colorScheme="teal"
                variant="solid"
            >
                Top
            </Button>
            <Heading pb={10} textAlign={"center"}>
                Item Update {id}
            </Heading>
            <Box w={"700px"} mx="auto">
                <Text mb="8px">Name</Text>
                <Input
                    isInvalid
                    errorBorderColor="red.300"
                    placeholder="Here is a sample placeholder"
                />
                <Text mt={"32px"} mb="8px">
                    Price
                </Text>
                <Input
                    isInvalid
                    errorBorderColor="red.300"
                    placeholder="Here is a sample placeholder"
                />
                <Button
                    mt={6}
                    onClick={() => navigate("/item")}
                    colorScheme="teal"
                    variant="solid"
                >
                    Update
                </Button>
            </Box>
        </Box>
    );
};
