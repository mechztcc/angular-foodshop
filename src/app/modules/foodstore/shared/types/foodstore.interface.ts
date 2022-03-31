
export interface Foodstore {
    id: string;
    name: string;
    actived: boolean;
    created_at: string;
    updated_at: string;
    address: Address;
}

export interface Address {
    id: string;
    zip_code: string;
    street: string;
    number: string;
    city: string;
    state: string;
    created_at: string;
    updated_at: string;
}