/* @flow */

import React from 'react';
import { Component, PropTypes, CollapseTransition } from '../../../libs';

export default class CollapseItem extends Component {
  render(): React.DOM {
    const { title, isActive, onClick, name, arrowPosition } = this.props;

    return (
      <div
        className={this.classNames({
          'cd-collapse-item': true,
          'is-active': isActive
        })}
      >
        <div className="cd-collapse-item__header" onClick={() => onClick(name)}>
            {
                arrowPosition === 'left' &&
                <div>
                    <i className="cd-collapse-item__header__arrow--left cd-icon-arrow-down"/>
                    {title}
                </div>
            }
            {
                arrowPosition === 'right' && <span>{title}</span>
            }
            {
                arrowPosition === 'right' && <i className="cd-collapse-item__header__arrow--right cd-icon-arrow-down"/>
            }
        </div>
        <CollapseTransition isShow={isActive}>
          <div className="cd-collapse-item__wrap">
            <div className="cd-collapse-item__content">
              {this.props.children}
            </div>
          </div>
        </CollapseTransition>
      </div>
    );
  }
}

CollapseItem.propTypes = {
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    title: PropTypes.node,
    name: PropTypes.string,
    arrowPosition: PropTypes.string
};

CollapseItem.defaultProps = {
    arrowPosition: 'right'
};