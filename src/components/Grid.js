import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "99.9vw",
    justifyContent: "center",
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FormRow(props) {
  const { card } = props;
  return (
    <React.Fragment>
      <Grid item xs={2}>
        {card}
      </Grid>
      {/* <Grid item xs={2}>
        {card}
      </Grid>
      <Grid item xs={2}>
        {card}
      </Grid> */}
    </React.Fragment>
  );
}

function getGridRow(results) {
  const totalElems = new Array(Math.ceil(results.length / 3)).fill(null);
  const ret = (
    <Grid container spacing={5}>
      {
        totalElems.map((elem, index) => (
          <Grid container item justify="space-around" key={index.toString()}>
            {
              results.slice(index * 3, index * 3 + 3).map((elem, childIndex) => (
                <FormRow card={elem} key={`${index}-${childIndex}`} />
              ))
            }
          </Grid>
        ))
      }
    </Grid >
  )
  return ret;
}

export default function NestedGrid(props) {
  const classes = useStyles();

  const { results } = props;
  return (
    <div className={classes.root}>
      {getGridRow(results)}
    </div >
  );
}
