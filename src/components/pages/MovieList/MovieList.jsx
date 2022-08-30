import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

const MovieList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({ id, title }) =>
        <ListItems key={id}>
                <ListLinks state={{from: location}} to={`/movies/${id}`}>{title}</ListLinks>
        </ListItems>);

    return <ul>{elements}</ul>
}

export default MovieList;

MovieList.propTypes = {
     items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })).isRequired,
}

const ListItems = styled.li`
    margin-left: 30px;
`;
const ListLinks = styled(Link)`
text-decoration: none;
    font-size: 20px;
    color: black;
    cursor: pointer;
    :hover {
        color: #ff8397;
        text-decoration: underline; 
    }
`;