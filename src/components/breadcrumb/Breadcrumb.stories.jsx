import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from '.';

let breadCrumb = (separator) => {
    return <div>
            <Breadcrumb separator={separator}>
                <Breadcrumb.Item><a href="http://localhost:6006/">Homepage</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="http://localhost:6006/">
                        Previous Page
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="http://localhost:6006/">
                        Page Title
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
}

storiesOf('Navegação|Breadcrumb', module)
    .add('default', () => {
        return breadCrumb("/")
    })
    .add('icon', () => {
        return (
          <div>
            <Breadcrumb separator="/">
              <Breadcrumb.Item>
                <a href="http://localhost:6006/">
                  <span className="cd-icon-s-home" />
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="http://localhost:6006/">
                            Previous Page
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="http://localhost:6006/">
                            Page Title
                </a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        )
    })
    .add('custom separator', () => {
        return breadCrumb(">")
    });



