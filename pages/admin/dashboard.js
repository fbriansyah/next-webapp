import Layout from '../../components/Layouts/AdminLayout'
import Typography from '@material-ui/core/Typography';

export default function Dashboard() {
  const pageTitle = "Dahsboard"
  return (
    <Layout title={pageTitle}>
      <Typography component="h1" variant="h5">
        {pageTitle}
      </Typography>
    </Layout>
  )
}