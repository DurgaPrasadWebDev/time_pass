import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: orange;
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const LogoWrapper = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    &:hover {
       top: 1px;
    }
    transition: 0.5s; 
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-right: 1rem;
`

export const LogoImage = styled.img`
    width: 10rem;
    @media (max-width: 32em) {
        width: 5rem;
    }
    
`

export const CustomLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0 9px 0 9px;
    transition: all 0.2s; 
    &:hover {
        color: red;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 0 6px 0 6px;
    }
`;