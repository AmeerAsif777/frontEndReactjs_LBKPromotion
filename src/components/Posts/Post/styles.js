import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const MyFeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${props => props.margin || '0'};
  user-select: none;
`;

export const ChatHeader = styled(MyFeedbackWrapper)`
  flex-direction: row;
  justify-content: space-between;
`;
export const Chat = styled(MyFeedbackWrapper)`
  // min-height: 70px;
  width: 80%;
  margin: 0 8px;
  // justify-content: space-between;
  background: #ffffff;
  border-radius: 27px;
  margin-top: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const Name = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.color || '#000000'};
  text-transform: capitalize;
  margin-bottom: 10px;
`;
export const DateTime = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.3);
  white-space: nowrap;
`;
export const Messages = styled(MyFeedbackWrapper)`
  color: #000000;
  font-weight: 300;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  user-select: all;
`;

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 54vh;
  overflow: auto;
  margin-top: 10px;
  padding-top: 0px;
  background: #fafafa;
  button{
    min-width: 42px;
  }
  // flex: 5;
  &::-webkit-scrollbar {
    width: 6px;
    // opacity: 0.95;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #e9e9e9;
    border-radius: 5px;
    height: 30px;
  }

  &::-webkit-scrollbar-thumb:hover {
  }
`;
export const Message = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin: 0 auto;
  color: #8a8a8a;
  margin-top: 20px;
  padding-left: 30px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 16px;
  background: #f32b88;
  margin-left: 12px;
  background: ${props => props.bgColor};
`;
