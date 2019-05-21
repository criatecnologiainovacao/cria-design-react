import 'storybook-chromatic';
import { configure } from '@storybook/react';

import './styles.scss';

const req = require.context('../src', true, /.stories.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
