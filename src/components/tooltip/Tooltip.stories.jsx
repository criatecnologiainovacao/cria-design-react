import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../button';

storiesOf('Tooltip', module)
    .add('default', () => {
        return (
          <div className="box">
            <div className="top">
              <Tooltip className="item" effect="dark" content="Top Left prompts info" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Top Center prompts info" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Top Right prompts info" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </div>
            <div className="left">
              <Tooltip className="item" effect="dark" content="Left Top prompts info" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Left Center prompts info" placement="left">
                <Button>left</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </div>

            <div className="right">
              <Tooltip className="item" effect="dark" content="Right Top prompts info" placement="right-start">
                <Button>right-start</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Right Center prompts info" placement="right">
                <Button>right</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
                <Button>right-end</Button>
              </Tooltip>
            </div>
            <div className="bottom">
              <Tooltip className="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip className="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </div>
          </div>
        )
    })
    .add('theme', () => {
        return (
          <div className="temas">
            <Tooltip content="Top center" placement="top">
              <Button>Dark</Button>
            </Tooltip>
            <Tooltip content="Bottom center" placement="bottom" effect="light">
              <Button>Light</Button>
            </Tooltip>
          </div>
        )
    })
    .add('more content', () => {
        return (
          <div className="temas">
            <Tooltip
              placement="top"
              content={(
                <div>
multiple lines
                  <br />
second line
                </div>
                    )}>
              <Button>Top center</Button>
            </Tooltip>
          </div>
        )
    });