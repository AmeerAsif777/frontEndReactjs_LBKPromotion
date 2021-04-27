import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


export const MyFeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${props => props.margin || '0'};
  user-select: none;
`;

export const BackModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  top: 0;
  left: 0;
`;
export const SearchBarWithListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '75%'};
  background: #fafafa;
  z-index: 111;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 10% auto;
`;

export const CloseButton = styled.img`
  // align-self: flex-end; Not work in firefox
  margin-left: 96%;
  cursor: pointer;
`;