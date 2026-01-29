export interface FizzBuzzRequest {
  int1: number;
  int2: number;
  limit: number;
  str1: string;
  str2: string;
}

export interface FizzBuzzResponse {
  result: string[];
}

export interface StatisticsResponse {
  mostFrequentRequest: FizzBuzzRequest | null;
  hitCount: number;
  lastUpdated: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
