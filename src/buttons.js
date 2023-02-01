function Button({ text, classN, doThis }) {
  return (
    <button className={classN} onClick={doThis}>
      {text}
    </button>
  );
}

export default Button;
