/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../../libs';

export default class Card extends Component {
    static defaultProps = {
        bodyStyle: {
            padding: '20px'
        },
        shadow: 'always'
    };

    render(): React.DOM {
        const { header, bodyStyle, shadow, title, children } = this.props;
        return (
            <div style={this.style()} className={this.className(
                'cd-card',
                `is-${shadow}-shadow`
            )}>
                {
                    header && <div className="cd-card__header">{header}</div>
                }
                {
                    title && !header && <div className="cd-card__title">{title}</div>
                }
                <div className="cd-card__body" style={bodyStyle}>
                    {children}
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    header: PropTypes.node,
    bodyStyle: PropTypes.object,
    shadow: PropTypes.string,
    title: PropTypes.string
};