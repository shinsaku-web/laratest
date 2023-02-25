export type Item = {
    id: number;
    category_id: number;
    name: string;
    price: number;
    created_at: string;
    updated_at: string;
    category: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
    };
};

export type Category = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};
