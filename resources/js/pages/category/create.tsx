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
    name: string;
};

type ErrorState = {
    name: boolean;
};

export const CategoryCreatePage = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [data, setData] = useState<State>({
        name: "",
    });
    const [error, setError] = useState<ErrorState>({
        name: false,
    });

    const handleCreate = async () => {
        if (error.name) {
            toast({
                title: `入力内容に不備があります`,
                status: "error",
                isClosable: true,
            });
            return;
        }
        try {
            await axiosBase.post("/category", data);
            navigate("/category");
        } catch (error) {
            toast({
                title: `作成に失敗しました`,
                status: "error",
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
    }, [data]);

    return (
        <Box padding={"80px 0px"} position="relative">
            <Button
                onClick={() => navigate("/category")}
                size={"lg"}
                position={"fixed"}
                top={10}
                right={"120px"}
                colorScheme="blue"
                variant="solid"
            >
                Top
            </Button>
            <Heading pb={10} textAlign={"center"}>
                Category Create
            </Heading>
            <Box w={"700px"} mx="auto">
                <Text mb="8px">Name</Text>
                <Input
                    isInvalid={error.name}
                    errorBorderColor="red.300"
                    placeholder="Here is a sample placeholder"
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
                <Button
                    mt={6}
                    onClick={handleCreate}
                    colorScheme="blue"
                    variant="solid"
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
};
