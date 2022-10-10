import styled from "styled-components";



export const AdminS = styled.div`


`;
export const DashboardS = styled.div`
width: calc(100% - 66px);
margin-left: auto;
height: 100%;
box-sizing: border-box;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.errorTxt{
    color: #ef0000;
    font-size:0.8em;
    width:100% ;
    display:flex ;
    justify-content: center;
    align-items: center;
    padding:3px 0;
    position:absolute;
    bottom:-20px;
    left:0;
    font-weight:lighter ;

}
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
    text-transform:capitalize ;
    display: flex;
    gap:5px;
    span {
        color: #00aeef;
    }
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
  text-align:left ;
}
.loading-container{
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}
`;

export const HeaderS = styled.div`
   
    position: fixed;
    height: 100vh;
    color: #9d9d9d;
    background: #e8e8e8;
    z-index: 999;
    width: 66px;
    transition:all 0.5s;
    &:hover{
        
        width: 250px;
        transition:all 0.5s;
        img {
            width: 50px;
           // width: unset !important;
           // height: 100%;
        }
        .menu-txt {

                display: flex;
                transition: all 0.3s;
                opacity:1 ;
                z-index:1;
                
            
        }
        
        
    }
    .menu-txt {

        opacity:0 ;
        transition: all 0.5s;
        z-index:-1;
        margin-left:5px;
      
    }
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
            //padding: 15px 25px;
            transition: all 0.5s;
            position: relative;
            height: 50px;
            align-items: center;
            justify-content: center;
            
            &:before{
                    content: '';
                    transition: all 0.5s;
                    position: absolute;
                    width: 5px;
                    height: 0%;
                    display: flex;
                    background: white;
                    top: 0;
                    left: 0%;
                   /* transform: translateX(-50%);*/
                    
                }
            &:hover{
                transition: all 0.5s;
                background: #125c78;
                &:before{
                    content: '';
                    transition: all 0.5s;
                    position: absolute;
                    width: 5px;
                    height: 100%;
                    display: flex;
                    background: #fff;
                    bottom: 0;
                    left: 0;
                    /*width: 80%;
                    height: 1px;
                    display: flex;
                    background: white;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);*/
                    
                }
                
                   
                
            }
            
        }   
        .active{
            transition: all 0.5s;
            background: #125c78;
            i{
                background: #125c78;
                color: #26c3ff;
            }
            &:before{
                    content: '';
                    transition: all 0.5s;
                    position: absolute;
                    width: 5px;
                    height: 100%;
                    display: flex;
                    background: #fff;
                    bottom: 0;
                    left: 0;
                    z-index:999;
                    /*width: 80%;
                    height: 1px;
                    display: flex;
                    background: white;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);*/
                    
                }
        }
        a {
            color: #fff;
            text-decoration: none;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            text-transform: uppercase;
            justify-content: start;
            position: relative;
            margin-left: 60px;
            i{
                position: fixed;
                left: 25px;
     
                z-index: 9;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 66px;
                left: 0;
            }
        }
    }
    .logo{
        width: 100%;
        height: 100px;
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
        width: 50px;
        }
    }
    .footer {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
        color: #fff;
        background: #125c78;
        padding: 15px 0;
    }
    .footer-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        cursor: pointer;
        i {
            font-size: 1.3em;
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
  background: #00aeef;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: transparent;
    color: #00aeef;
    border: 1px solid #00aeef;
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
top:0 ;
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
  position: relative;
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
.delete-container {
  width: 50%;
  background: #00aeef;
  padding: 25px;
  color: #fff;
  box-sizing: border-box;
  border-bottom: 5px solid #fff;
  cursor: default;
}
.delete-container-row {
  display: flex;
  flex-wrap: wrap;
}
.delete-title {
  width: 80%;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
  font-size: 1.2em;
  margin-left: auto;
  margin-right: auto;
}
.delete-buttons {
  display: flex;
  justify-content: end;
  width: 80%;
  gap: 15px;
  margin: 0 auto;
}
.delete-select {
  width: 100px;
  height: 40px;
  background: #00aeef;
  color: #fff;
  border: 1px solid #fff;
}
.delete-input {
  width: 80%;
  margin: 0 auto;
    margin-bottom: 0px;
  justify-content: end;
  display: flex;
  margin-bottom: 15px;
  gap: 15px;
  align-items: center;
}
.comment-title {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 1.2em;
  margin-left: auto;
  margin-right: auto;
}
.comment-data {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  margin-top: -20px;
}
.comment-item {
  display: flex;
  align-items: center;
  gap: 8px ;
  margin: 15px 0;
}
.comment-items {
  hr{
    height: 0;
    border: 1px solid #fff;
  }
}
.item-desc {
  display: flex;
  flex-direction: column;
}
`;
export const LoginS = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #00aeef;
background: #125c78;
.errorTxt{

    font-size:0.8em;
    width:100% ;
    display:flex ;
    justify-content: center;
    align-items: center;
    padding:3px 0;
    position:absolute;
    bottom:-40px;
    left:0;
    font-weight:lighter ;

}
.login-container {
  background: #d2d8df;
  width: 40%;
  color: #00aeef;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  box-shadow: 12px 11px 0px 1px rgb(0, 174, 239);
  min-height: 453px;
  position: relative;
}
.login-header {
  position: absolute;
  top: 15px;
}
.login-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 64%;
  position: relative;
}
.login-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    border: 2px solid #00aeef;
    padding: 15px;
    outline: none;
    background:transparent;
    color:#125c78;
  }
}
.login-logo {
  height: 100px;
  img {
    height: 100%;
  }
}
`;
export const NofitfyS = styled.div`
position: fixed;
background: ${props => props.type == "" && "#00aeef"}${props => props.type == "success" && "#127822"};
box-sizing: border-box;
padding: 25px;
right: 10px;
top: 10px;
color: #fff;

`;
export const LoadingS = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 99999;
justify-content: center;
align-items: center;
display: flex;
background: #d2d8df;
transition: all 0.3s;
opacity: ${props => props.op};

`;
export const ActionBtn = styled.button`
  width: 25%;
  height: 50px;
  color: ${props => props.type == "edit" ? "#00aeef":"red"};
  background:transparent;
  border: 0;
  margin: 4px auto;
  font-size:1.5em;
  cursor: pointer;
`;
export const ActionBtnC = styled.div`
display:flex;
flex-wrap:wrap ;
`;

export const DeleteS = styled.div`

`;
export const ConfirmBtn = styled.button`
width: 100px;
height: 35px;
border: 0;
color: #fff;
background: #125c78;
cursor: pointer;
border: 1px solid #125c78;
transition: all 0.3s;
&:hover{
  transition: all 0.3s;
  color: #fff;
  border: 1px solid #125c78;
  background: transparent;
}
`;
export const DeclineBtn = styled.button`
width: 100px;
height: 35px;
border: 0;
color: #fff;
background: #ef0000;
cursor: pointer;
border: 1px solid #ef0000;
transition: all 0.3s;
&:hover{
  transition: all 0.3s;
  color: #fff;
  border: 1px solid #ef0000;
  background: transparent;
}
`;
export const NameField = styled.div`
height: 46px;
display: flex;
align-items: center;
background: #fff;
color: #00aeef;
padding-left: 5px;
text-transform: capitalize;
border: 1px solid rgb(224, 224, 224);
width: 92% !important;
cursor: pointer;
transition: all 0.3s;
border-radius: 5px;
text-align: center;
&:hover{
  background: #00aeef;
  color: #fff;
  transition: all 0.3s;
}
`;