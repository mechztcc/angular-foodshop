export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    token?: string;
    active?: boolean;
    created_at?: string | Date;
    updated_at?: string | Date;
}