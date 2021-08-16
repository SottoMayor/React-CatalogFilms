import styled from "styled-components"

export const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2%;
    background-color: ${props => props.theme.primary};

    & > figure > h2{
        color: ${props => props.theme.text};
        font-size: 30px;
    }

    & > nav > ul{
        display: flex;
    }

    & > nav > ul > li{
        margin-right: 25px;
        list-style-type: none;
    }

    & > nav > ul > li > a{
        text-decoration: none;
        color: ${props => props.theme.text};
        font-size: 18px;
    }

    & > nav > ul > li > a:hover,
    & > nav > ul > li > a:active
    {
        color: ${props => props.theme.background};
        border-bottom: 2px solid ${props => props.theme.background};
    }

`