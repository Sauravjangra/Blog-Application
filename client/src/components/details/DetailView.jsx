import { useEffect, useState, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break: break-word;
`;

const DeleteIcon = styled(Delete)`
    position: absolute;
    top: -50%;
    right: 5px; /* Adjust this value for the spacing from the right edge */
    transform: translateY(-50%);
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const EditIcon = styled(Edit)`
    position: absolute;
    top: -50%;
    right: 50px; /* Adjust this value for the spacing from the right edge */
    transform: translateY(-50%);
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Description = styled(Typography)`
    text-align: left; /* Align description to the left */
`;


const InfoContainer = styled(Box)`
    position: relative; /* Make InfoContainer a positioned container */
    margin-bottom: 20px; /* Add spacing below the info container */
`;


const DetailView = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const { account } = useContext(DataContext);

    const navigate = useNavigate();


    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                }
            } catch (error) {
                console.error('An error occurred while fetching post details:', error);
            }
        };
        fetchData();
    }, [id]);

    const deleteBlog = async () => {
        try {
            const response = await API.deletePost(post._id);
            if (response.isSuccess) {
                navigate('/');
            } else {
                console.error('Error deleting post:', response.msg);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    
    
    return (
        <Container>
            <Image src={url} alt="blog" />
            <InfoContainer>
                <Heading>{post.title}</Heading>
                {account.username === post.username && (
                    <>
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />

                    </>
                )}
            </InfoContainer>

            <Author>
                <Typography>Author: <Box component="span" style={{ fontWeight: 600}}>{post.username}</Box></Typography>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>
            <Description>{post.description}</Description>
            <Comments post={post} />
        </Container>
    );
};

export default DetailView;
