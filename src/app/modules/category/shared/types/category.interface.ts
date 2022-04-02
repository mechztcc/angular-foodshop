

export interface Category {
    id?: number;
    name: string;
    actived: boolean;
    foodstore_id?: number | string;
    created_at?: string | Date;
    updated_at?: string | Date;
}