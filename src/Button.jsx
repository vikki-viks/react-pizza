import classNames from "classnames";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames("button", { "button--outline": props.outline })}
    >
      {props.children}
    </button>
  );
}

export default Button;
