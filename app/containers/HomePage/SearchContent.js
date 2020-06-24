import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH } from './query';

import { setMapCenter } from './actions';

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

export function SearchContent({ onClickSearchItem }) {
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
            placeholder="도로명 검색"
            value={query}
            onChange={event => setQuery(event.target.value)}
            onKeyUp={event =>
              event.keyCode === 13 && search({ variables: { query } })
            }
          />
        </div>
        {list && (
          <Divider className={classes.divider} orientation="horizontal" />
        )}
        {list && (
          <div className={classes.list}>
            {list.map(searchItem => (
              <div>
                <button
                  type="button"
                  onClick={() => onClickSearchItem(searchItem)}
                >
                  {searchItem.name}
                </button>
                <p>
                  ({searchItem.zoneNo}) {searchItem.roadAddress}
                </p>
                <p>{searchItem.address}</p>
                <Divider className={classes.divider} orientation="horizontal" />
              </div>
            ))}
          </div>
        )}
      </Paper>
    </div>
  );
}

SearchContent.propTypes = {
  onClickSearchItem: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickSearchItem: searchItem => dispatch(setMapCenter(searchItem)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchContent);
