import { DatePipe } from "@angular/common";

export interface Order{
    id?: number,
    date: Date | String,
    total: number
}