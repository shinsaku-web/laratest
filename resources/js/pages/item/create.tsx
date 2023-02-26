import {
    Box,
    Button,
    Heading,
    Input,
    Text,
    useToast,
    useUpdateEffect,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosBase } from "../../apis/axiosBase";

type State = {
    category_id: string;
    name: string;
    price: string;
};

type ErrorState = {
    name: boolean;
    price: boolean;
};

export const ItemCreatePage = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [data, setData] = useState<State>({
        category_id: "1",
        name: "",
        price: "",
    });
    const [error, setError] = useState<ErrorState>({
        name: false,
        price: false,
    });

    const handleCreate = async () => {
        if (error.name || error.price) {
            toast({
                title: `入力内容に不備があります`,
                status: "error",
                duration: 1000,
                isClosable: true,
            });
            return;
        }
        try {
            await axiosBase.post("/item", data);
            navigate("/item");
        } catch (error) {
            toast({
                title: `作成に失敗しました`,
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    };

    useUpdateEffect(() => {
        if (!data.name || data.name.length >= 256) {
            setError((prev) => ({ ...prev, name: true }));
        } else {
            setError((prev) => ({ ...prev, name: false }));
        }
        if (
            !data.price ||
            data.price.length >= 256 ||
            !Number.isInteger(parseInt(data.price))
        ) {
            setError((prev) => ({ ...prev, price: true }));
            return;
        } else {
            setError((prev) => ({ ...prev, price: false }));
        }
    }, [data]);

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
                Item Create
            </Heading>
            <Box w={"700px"} mx="auto">
                <Text mb="8px">Name</Text>
                <Input
                    isInvalid={error.name}
                    errorBorderColor="red.300"
                    placeholder="Here is a sample placeholder"
                    value={data.name}
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
                <Text mt={"32px"} mb="8px">
                    Price
                </Text>
                <Input
                    isInvalid={error.price}
                    errorBorderColor="red.300"
                    placeholder="Here is a sample placeholder"
                    value={data.price}
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            price: e.target.value,
                        }))
                    }
                />
                <Button
                    mt={6}
                    onClick={handleCreate}
                    colorScheme="teal"
                    variant="solid"
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
};
