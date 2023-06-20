import React from "react"
import styled from "styled-components"
import { devices, PrimaryButton } from "./Commons"
import Icons from "./Icons"

const SearchInputField = () => {
    return (
        <SearchInputFieldWrapper>
            <SearchInputContainer>
                <SearchSelectWrapper>
                    <SearchSelect>
                        <Option>CATEGORY</Option>
                    </SearchSelect>
                </SearchSelectWrapper>
                <SearchInput placeholder="SEARCH" />
            </SearchInputContainer>
            <SearchButton><Icons.Search size="20" /></SearchButton>
        </SearchInputFieldWrapper>
    )
}

const SearchInputFieldWrapper = styled.div`
    padding: 0 1em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3em;
    width: 100%;
    @media ${devices.laptop} {
        gap: 1em;
    }
`
const SearchInputContainer = styled.div`
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: .7em;
    @media ${devices.tablet} {
        width: 100%;
    }
    @media (max-width: 552px) {
        gap: 1em;
    }
    `
const SearchSelectWrapper = styled.div`
    align-self: stretch;
    display: inline-block;
    padding-right: 2em;
    background-color: var(--bg);
    @media (max-width: 552px) {
        width: 100%;
    }
    `
const SearchSelect = styled.select`
    position: relative;
    outline: 0;
    border: 0;
    height: 100%;
    padding: 1em 0 1em 2em;
    color: var(--color-gray);
`
const SearchInput = styled.input`
    align-self: stretch;
    flex: 1;
    min-width: 200px;
    height: 100%;
    outline: 0;
    border: 0;
    border-left: 1px solid var(--border);
    padding: 1em 2em;
    @media (max-width: 552px) {
        width: 100%;
        border-left: 0;
    }
`
const Option = styled.option`
    display: inline-block;
    padding: 1em 2em;
    height: 100px;
    color: var(--color-gray);
    text-transform: uppercase;
`
const SearchButton = styled(PrimaryButton)`
    padding: 1em 1.5em !important;
`
export default SearchInputField