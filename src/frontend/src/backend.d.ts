import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Review {
    name: string;
    message: string;
    rating: bigint;
}
export interface backendInterface {
    getAllReviews(): Promise<Array<Review>>;
    getOwnerName(): Promise<string>;
    submitContactMessage(name: string, phone: string, message: string): Promise<void>;
    submitReview(name: string, rating: bigint, message: string): Promise<void>;
}
