/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../../libs';

type State = {
    activeIndex: number,
    openedMenus: Array<number>,
    menuItems: Component,
    submenus: Component
};

export default class Menu extends Component {
    instanceType: string;

    constructor(props: Object) {
        super(props);

        this.instanceType = 'Menu';

        this.state = {
            activeIndex: props.defaultActive,
            openedMenus: props.defaultOpeneds ? props.defaultOpeneds.slice(0) : [],
            menuItems: {},
            submenus: {}
        }
    }

    getChildContext(): { component: Menu } {
        return {
            component: this
        };
    }

    componentDidMount() {
        this.openActiveItemMenus();
        this.setState({
                          collapse: this.props.collapsed
                      })
    }

    openMenu(index: number, indexPath: Array<number>): void {
        let { openedMenus } = this.state;

        if (openedMenus.indexOf(index) !== -1) return;

        if (this.props.uniqueOpened) {
            openedMenus = openedMenus.filter(i => {
                return indexPath.indexOf(i) !== -1;
            });
        }

        openedMenus.push(index);

        this.setState({ openedMenus });
    }

    closeMenu(index: number): void {
        let { openedMenus } = this.state;

        openedMenus.splice(openedMenus.indexOf(index), 1);

        this.setState({ openedMenus });
    }

    handleSubmenuClick(index: number, indexPath: Array<number>): void {
        let isOpened = this.state.openedMenus.indexOf(index) !== -1;

        if (isOpened) {
            this.closeMenu(index);

            if (this.props.onClose) {
                this.props.onClose(index, indexPath);
            }
        } else {
            this.openMenu(index, indexPath);

            if (this.props.onOpen) {
                this.props.onOpen(index, indexPath);
            }
        }
    }

    handleSelect(index: number, indexPath: Array<number>, instance: Component): void {
        let { openedMenus } = this.state;

        if (this.props.onSelect) {
            this.props.onSelect(index, indexPath, instance);
        }

        if (this.props.mode === 'horizontal') {


            openedMenus = [];
        }

        this.setState({ activeIndex: index, openedMenus }, () => {
            if (this.props.mode === 'vertical') {
                this.openActiveItemMenus();
            }
        });
    }

    openActiveItemMenus(): void {
        let { activeIndex, menuItems, submenus } = this.state;

        if (!menuItems[activeIndex]) return;
        if (activeIndex && this.props.mode === 'vertical') {
            let indexPath = menuItems[activeIndex].indexPath();

            indexPath.forEach(index => {
                const submenu = submenus[index];

                submenu && this.openMenu(index, submenu.indexPath());
            });
        }
    }

    changeCollapse() {
        this.setState({
                          collapse: !this.state.collapse
                      })
    }

    render(): React.DOM {
        return (
            <ul
                id={this.props.id}
                style={this.style()}
                className={this.className('cd-menu', {
                    'cd-menu--horizontal': this.props.mode === 'horizontal',
                    'cd-menu--collapse': this.state.collapse && this.props.mode === 'vertical'
                })}
            >
                {this.props.title && !this.props.titleDisabled && this.props.mode === 'vertical' &&
                 (
                     <div className="cd-menu-title" onClick={() => this.changeCollapse()}>
                         <div className={'cd-menu-icon'}>
                             <button
                                 className={this.className('menu-icon menu-icon--arrow', { 'is-active': !this.state.collapse })}>
                                 <div className={'menu-icon-box'}>
                                     <div className={'menu-icon-inner'}>
                                     </div>
                                 </div>
                             </button>
                         </div>
                         {!this.state.collapse && <span>{this.props.title}</span>}
                     </div>
                 )}
                {this.props.children}
            </ul>
        )
    }

    state: State;
}

Menu.childContextTypes = {
    component: PropTypes.any
};

Menu.propTypes = {
    id: PropTypes.string,
    titleDisabled: PropTypes.bool,
    title: PropTypes.string,
    mode: PropTypes.string,
    defaultActive: PropTypes.string,
    collapsed: PropTypes.bool,
    defaultOpeneds: PropTypes.arrayOf(PropTypes.any),
    uniqueOpened: PropTypes.bool,
    menuTrigger: PropTypes.string,
    onSelect: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
};

Menu.defaultProps = {
    title: 'Menu',
    titleDisabled: false,
    collapsed: true,
    mode: 'vertical',
    menuTrigger: 'hover'
};
