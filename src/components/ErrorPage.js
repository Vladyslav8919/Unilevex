import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="section h-full"></div>
      <div className="mb-32 ml-10">
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </>
  );
};
export default ErrorPage;
