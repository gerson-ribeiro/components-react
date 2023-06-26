import styled from "styled-components";

export const ModalContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.3);
    `;
export const ModalBackground = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.3);
`

export const ModalWrapper = styled.div`
    margin:20px;
    border-radius:5px;
    padding:15px;
    background-color:#fff;
    box-shadow: 5px 5px 5px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`;
export const ModalTitle = styled.h3`
    margin-right:auto;
`;
export const ButtonClose = styled.button`
    border:none;
    background:none;
`;