import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
    const navigate = useNavigate();

    const array = [...Array(100)].map((_, i) => i);
    return (
        <Box padding={"80px 0px"}>
            <Heading pb={10} textAlign={"center"}>
                Index
            </Heading>
            <Box
                display="flex"
                gap={3}
                justifyContent={"center"}
                position="relative"
            >
                <Button
                    onClick={() => navigate("/item")}
                    size={"lg"}
                    colorScheme="teal"
                    variant="solid"
                >
                    Item
                </Button>
                <Button
                    onClick={() => navigate("/category")}
                    size={"lg"}
                    colorScheme="teal"
                    variant="outline"
                >
                    Category
                </Button>
            </Box>
        </Box>
    );
};
