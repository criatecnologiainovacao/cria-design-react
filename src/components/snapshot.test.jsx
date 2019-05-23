const path = require('path');
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const beforeScreenshot = (page, { context: { kind, story }, url }) => {
    return new Promise(resolve => setTimeout(() => {
        resolve();
    }, 600));
};

const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
        failureThreshold: 0.2,
        failureThresholdType: 'percent'
    };
};

initStoryshots(
    {
        suite: 'Image storyshots',
        test: imageSnapshot({
                                storybookUrl: `file:///${path.resolve(__dirname, '../../storybook-static')}`,
                                beforeScreenshot,
                                getMatchOptions
                            })
    }
);