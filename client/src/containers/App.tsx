/* eslint-disable */
import * as React from 'react';

import { fetchUser } from '../api';

interface AppProps { name: string }
interface AppState { name: string }

export class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { name: props.name };
  }

  componentDidMount() {
    setTimeout(() => {
      fetchUser().then(res => this.setState({
        ...res.data,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        Hello {this.state.name}
      </div>
    );
  }
}
