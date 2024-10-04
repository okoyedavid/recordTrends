function Form({ handleSubmit, children, className = "" }) {
  return (
    <form className={className} action="submit" onSubmit={handleSubmit}>
      <div>{children}</div>
    </form>
  );
}

export default Form;
