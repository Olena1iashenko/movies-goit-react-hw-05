import { Link, useLocation } from "react-router-dom";

export const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      <div>MovieDetailsPage</div>
    </>
  );
};
export default MovieDetailsPage;
