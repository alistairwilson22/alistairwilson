export type MdContent = {
    title?: string;
    author?: string;
    date?: string;
    img?: string;
    tags?: string[];
    slug?: string;
    content: string;
}

export enum ContentType {
    Book = "Book",
    Lab = "Lab"
}