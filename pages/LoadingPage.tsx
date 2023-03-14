import { FC } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, CircularProgress } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  loadingPage: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000000',
  },
  circle: {
    color: 'white',
  },
}))

const LoadingPage = () => {
  const styles = useStyles()
  return (
    <div className={styles.loadingPage}>
      <CircularProgress className={styles.circle} />
    </div>
  )
}

export default LoadingPage
