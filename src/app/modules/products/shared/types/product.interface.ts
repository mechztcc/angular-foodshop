import { Category } from "src/app/modules/category/shared/types/category.interface";

export interface Product {
    id?: number | string;
    name: string;
    price: string;
    size: string;
    category_id?: number | string;
    category?: Category;
}