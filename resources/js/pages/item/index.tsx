import { Box, Button, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { axiosBase } from "../../apis/axiosBase";
import { Item } from "../../types/types";

export const ItemIndexPage = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const handleClickEdit = (id: string) => {
        navigate("/item/edit/" + id);
    };
    const handleClickDelete = async (id: string) => {
        if (confirm("Really?")) {
            try {
                await axiosBase.delete("/item/" + id);
                await getList();
                toast({
                    title: `削除しました。`,
                    status: "success",
                    isClosable: true,
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: `削除に失敗しました`,
                    status: "error",
                    isClosable: true,
                });
            }
        }
    };

    const [list, setList] = useState<Item[]>([]);
    const getList = async () => {
        const { data } = await axiosBase.get("/item");
        setList(data);
    };
    useEffect(() => {
        getList();
    }, []);

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
            <Box width={1000} mx="auto">
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
                                list.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.category.name}</Td>
                                        <Td>{item.name}</Td>
                                        <Td isNumeric>{item.price}</Td>
                                        <Td textAlign={"center"}>
                                            <EditIcon
                                                onClick={() =>
                                                    handleClickEdit(
                                                        String(item.id)
                                                    )
                                                }
                                                cursor={"pointer"}
                                            />
                                        </Td>
                                        <Td textAlign={"center"}>
                                            <DeleteIcon
                                                onClick={() =>
                                                    handleClickDelete(
                                                        String(item.id)
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
