import { Products } from 'src/app/common/products';

export interface User {
    id: string;
    name: UserName;
    email: string;
    address: Address;
    mob: string;
    cart: Products[];
    wishList: Products[];
    orders: Products[];
    password: string;
    isAdmin: boolean;
}
export interface UserDetails {
    name: string;
    email: string;
    address: string;
    mob: string;
}

interface UserName {
    fName: string;
    lName: string;
}

interface Address {
    addLine1: string;
    addLine2: string;
    city: string;
    state: string;
    pinCode: string;
}

export interface Cart {
    productID: string;
    productName: string;
    price: string;
    quantity: string;
}
