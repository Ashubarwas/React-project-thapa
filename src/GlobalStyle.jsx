import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin : 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;

}
html{
    font-size: 62.5%;
    overflow-x: hodden;
}

h1{
      color:${({theme})=>theme.colors.heading}
      font-size: 6rem;
      font-weight:900;
}

h2{
    color:${({theme})=>theme.colors.heading}
      font-size: 4.4rem;
      font-weight:300;
      white-space: normal;
      text-align: center;
}
h3{
    font-size:1.8rem;
    font-weight:400;
}

p{
    color:${({theme})=>theme.colors.text};
    opacity: .7;
    font-size: 15px;
    font-weight:400;
    line-height:1.8rem;
    margin-top:1rem;
    
}

a{
    text-decoration: none;
}

// ::-webkit-scrollbar{
//     width:11.5re.;
// }

// ::-webkit-scrollbar-track{
//     background-color: rgb(24 24 29);
// }

// ::-webkit-scrollbar-thumb{
//     background-color: #fff;
//     border: 5px solid transparent;
//     border-radius: 9px;
//     background-clip: content-box;
// }

li{
    list-style: none;
}

.container{
    max-width: 100rem;
    mardin:0 auto;
    margin-left:200px
}
.grid{
    display: grid;
    gap: 9rem
    display: flex;
}

.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}


`;