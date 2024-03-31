import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    text-align: center; /* Center align text */
`;

const Text = styled(Typography)`
    color: black; /* Set text color to black */
`;

const LinkBox = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 8px; /* Adjust margin as needed */
`;

const Logo = styled(Box)`
    margin-right: 8px; /* Adjust margin as needed */
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5" component="p">
                    <LinkBox>
                        <Typography variant="body1" style={{ marginRight: '8px', textAlign: 'left' }}>Reach out to me on</Typography>
                        <Logo>
                            <Instagram />
                        </Logo>
                        <Link href="https://www.instagram.com/sauravjangra27/" color="inherit" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </Link>
                    </LinkBox>
                    <br />
                    <LinkBox style={{ textAlign: 'left' }}>
                        <Typography variant="body1" style={{ marginRight: '8px' }}>or send me an Email</Typography>
                        <Logo>
                            <Email />
                        </Logo>
                        <Link href="mailto:sauravjangra27@gmail.com?Subject=Hello" color="inherit">
                            Email
                        </Link>
                    </LinkBox>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
