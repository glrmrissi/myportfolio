import { styled } from "@mui/material"

const Hero = () =>{

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    return (
      <>
      <StyledHero>
        Hero
      </StyledHero>
        Hero
      </>
    )
  }
  
  export default Hero