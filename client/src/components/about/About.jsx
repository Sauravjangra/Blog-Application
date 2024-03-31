import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// Styled components for Banner, Overlay, Wrapper, and Text
const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Overlay = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1; /* Ensure overlay is above the background image */
`;

const Wrapper = styled(Box)`
    padding: 20px;
    position: relative; /* Ensure content appears above the overlay */
    z-index: 2; /* Ensure content is above the overlay */
    color: white; /* Text color */
`;

const Text = styled(Typography)`
    color: inherit; /* Inherit text color from parent */
`;

const LinkBox = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 8px; /* Adjust margin as needed */
`;

const Logo = styled(Box)`
    margin-right: 8px; /* Adjust margin as needed */
`;

const About = () => {
    return (
        <Box>
            {/* Banner with centered text */}
            <Banner>
                <Overlay />
                <Typography variant="h3">Saurav</Typography>
            </Banner>
            <Wrapper>
                {/* Main content */}
                <Text variant="body1">
                    I'm a Software Engineer based in India. I've built websites, desktop applications, and corporate software.
                    If you are interested, you can view some of my favorite projects {' '}
                    <LinkBox>
                        <Logo>
                            <GitHub />
                        </Logo>
                        <Link href="https://github.com/Sauravjangra" color="inherit" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </LinkBox>.
                </Text>
                <Text variant="body1">
                    Need something built or simply want to chat? Reach out to me on {' '}
                    <LinkBox>
                        <Logo>
                            <Instagram />
                        </Logo>
                        <Link href="https://www.instagram.com/sauravjangra27/" color="inherit" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </Link>
                    </LinkBox> {' '}
                    or send me an Email {' '}
                    <LinkBox>
                        <Logo>
                            <Email />
                        </Logo>
                        <Link href="mailto:sauravjangra27@gmail.com?Subject=Hello" color="inherit">
                            Email
                        </Link>
                    </LinkBox>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default About;
