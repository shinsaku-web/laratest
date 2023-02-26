import { Box, Button, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { Category } from "../../types/types";
import { axiosBase } from "../../apis/axiosBase";

export const CategoryIndexPage = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const handleClickEdit = () => {
        alert("edit");
    };
    const handleClickDelete = async (id: string) => {
        if (confirm("Really?")) {
            try {
                await axiosBase.delete("/category/" + id);
                await getCategories();
                toast({
                    title: `削除しました。`,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: `削除に失敗しました`,
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        }
    };
    const [categories, setCategories] = useState<Category[]>([]);
    const getCategories = async () => {
        const { data } = await axiosBase.get("/category");
        setCategories(data);
    };
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <Box padding={"80px 0px"} position="relative">
            <Button
                onClick={() => navigate("/item")}
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"120px"}
                colorScheme="blue"
                variant="solid"
            >
                Item
            </Button>
            <Button
                onClick={() => navigate("/category/create")}
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"40px"}
                colorScheme="blue"
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
                                categories.map((category) => (
                                    <Tr key={category.id}>
                                        <Td>{category.id}</Td>
                                        <Td>{category.name}</Td>
                                        <Td textAlign={"center"}>
                                            <EditIcon
                                                onClick={handleClickEdit}
                                                cursor={"pointer"}
                                            />
                                        </Td>
                                        <Td textAlign={"center"}>
                                            <DeleteIcon
                                                onClick={() =>
                                                    handleClickDelete(
                                                        String(category.id)
                                                    )
                                                }
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
