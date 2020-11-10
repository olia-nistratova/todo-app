import React from 'react';
import { CssBaseline, Grid, Typography, withStyles } from '@material-ui/core';

import { TodosProvider } from '../../context';
import CreateTodoForm from '../CreateTodoForm';
import TodoList from '../TodoList';

// I've decided not to create separate file for just 2 styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(8),
  }
})

const App = ({ classes }) => (
  <main className={classes.root}>
    <CssBaseline />
    <Grid container direction='column' alignItems='center'>
      <Typography variant='h2' color='primary' className={classes.title}>
        TODO List
      </Typography>

      <TodosProvider>
        <CreateTodoForm />
        <TodoList />
      </TodosProvider>
    </Grid>
  </main>
);

export default withStyles(styles)(App);
