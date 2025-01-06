export interface Movies {
    Title: string; 
    Year: string;   
    imdbID: string; 
    Type: string;  
    Poster: string; 
}

export interface ApiResponse {
    Search: Movies[];
    totalResults: string; 
    Response: string;   
}