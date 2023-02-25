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
    TableContainer,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const CategoryIndexPage = () => {
    const navigate = useNavigate();

    const array = [...Array(100)].map((_, i) => i);
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
                Item
            </Button>
            <Button
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"40px"}
                colorScheme="teal"
                variant="outline"
            >
                <AddIcon />
            </Button>
            <Heading pb={10} textAlign={"center"}>
                Category Index
            </Heading>
            <Box width={700} mx="auto">
                <TableContainer>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th textAlign={"center"}>Edit</Th>
                                <Th textAlign={"center"}>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {[
                                array.map((i) => (
                                    <Tr key={i}>
                                        <Td>inches</Td>
                                        <Td>Category</Td>
                                        <Td textAlign={"center"}>
                                            <EditIcon cursor={"pointer"}/>
                                        </Td>
                                        <Td textAlign={"center"}>
                                            <DeleteIcon cursor={"pointer"}/>
                                        </Td>
                                    </Tr>
                                )),
                            ]}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};
