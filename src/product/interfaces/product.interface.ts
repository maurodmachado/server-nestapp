import { Document } from "mongoose";

export interface Product extends Document{
    readonly name: String,
    readonly description: String,
    readonly createAt: Date
}