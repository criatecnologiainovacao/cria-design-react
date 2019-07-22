import React from 'react';
import ReactDOM from 'react-dom';

import MessageBox from './MessageBox';

function alert(message, title, props) {
  if (typeof title === 'object') {
    props = title;
  }

  props = Object.assign({ title, message }, props);

  return next(props);
}

function confirm(message, title, props) {
  if (typeof title === 'object') {
    props = title;
  }

  props = Object.assign({ title, message, showCancelButton: true }, props);

  return next(props);
}

function next(props) {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');

    document.body.appendChild(div);

    if (props.lockScroll !== false) {
      document.body.style.setProperty('overflow', 'hidden');
    }

    const component = React.createElement(MessageBox, Object.assign({}, props, {
      promise: { resolve, reject },
      willUnmount: () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        document.body.style.removeProperty('overflow');
      }
    }));

    ReactDOM.render(component, div);

    return component;
  });
}

export default {
  alert,
  confirm
}
