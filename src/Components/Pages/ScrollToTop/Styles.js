import styled from 'styled-components';

export const Button = styled.div`
position: fixed;
width: 100%;
left: 95%;
top: 85%;
bottom: 40px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: rgb(29, 78, 216);
&:hover{
    color: rgb(30, 64, 175);
}
@media only screen and (max-width: 660px) {
    left: 80%;
    top: 80%;
}
`
