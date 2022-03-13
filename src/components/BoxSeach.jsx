const BoxSeach = ({
  SearchSectionClass,
  InputClass,
  InputType,
  InputOnChange,
  InputValue,
  ButtonClass,
  ButtonOnClick,
  ButtonTextContent }) => {

  return (
    <section className={SearchSectionClass}>
      <input
        className={InputClass}
        type={InputType}
        onChange={InputOnChange}
        value={InputValue}
      />
      <button
        className={ButtonClass}
        onClick={ButtonOnClick}
      >{ButtonTextContent}</button>
    </section>
  );
};

export default BoxSeach;