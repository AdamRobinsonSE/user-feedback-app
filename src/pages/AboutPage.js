import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div>
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback fro a product or service</p>
        <p>Version 1.0.0</p>
      </div>

      <p>
        <Link to='/'>
          Back to Home
        </Link>
      </p>
    </Card>
  )
}

export default AboutPage