
interface ApiResponse<T>{
    status: number;
    data: T;
}

interface ApiPaginatedResponse<T>{
    status: number;
    pageSize: number;
    page: number;
    data: T;
}