import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosBase } from "../../apis/axiosBase";

type State = {
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
    const [data, setData] = useState<State>({ name: "", price: "" });
    const [error, setError] = useState<ErrorState>({
        name: false,
        price: false,
    });

    const handleCreate = async () => {
        if (error.name || error.price) {
            toast({
                title: `error!`,
                status: "error",
                isClosable: true,
            });
            return;
        }
        try {
            await axiosBase.post("/item", data);
            navigate("/item");
        } catch (error) {
            toast({
                title: `error!`,
                status: "error",
                isClosable: true,
            });
        }
    };

    useEffect(() => {
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
