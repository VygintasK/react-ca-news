import './Container.css';

const Container = (props) => {
  return (
    <div className={props.title}>{props.children}</div>
  );
}

export default Container;