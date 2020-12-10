import styled from "styled-components";


export const CardSubtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: none;
  height: 20px;
  text-align: left;
  transition: 0.5s all;
`
export const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: left;
  background-color: rgba(75, 81, 73, 0.93);
  text-decoration: none;
  color: antiquewhite;
  transition: 0.3s all;
`

export const CardContainer = styled.div.attrs((props: any) => ({
    subtitle: props.subtitle
}))`
  width: 200px;
  border: 2px solid #282c34;
  height: 200px;
  margin: 10px;
  position: relative;

  &:hover ${CardTitle} {
    bottom: ${(props: any) => props.subtitle ? '20px' : '0'}
  }
}

&:hover ${CardSubtitle} {
  display: ${(props: any) => props.subtitle ? 'block' : 'none'};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(75, 81, 73, 0.93);
  text-decoration: none;
  color: antiquewhite;
}
`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`


