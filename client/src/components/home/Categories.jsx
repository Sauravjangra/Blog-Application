import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from "../../constants/data";

const StyleTable = styled(Table)({
    border: '1px solid rgba(224, 224, 224, 1)',
});

const StyleButton = styled(Button)({
    margin: '20px',
    width: '85%',
    background: '#6496ED',
    color: '#fff',
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
});

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <StyledLink to={`/create?category=${category || ''}`}>
                <StyleButton variant="contained">Create Blog</StyleButton>
            </StyledLink>

            <StyleTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to='/'>All Categories</StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map(category => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <StyledLink to={`/?category=${category.type}`}>
                                    {category.type}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyleTable>
        </>
    );
};

export default Categories;
