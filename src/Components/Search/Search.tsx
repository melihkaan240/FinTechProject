import React,{ChangeEvent, useState,MouseEvent, SyntheticEvent, FormEvent} from "react";
import "./Search.css";

interface Props{
    onSearchSubmit: (e: SyntheticEvent)=> void;
    search: string | undefined; 
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>)=> void;
};

const Search: React.FC<Props> = ({
    onSearchSubmit,
    search,
    handleSearchChange
}: Props) : JSX.Element=>{
   
    return (
      <>
      <form onSubmit={onSearchSubmit} action="">
        <input value={search} onChange={handleSearchChange} />
      </form>
      </>
    )
}

export default Search;