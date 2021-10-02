import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({primary}) => (primary ?  '#c6182f' : '#c6182f')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#38218F' : '#664aa6')};
  }
  
`
export const ButtonG = styled(Link)`
  border-radius: 10px;
  background: ${({primary}) => (primary ?  '#808080' : '#808080')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#808080' : '#808080')};
  }
  
`
export const Button2 = styled(Link)`
position: absolute;
  top: 90%;
  border-radius: 0 0 10px 10px;
  width: 100%;
  ${'' /* background: ${({primary}) => (primary ?  '#ff6c00' : '#ff6c00')}; */}
  background: ${({primary}) => (primary ?  '#808080' : '#808080')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    ${'' /* background: ${({primary}) => (primary ?  '#38218F' : '#664aa6')}; */}
    background: ${({primary}) => (primary ?  '#808080' : '#808080')};

  }

  
`
export const Button3 = styled(Link)`
position: absolute;
  top: 90%;
  border-radius: 0 0 10px 10px;
  width: 100%;
  background: ${({primary}) => (primary ?  '#ff6c00' : '#ff6c00')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#38218F' : '#fff')};

  }
  `
  export const Button4 = styled(Link)`
  position: absolute;
  top: 9%;
  left: 72%;
  border-radius: 10px;
  background: ${({primary}) => (primary ?  '#ff6c00' : '#ff6c00')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color:black;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : '#fff')};

  }
  @media screen and (max-width: 786px) {
    top: 97%;
  left: 40%;
  }
  `
