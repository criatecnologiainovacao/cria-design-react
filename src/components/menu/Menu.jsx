/* @flow */

import React from 'react';
import {Component, PropTypes} from '../../../libs';

type State = {
    activeIndex: number,
    openedMenus: Array<number>,
    menuItems: Component,
    submenus: Component
};

export default class Menu extends Component {
    state: State;
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

    componentWillReceiveProps(props: Object) {
        if (props.defaultActive != this.props.defaultActive || props.defaultActive != this.state.activeIndex) {
            this.defaultActiveChanged(props.defaultActive);
        }

        if (props.collapsed != this.props.collapsed || props.collapsed != this.state.collapse) {
            this.setState({
                collapse: props.collapsed
            })
        }

        if (props.defaultOpeneds != this.props.defaultOpeneds) {
            this.defaultOpenedsChanged(props.defaultOpeneds);
        }
    }

    openMenu(index: number, indexPath: Array<number>): void {
        let {openedMenus} = this.state;

        if (openedMenus.indexOf(index) !== -1) return;
        // 将不在该菜单路径下的其余菜单收起
        if (this.props.uniqueOpened) {
            openedMenus = openedMenus.filter(index => {
                return indexPath.indexOf(index) !== -1;
            });
        }

        openedMenus.push(index);

        this.setState({openedMenus});
    }

    closeMenu(index: number): void {
        let {openedMenus} = this.state;

        openedMenus.splice(openedMenus.indexOf(index), 1);

        this.setState({openedMenus});
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
        let {activeIndex, openedMenus, submenus} = this.state;

        activeIndex = index;

        if (this.props.onSelect) {
            this.props.onSelect(index, indexPath, instance);
        }

        if (this.props.mode === 'horizontal') {
            for (const key in submenus) {
                submenus[key].onItemSelect(index, indexPath);
            }

            openedMenus = [];
        }

        this.setState({activeIndex, openedMenus}, () => {
            if (this.props.mode === 'vertical') {
                this.openActiveItemMenus();
            }
        });
    }

    openActiveItemMenus(): void {
        let {activeIndex, menuItems, submenus} = this.state;

        if (!menuItems[activeIndex]) return;
        if (activeIndex && this.props.mode === 'vertical') {
            let indexPath = menuItems[activeIndex].indexPath();
            // 展开该菜单项的路径上所有子菜单
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

    defaultActiveChanged(value: number): void {
        const {menuItems} = this.state;

        this.setState({activeIndex: value}, () => {
            if (!menuItems[value]) return;

            let menuItem = menuItems[value];
            let indexPath = menuItem.indexPath();

            this.handleSelect(value, indexPath, menuItem);
        });
    }

    defaultOpenedsChanged(value: mixed): void {
        this.setState({
            openedMenus: value
        });
    }

    render(): React.DOM {
        return (
            <ul
                style={this.style()}
                className={this.className("cd-menu", {
                    'cd-menu--horizontal': this.props.mode === 'horizontal',
                    'cd-menu--collapse': this.state.collapse && this.props.mode === 'vertical'
                })}
            >
                {this.props.title && this.props.titleDisabled && this.props.mode === 'vertical' && (
                    <div className="cd-menu-title">
                        <div className={"cd-menu-icon"}>
                            <button onClick={() => this.changeCollapse()}
                                    className={this.className("menu-icon menu-icon--arrow", {"is-active": !this.state.collapse})}>
                                <div className={"menu-icon-box"}>
                                    <div className={"menu-icon-inner"}>
                                    </div>
                                </div>
                            </button>
                        </div>
                        {!this.state.collapse && <span>{this.props.title.texto}</span>}
                    </div>
                )}
                {this.props.children}
            </ul>
        )
    }
}

Menu.childContextTypes = {
    component: PropTypes.any
};

Menu.propTypes = {
    titleDisabled: PropTypes.bool,
    title: PropTypes.object,
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
    title: {
        icon: "cd-icon-menu",
        texto: "Menu"
    },
    titleDisabled: true,
    collapsed: false,
    mode: 'vertical',
    theme: 'light',
    menuTrigger: 'hover'
}
