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
      <Grid item xs={2}>
        {card}
      </Grid>
      <Grid item xs={2}>
        {card}
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid(props) {
  const classes = useStyles();

  const { card } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid container item justify="space-around">
          <FormRow card={card} />
        </Grid>
      </Grid>
    </div>
  );
}
