import { configure } from '@storybook/react';
import 'storybook-chromatic';

import './styles.scss';

const req = require.context('../src', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
