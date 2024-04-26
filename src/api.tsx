import axios from "axios"
import { CompanyKeyMetrics, CompanyProfile, CompanySearch,CompanyIncomeStatement, CompanyBalanceSheet, CompanyCashFlow } from "./company";

interface SearchResponse {
    data: CompanySearch[];

}

export const searchCompanies= async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=AHQNbzgMNUJUTqQn9zGQpdBGQHO8NA3r`
        )
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("error message: ",error.message);
            return error.message;
        }else {
            console.log("unexpected error: ",error);
            return "An expected error has occured."
            
        }
        
    }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=AHQNbzgMNUJUTqQn9zGQpdBGQHO8NA3r`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=AHQNbzgMNUJUTqQn9zGQpdBGQHO8NA3r`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=xP0ZmOYYiZlZGjKCOK5pKiDNmDuAueZk`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};


export const getBalanceSheet = async (query: string) => {
  
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=xP0ZmOYYiZlZGjKCOK5pKiDNmDuAueZk`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=xP0ZmOYYiZlZGjKCOK5pKiDNmDuAueZk`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};