import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Code By '}
      <Link color="inherit" href="https://efner.id/">
        Febrian
      </Link>
      {'. Build With '}
      <Link color="inherit" href="https://material-ui.com/">
        Material UI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}