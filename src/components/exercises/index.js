import React from 'react'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default function index({ exercises }) {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return (
              <React.Fragment>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) => {
                    return (
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    )
                  })}
                </List>
              </React.Fragment>
            )
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5">Welcome!</Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
