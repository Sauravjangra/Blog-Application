import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await API.getAllPosts({ category: category || '' });
                if (response && response.isSuccess) {
                    setPosts(response.data);
                } else {
                    console.error('Failed to fetch posts:', response.error);
                }
            } catch (error) {
                console.error('An error occurred while fetching posts:', error);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {posts.length ? (
                <Grid container spacing={2}>
                    {posts.map(post => (
                        <Grid key={post._id} item lg={3} sm={4} xs={12}>
                            <Link to={`/details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Post post={post} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                    No data is available for the selected category
                </Box>
            )}
        </>
    );
};

export default Posts;
 