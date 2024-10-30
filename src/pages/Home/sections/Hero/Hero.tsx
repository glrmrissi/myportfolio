import { Box, Container, Grid, styled, Typography } from "@mui/material"
import DownloadingIcon from '@mui/icons-material/Downloading';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "../../../../assets/images/avatar.png"
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: theme.palette.primary.main
  }))
  const StyledImg = styled("img")(() => ({
    width: "90%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">Lindomar</Typography>
              <Typography color="primary.contrastText" variant="h3" textAlign="center">I'm a Software engineer</Typography>
              <Grid container display="flex" alignItems="center" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
                  <StyledButton>
                    <DownloadingIcon />
                    <Typography>
                      Download my CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
                  <StyledButton>
                    <MailIcon />
                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero