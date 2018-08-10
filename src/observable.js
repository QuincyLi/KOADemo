import React from 'react';
import ObservableComponent from 'rxjs-react-component';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
 
export default class MyComponent extends ObservableComponent {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  onClick$(observable) {
    const increase$ = observable.map(() => ({count: this.state.count + 1}));
    const delayedIncrease$ = observable.delay(200).map(() => ({count: this.state.count + 1}));
    return Observable.merge(
      increase$,
      delayedIncrease$
    );
  }
  render() {
    return (
      <div>
        <h1>Hello world ({this.state.count})</h1>
        <button onClick={this.onClick$}>Increase</button>
      </div>
    );
  }
}