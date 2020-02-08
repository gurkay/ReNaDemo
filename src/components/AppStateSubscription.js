const React = require('react');

const {AppState, Text, View} = require('react-native');

class AppStateSubscription extends React.Component {
  state = {
    appState: AppState.currentState,
    previousAppStates: [],
    memoryWarnings: 0,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
  }

  _handleMemoryWarning = () => {
    this.setState({memoryWarnings: this.state.memoryWarnings + 1});
  };

  _handleAppStateChange = appState => {
    const previousAppStates = this.state.previousAppStates.slice();
    previousAppStates.push(this.state.appState);
    this.setState({
      appState,
      previousAppStates,
    });
  };

  render() {
    if (this.props.showMemoryWarnings) {
      return (
        <View>
          <Text>{this.state.memoryWarnings}</Text>
        </View>
      );
    }
    if (this.props.showCurrentOnly) {
      return (
        <View>
          <Text>{this.state.appState}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    );
  }
}

exports.title = 'AppState';
exports.description = 'app background status';
export default AppStateSubscription = [
  {
    title: 'AppState.currentState',
    description: 'Can be null on app initialization',

  },
  {
    title: 'Subscribed AppState:',
    description:
      'This changes according to the current state, so you can only ever see it rendered as "active"',

  },
  {
    title: 'Previous states:',

  },
  {
    platform: 'ios',
    title: 'Memory Warnings',
    description:
      'In the IOS simulator, hit Shift+Command+M to simulate a memory warning.',

  },
];

