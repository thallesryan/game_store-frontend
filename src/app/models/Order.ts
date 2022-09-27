import { Game } from './Game';
import { OrderItem } from './OrderItem';
import { User } from "./User";

export interface Order{
    id?: number
    user: User
    items:OrderItem[]
    date?: Date | String
    total?: number
}