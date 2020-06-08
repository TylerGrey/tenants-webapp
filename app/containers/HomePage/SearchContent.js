import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH } from './query';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    marginTop: '3vh',
    marginLeft: '3vh',
    zIndex: 1000,
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  list: {
    overflow: 'scroll',
    maxHeight: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 1,
  },
}));

export default function SearchContent() {
  const classes = useStyles();

  const [query, setQuery] = useState('');
  // const [searchResult, setSearchResult] = useState();

  const [search, { loading, data }] = useLazyQuery(SEARCH);

  let list = [];
  if (data && data.search) {
    list = [...data.search];
  }

  return (
    <div className={classes.root}>
      <Paper component="div">
        <div className={classes.search}>
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="주소 검색"
            value={query}
            onChange={event => setQuery(event.target.value)}
            onKeyUp={event =>
              event.keyCode === 13 && search({ variables: { query } })
            }
          />
        </div>
        <Divider className={classes.divider} orientation="horizontal" />
        {list && (
          <div className={classes.list}>
            {list.map(item => (
              <div>
                <p>{item.name}</p>
                <p>
                  ({item.zoneNo}) {item.roadAddress}
                </p>
                <p>{item.address}</p>
                <Divider className={classes.divider} orientation="horizontal" />
              </div>
            ))}
          </div>
        )}
      </Paper>
    </div>
  );
}
