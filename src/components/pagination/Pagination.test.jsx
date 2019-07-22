import React from 'react';

import {mount, shallow} from "enzyme/build";
import Pagination from ".";

describe('Pagination test', () => {

    it('should create default pagination', () => {
        const pagination = shallow(React.createElement(
            Pagination,
            {layout : 'prev, pager, next', total: 50}
        ));
        expect(pagination.is('.cd-pagination')).toBe(true);
    });

    it('should disable previous button', () => {

        const pagination = mount(
          <Pagination layout="prev, pager, next" total={100} />
        );

        expect(pagination.find('button').first()).toHaveProp('disabled');

        expect(pagination.find('button').first())
            .toHaveClassName('.btn-prev disabled');
    });

    it('small pagination', () => {

        const pagination = mount(
          <Pagination layout="prev, pager, next" total={100} small={true} />
        );

        expect(pagination.find('.cd-pagination')).toHaveClassName('cd-pagination--small');
    });

    it('should change class when active pager', () => {

        const pagination = mount(
          <Pagination layout="prev, pager, next" total={100} small={true} />        );

        pagination.find('.cd-pager').childAt(1).simulate('click');
        expect(pagination.find('.cd-pager').childAt(1)).toHaveClassName('number active');
    });

    it('should not render prev and next icons', () => {
        const pagination = mount(
          <Pagination layout="pager" total={100} small={true} />        );

        expect(pagination.find('button').exists()).toBe(false);

    });

    it('prev button action', () => {
        const pagination = mount(
          <Pagination layout="prev, pager, next" total={50} small={true} />        );

        pagination.find('.cd-pager').childAt(2).simulate('click');
        expect(pagination.find('.cd-pager').childAt(2)).toHaveClassName('number active');
        pagination.find('button').first().simulate('click');
        expect(pagination.find('.cd-pager').childAt(1)).toHaveClassName('number active');
    });

    it('next button action', () => {
        const pagination = mount(
          <Pagination layout="prev, pager, next" total={50} small={true} />        );

        pagination.find('.cd-pager').childAt(2).simulate('click');
        expect(pagination.find('.cd-pager').childAt(2)).toHaveClassName('number active');
        pagination.find('button').at(1).simulate('click');
        expect(pagination.find('.cd-pager').childAt(3)).toHaveClassName('number active');
    });

    it('quick next', () => {
        const pagination = mount(
          <Pagination layout="prev, pager, next" total={100} />        );

        pagination.find('.cd-pager').childAt(6).simulate('click');
        expect(pagination.find('.cd-pager').childAt(4)).toHaveClassName('number active')
        expect(pagination.find('.cd-pager').childAt(1)).toHaveClassName('cd-icon more btn-quickprev cd-icon-more');
        expect(pagination.find('.cd-pager').childAt(7)).toHaveClassName('cd-icon more btn-quicknext cd-icon-more');

    });

    it('quick prev', () => {
        const pagination = mount(
          <Pagination layout="prev, pager, next" total={100} />        );

        pagination.find('.cd-pager').childAt(6).simulate('click');
        pagination.find('.cd-pager').childAt(1).simulate('click');
        expect(pagination.find('.cd-pager').childAt(0)).toHaveClassName('number active')
        expect(pagination.find('.cd-pager').childAt(6)).toHaveClassName('cd-icon more btn-quicknext cd-icon-more');
    });

    it('should change the current page', () => {
        const pagination = mount(React.createElement(
            Pagination,
            {
                    layout : 'prev, pager, next',
                    total: 50,
                    currentPage: 3
            }
        ));
        expect(pagination.find('.cd-pager').childAt(2)).toHaveClassName('number active')

    });

});
