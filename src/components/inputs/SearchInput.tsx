import React from "react";
import {Input} from "./styled";

interface ISearchInput{
    value:string,
    HandleInput: Function,
    placeholder:string
}

const SearchInput = ({value,HandleInput,placeholder}:ISearchInput) => (
    <Input type="text" placeholder={placeholder} value={value} onChange={event => HandleInput(event)}/>
)

export default SearchInput;