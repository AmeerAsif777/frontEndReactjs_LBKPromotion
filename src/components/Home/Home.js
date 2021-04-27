import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {BackModal, SearchBarWithListContainer, CloseButton} from './styles';
const Images = require.context('../../images', true);

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [enableForm, setEnableForm] = useState(false);
  const dispatch = useDispatch();
  console.log('Wow Coming...');
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const close = () => {
    setEnableForm(!enableForm);
  };

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}style={{flexDirection:'column'}}>
        <Grid item xs={12} sm={4}>
          <Button size="small" color="secondary" onClick={() => setEnableForm(true)}> What's on your mind? </Button>
            {enableForm && <BackModal>
              <SearchBarWithListContainer>
              <CloseButton src={Images('./clear_icon.svg')} onClick={close} />
              <Form currentId={currentId} setCurrentId={setCurrentId} close={close}/>
              </SearchBarWithListContainer>
              </BackModal>}
          </Grid>
        <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
