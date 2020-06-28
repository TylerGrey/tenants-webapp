import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SignUp from '../SignUp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TENANTS
          </Typography>
          <Button color="inherit" onClick={handleOpenSignUp}>
            회원 가입
          </Button>
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
      <Modal open={openSignUp} onClose={handleCloseSignUp}>
        <>
          <button type="button" onClick={handleCloseSignUp}>
            닫기
          </button>
          <SignUp />
        </>
      </Modal>
    </div>
  );
}
