import 'storybook-chromatic';
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import './styles.scss';

const req = requireContext('../src', true, /.stories.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
