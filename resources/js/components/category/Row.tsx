import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Input, Td, Tr, useBoolean, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { axiosBase } from "../../apis/axiosBase";

type Props = {
    id: string;
    name: string;
    handleClickDelete: (id: string) => void;
    getCategories: () => Promise<void>;
};
export const Row = ({ id, name, handleClickDelete, getCategories }: Props) => {
    const [edit, setEdit] = useBoolean(false);
    const toast = useToast();
    const [data, setData] = useState("");

    const handleClickEdit = () => {
        setEdit.toggle();
    };
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
    };
    const handleUpdate = async () => {
        const body = { name: data };
        try {
            setEdit.toggle();
            await axiosBase.post("/category/" + id, body);
            getCategories();
            toast({
                title: `更新しました`,
                status: "success",
                duration: 1000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: `更新に失敗しました`,
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    };
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>
                {edit ? <Input onChange={onChangeInput} bg={"white"} /> : name}
            </Td>
            <Td textAlign={"center"}>
                {edit ? (
                    <Button
                        onClick={handleUpdate}
                        colorScheme={"blue"}
                        size={"xs"}
                    >
                        Update
                    </Button>
                ) : (
                    <EditIcon onClick={handleClickEdit} cursor={"pointer"} />
                )}
            </Td>
            <Td textAlign={"center"}>
                <DeleteIcon
                    onClick={() => handleClickDelete(id)}
                    cursor={"pointer"}
                />
            </Td>
        </Tr>
    );
};
