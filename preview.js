
class Preview extends React.Component {
  cosnt hi = <h1>Hello World</h1>
  render() {
    return {hi};
  }
}

const domContainer = document.querySelector('#preview');
ReactDOM.render(Preview, domContainer);
