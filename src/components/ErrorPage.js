import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="page-100 flex items-center">
        <section className="ml-10 -mt-4">
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </section>
      </div>
    </>
  );
};
export default ErrorPage;
