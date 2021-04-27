/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core/';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles';
import {
  ChatHeader,
  Chat,
  Name,
  DateTime,
  Messages,
  ChatBoxWrapper,
  Dot,
  Message,
} from './styles';
import moment from 'moment';
import {updateMessageandLikes, deletePostComment } from '../../../actions/posts';

const CommentBoxComponent = ({ comments, postId }) => {
  const [editMode, setEditMode] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const [updatedMessage, setUpdatedMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const Likes = ({comment}) => {
    console.log(comment);
    if (comment.likes && comment.likes.length > 0) {
      return comment.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}><FavoriteIcon fontSize="small" /><span style={{fontSize:'10px',  whiteSpace: 'nowrap'}}>{comment.likes.length > 2 ? `You and ${comment.likes.length - 1} others` : `${comment.likes.length} like${comment.likes.length > 1 ? 's' : ''}` }</span></div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}><FavoriteBorderIcon fontSize="small" /><span style={{fontSize:'10px', whiteSpace: 'nowrap'
        }}>{comment.likes.length} {comment.likes.length === 1 ? 'Like' : 'Likes'}</span></div>
        );
    }

    return <><FavoriteBorderIcon fontSize="small" /></>;
  };
  return (
        <ChatBoxWrapper>
          {comments.length ?
            comments.map((comment, index) => (
              <div key={`Comment${index}`} style={{display:'flex'}}>
              <Chat>
                <ChatHeader>
                  <Name
                  >
                    {comment.userDetails.name}
                    <Dot
                    />
                  </Name>
                  <DateTime>{moment(comment.createdAt).fromNow()}</DateTime>
                </ChatHeader>
               {editMode === `Comment${index}` ? <div style={{display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'}} ><input key={`${index + 1}`} type='text' style={{ flexBasis:'70%'}}value={updatedMessage} onChange={e => setUpdatedMessage(e.target.value)}/>
               <Button
        variant="contained"
        color="primary"
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
        onClick={() => {dispatch(updateMessageandLikes(postId, comment._id, updatedMessage, '')); setEditMode('');}}
      >
        Done
      </Button></div>:<Messages>{comment.message}</Messages>}
              </Chat>
              <div style={{display: 'flex',
    flexDirection: 'row'}}>
         <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(updateMessageandLikes(postId, comment._id, '', comment.userDetails._id))}>
         <Likes comment={comment}/>
         </Button>
         {(user?.result?.googleId === comment?.creator || user?.result?._id === comment?.creator) &&
         <Button size="small" color="primary" disabled={!user?.result} onClick={() => {setEditMode(`Comment${index}`); setUpdatedMessage(comment.message);}}>
         <EditIcon fontSize="small" />
         </Button>}
         <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(deletePostComment(postId, comment._id))}>
         {(user?.result?.googleId === comment?.creator || user?.result?._id === comment?.creator) &&
         <DeleteIcon fontSize="small" />
}
         </Button>
              </div>
              </div>
            )) : <Message>You have no comments</Message>
          }
        </ChatBoxWrapper>
        );
};

export default CommentBoxComponent;
