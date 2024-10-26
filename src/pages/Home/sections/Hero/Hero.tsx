import { Grid, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black"
  }))
  const StyledImg = styled("img")(() => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        Hero
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={9}>
              <h1>cu</h1>
          </Grid>
        </Grid>
      </StyledHero>
      Hero
    </>
  )
}

export default Hero