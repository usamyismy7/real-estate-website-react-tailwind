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
color: rgb(46,139,87);
&:hover{
    color: rgb(47,125,46);
}
@media only screen and (max-width: 660px) {
    left: 80%;
    top: 80%;
}
`