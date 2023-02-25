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

export const ItemIndexPage = () => {
    const navigate = useNavigate();

    const array = [...Array(100)].map((_, i) => i);

    const handleClickEdit = () => {
        navigate("/item/edit/1");
    };
    const handleClickDelete = () => {
        alert("delete");
    };
    return (
        <Box padding={"80px 0px"} position="relative">
            <Button
                onClick={() => navigate("/category")}
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"120px"}
                colorScheme="teal"
                variant="solid"
            >
                Category
            </Button>
            <Button
                onClick={() => navigate("/item/create")}
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
                Item Index
            </Heading>
            <Box width={700} mx="auto">
                <TableContainer>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Category</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
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
                                        <Td>millimetres (mm)</Td>
                                        <Td isNumeric>25.4</Td>
                                        <Td textAlign={"center"}>
                                            <EditIcon
                                                onClick={handleClickEdit}
                                                cursor={"pointer"}
                                            />
                                        </Td>
                                        <Td textAlign={"center"}>
                                            <DeleteIcon
                                                onClick={handleClickDelete}
                                                cursor={"pointer"}
                                            />
                                        </Td>
                                    </Tr>
                                )),
                            ]}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};
