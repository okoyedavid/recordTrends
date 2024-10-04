function Input({ htmlfor, labelName, value, setValue, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={htmlfor}>{labelName}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        id={htmlfor}
        {...rest}
      />
    </div>
  );
}

export default Input;
