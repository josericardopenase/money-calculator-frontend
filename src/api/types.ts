
interface ApiResponse<T>{
    status: number;
    result: T;
}

interface ApiPaginatedResponse<T>{
    status: number;
    pageSize: number;
    page: number;
    result: T;
}