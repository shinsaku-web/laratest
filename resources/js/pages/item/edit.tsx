import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Input,
    Text,
    useToast,
    useUpdateEffect,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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

export const ItemEditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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

    const handleUpdate = async () => {
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
            await axiosBase.post("/item/" + id, data);
            navigate("/item");
        } catch (error) {
            toast({
                title: `更新に失敗しました`,
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    };

    const initialize = async () => {
        const response = await axiosBase.get("/item/" + id);
        const item = response.data;
        setData({
            category_id: item.category_id,
            name: item.name,
            price: item.price,
        });
    };

    useEffect(() => {
        initialize();
    }, []);

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
                Item Update
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
                    onClick={handleUpdate}
                    colorScheme="teal"
                    variant="solid"
                >
                    Update
                </Button>
            </Box>
        </Box>
    );
};
