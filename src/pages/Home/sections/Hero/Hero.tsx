import { Button, Container, Grid, styled, Typography } from "@mui/material"
import DownloadingIcon from '@mui/icons-material/Downloading';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "../../../../assets/images/avatar.png"
const Hero = () => {

  const StyledHero = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height: "100vh",
    backgroundColor: "black"
  }))
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography color="primary" variant="h2" textAlign="center">Lindomar</Typography>
                <Typography color="primary" variant="h3" textAlign="center">I'm a Software engineer</Typography>
                <Grid container display="flex" alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center"><Button ><DownloadingIcon /> Download my CV</Button></Grid>
                  <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center"><Button ><MailIcon />Contact me</Button></Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero