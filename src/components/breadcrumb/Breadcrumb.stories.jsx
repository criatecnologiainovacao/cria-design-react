import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from '../breadcrumb';

storiesOf('Breadcrumb', module)
    .add('default', () => {
        return (
            <div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item><a href="/">Homepage</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>            
        )
    })
    .add('icon', () => {
        return (
            <div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item><a href="/"><span class="cd-icon-s-home"> </span></a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    })
    .add('custom separator', () => {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item><a href="/">Homepage</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    })
   


