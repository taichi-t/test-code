class SampleComponent extends React.Component {
  static get defaultProps() {
    return {
      sampleProp: ""
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      sampleState: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      this.state.sampleState === nextState.sampleState &&
      this.props.sampleProp === this.props.SampleProp
    );
  }

  render() {}
}
