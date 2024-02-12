export interface IPost{
    userId: number,
    id: number,
    title: string,
    body: string,
    isFavorite?: boolean | undefined,
    isRead: boolean | undefined
}