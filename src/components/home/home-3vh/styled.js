import styled from '@emotion/styled';
import thirdBg from '../../../assets/img/3vh-merge.png';

//title part css
export const ThirdBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${thirdBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
`

export const Navigation = styled.div`
  width: 100%;
  height: 65px;
  background: #1D3557;
  position: absolute;
`


export const Title = styled.div`
  width: 50%;
  height:87%;
  background: #9B9ECF;
  opacity: 50%;
  position: absolute;
  border-radius: 20px;
  margin: 10vh 0 0 10vw;
  padding: 20px 10px 20px 10px;
  h1 {
    color: white;
    font-size: 1.8vw;
    text-align: center;
    margin: 0;
  }
  hr {
    width: 10.5vw;
    border: 2px solid #FFF579;
    border-radius: 5px;
    margin: 0 auto;
  }
`

export const ActivityWrapper = styled.div`
  width: 50%;
  top: 18%;
  left: 10%;
  display: flex;
  flex-direction: column;
  position: absolute;
`