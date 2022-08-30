import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const Menu = () => {
    return (
        <Header>
        <MenuList>
            <li><MenuItem to="/">Home</MenuItem></li>
            <li><MenuItem to="/movies">Movies</MenuItem></li>
            </MenuList>
        </Header>
    );
}
export default Menu;

const Header = styled.header`
width: 100%;
box-sizing: border-box;
    border: none;
    margin-bottom: 30px;
    padding: 10px 10px;
    background-color: #51bbe1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
   
`

const MenuList = styled.ul`
    list-style: none;
    display: flex;
    
`
const MenuItem = styled(NavLink)`
    text-decoration: none;
    margin-right: 20px;
    font-size: 25px;
    color: black;
    &.active{
        color: pink ;
        font-weight: bold;
    }
`