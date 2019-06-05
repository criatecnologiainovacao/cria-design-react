/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { CollapseTransition, PropTypes, Transition, View } from '../../../libs';

import MixinComponent from './MixinComponent';

type State = {
    active: boolean
};

export default class SubMenu extends MixinComponent {
    instanceType: string;

    constructor(props: Object) {
        super(props);

        this.instanceType = 'SubMenu';

        this.state = {
            active: false
        };
    }

    getChildContext(): { component: SubMenu } {
        return {
            component: this
        };
    }

    componentDidMount() {
        this.rootMenu().state.submenus[this.props.index] = this;
        this.initEvents();
    }

    onItemSelect(index: number, indexPath: Array<number>): void {
        this.setState({
                          active: indexPath.indexOf(this.props.index) !== -1
                      });
    }

    handleClick(): void {
        this.rootMenu().handleSubmenuClick(this.props.index, this.indexPath());
    }

    handleMouseenter(): void {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.rootMenu().openMenu(this.props.index, this.indexPath());
        }, 300);
    }

    handleMouseleave(): void {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.rootMenu().closeMenu(this.props.index, this.indexPath());
        }, 300);
    }

    initEvents(): void {
        if (this.rootMenu().props.mode === 'horizontal' && this.rootMenu().props.menuTrigger ===
            'hover') {
            const triggerElm: any = ReactDOM.findDOMNode(this);

            triggerElm.addEventListener('mouseenter', this.handleMouseenter.bind(this));
            triggerElm.addEventListener('mouseleave', this.handleMouseleave.bind(this));
        } else {
            const triggerElm = this.refs['submenu-title'];

            triggerElm.addEventListener('click', this.handleClick.bind(this));
        }
    }

    opened(): boolean {
        return this.rootMenu().state.openedMenus.indexOf(this.props.index) !== -1;
    }

    render(): React.DOM {
        return (
            <li style={this.style()} className={this.className('cd-submenu', {
                'is-active': this.state.active,
                'is-opened': this.opened()
            })}>
                <div ref="submenu-title" className="cd-submenu__title">
                    {this.props.icon && <i className={this.props.icon}/>}
                    <span>
          {this.props.title}
          </span>
                    <i className={this.classNames('cd-submenu__icon-arrow', {
                        'cd-icon-arrow-down': this.rootMenu().props.mode === 'vertical',
                        'cd-icon-caret-bottom': this.rootMenu().props.mode === 'horizontal'
                    })}>
                    </i>
                </div>
                {
                    this.rootMenu().props.mode === 'horizontal' ? (
                        <Transition name="cd-zoom-in-top">
                            <View show={this.opened()}>
                                <ul className="cd-menu">{this.props.children}</ul>
                            </View>
                        </Transition>
                    ) : (
                        <CollapseTransition isShow={this.opened()}>
                            <ul className="cd-menu">{this.props.children}</ul>
                        </CollapseTransition>
                    )
                }

            </li>
        )
    }

    state: State;
}

SubMenu.childContextTypes = {
    component: PropTypes.any
};

SubMenu.propTypes = {
    index: PropTypes.string.isRequired
};
