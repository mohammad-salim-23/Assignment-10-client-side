
import './Pages.css'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <img src="https://img.freepik.com/premium-vector/404-error-found-page-concept_8251-276.jpg?w=740" alt="404 Error" className="not-found-image" />
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">Oops! The page you are looking for might have been removed or is temporarily unavailable.</p>
     <Link to="/"><button className='btn mt-3 btn-success'>Go to Home</button></Link>
    </div>
  );
}

export default ErrorPage;
