import PageNotFound from "../../img/pagenotfound.png";
import s from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <img src={PageNotFound} alt="page not found" />
    </div>
  );
};

export default NotFoundPage;
