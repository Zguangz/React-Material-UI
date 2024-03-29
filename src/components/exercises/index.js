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

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  }
}) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <React.Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => {
                    return (
                      <ListItem key={id} button>
                        <ListItemText
                          primary={title}
                          onClick={() => onSelect(id)}
                        />
                      </ListItem>
                    )
                  })}
                </List>
              </React.Fragment>
            ) : null
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
