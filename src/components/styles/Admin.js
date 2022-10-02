import styled from "styled-components";



export const AdminS = styled.div`


`;
export const DashboardS = styled.div`
width: calc(100% - 250px);
margin-left: auto;
height: 100vh;
box-sizing: border-box;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.header-dashboard {
    width: 100%;
    display: flex;
    height: 100px;
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    padding: 0 15px;
    align-items: center;
}
.header-data {
        width: 20%;
}
.header-butons {
    width: 80%;
    display: flex;
    justify-content: end;
    gap: 15px;
}
.dashboard-cont {
  width: 100%;
  display: flex;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  box-sizing: border-box;
  div:first-child {
    width: 100%;
  }
}
`;

export const HeaderS = styled.div`
    width: 250px;
    position: fixed;
    height: 100vh;
    color: #9d9d9d;
    background: #e8e8e8;
    z-index: 999;
    .menu {
        
        height: 100%;
        background: #00aeef;
        ul{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
            width: 100%;
            justify-content: center;
        }
        li {
            display: flex;
            text-align: left;
            padding: 15px 25px;
            transition: all 0.5s;
            position: relative;
            &:before{
                    content: '';
                    transition: all 0.5s;
                    position: absolute;
                    width: 0%;
                    height: 1px;
                    display: flex;
                    background: white;
                    bottom: 10px;
                    left: 0%;
                    transform: translateX(-50%);
                    
                }
            &:hover{
                transition: all 0.5s;
                background: #125c78;
                &:before{
                    content: '';
                    transition: all 0.5s;
                    position: absolute;
                    width: 80%;
                    height: 1px;
                    display: flex;
                    background: white;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    
                }
            }
            
        }   
        .active{
            transition: all 0.5s;
            background: #125c78;
        }
        a {
            color: #fff;
            text-decoration: none;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    .logo{
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        background: #d2d8df;
    }
    .logo-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
        height: 100%;
        }
    }
    

`;
export const HomeS = styled.div`
width: 100%;
display: flex;


`;
export const RepairsS = styled.div`

`;

export const AddButton = styled.button`
  background: #125c78;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
  gap: 10px;
  display: flex;
  &:hover {
    background: #fff;
    color: #125c78;
    border: 1px solid #125c78;
    transition: all 0.3s;
  }
`;

export const TableS = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column ;
    &:first-child {
     width: 100%;
    }
`;
export const TextField = styled.input`
height: 32px;
width: 200px;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgb(229, 229, 229);
padding: 0px 32px 0px 16px;
outline:none;

`;

export const SearchCont = styled.div`
display: flex;
justify-content: end;
position: relative;
button{
    border-left: 0;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    background: #125c78;
    color: #fff;
    border-left: 0;
    width: 40px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
}
`
export const AddS = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 9;
display: flex;
justify-content: center;
align-items: center;
background: #0000004d;
cursor: pointer;


.add-data-container {
  width: 50%;
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: default;
}
.add-data-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: revert;
  justify-content: start;
  text-align: left;
}
.close-modal{
   
}
.add-data {
    display: flex;
    justify-content: center;
    position: relative;
    h1 {
        position: relative;
        &:before{
            content: '';
            position: absolute;
            bottom: -10px;
            height: 3px;
            width: 50px;
            background: #125c78;
            display: flex;
        }
    }
}
.close-modal-container {
  position: absolute;
  right: 10px;
  font-size: 1.3em;
  cursor: pointer;
  i{
    
    color: #125c78;
  }
}
.data-form-input {
  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 33px;
  margin: 10px 0;
    input {
    height: 50px;
    margin-top: 6px;
    box-sizing: border-box;
    padding: 10px;
    outline: none;
    transition: all 0.5s;
    border:1px solid #fff;
    border-bottom: 1px solid #125c78;
    border-right:0;
    border-top:0;
   // border-t: 1px solid #fff;
    &:focus{
        transition: all 0.5s;
        border: 1px solid #125c78;
        border-right:0;
        border-top:0;
    }
    }
    &:last-child {
    width: 100%;
    margin-top: 25px;
    }
    button{
        text-align: center;
        justify-content: center;
    }
}
`;