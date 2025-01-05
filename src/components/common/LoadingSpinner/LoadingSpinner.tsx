import style from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <>
      <div className={`${style.Loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export { LoadingSpinner };
