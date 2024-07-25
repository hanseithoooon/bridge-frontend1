import styled from "styled-components";

export const registerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const registerIntroduce = styled.div`
    font-weight: 900;
    margin-bottom: 30px;
    font-size: x-large;
`;

export const registerInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 20px;
`;

export const registerInputId = styled.input`
    font-size: 14px;
    margin-bottom: 15px;
    border: none;
    border-bottom: solid 1px #ccc;
    width: 270px;
    &:focus {
        outline: none;
    }
`;

export const registerInputPw = styled.input`
    font-size: 14px;
    margin-bottom: 20px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;

export const registerInputName = styled.input`
    font-size: 14px;
    margin-bottom: 15px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;

export const registerInputBirth = styled.input`
    font-size: 14px;
    margin-bottom: 15px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;

export const registerInputEmail = styled.input`
    font-size: 14px;
    margin-bottom: 15px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;

export const registerInputPhone = styled.input`
    font-size: 14px;
    margin-bottom: 10px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;

export const registerInputSubmit = styled.button`
    width: 100%;
    height: 40px;
    background-color: #ccc;
    font-size: 20px;
    font-weight: 900;
    border-radius: 10px;
    color: white;
    background-color: #0064ff;
`;

export const standardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;

export const standardText = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
`;

export const idCheckBox = styled.div`
    display: flex;
`;

export const idCheckBtn = styled.button`
    height: 30px;
    background-color: white;
    border-radius: 6px;
    font-weight: 700;
    font-size: 15px;
    border: solid 3px #ccc;
    width: 120px;
    height: 50px;
`;

export const CNBox = styled.input`
    font-size: 14px;
    margin-bottom: 10px;
    border: none;
    border-bottom: solid 1px #ccc;

    &:focus {
        outline: none;
    }
`;
