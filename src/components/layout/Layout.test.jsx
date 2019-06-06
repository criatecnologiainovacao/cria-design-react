import React from 'react';
import { mount, render } from 'enzyme/build';

import Layout from './index';

const layoutMock = (
    rowProps = {},
    colsProps = [
        { span: '6' },
        { span: '6' },
        { span: '6' },
        { span: '6' }
    ]
) => mount(
    <Layout.Row {...rowProps}>
        <Layout.Col {...colsProps[0]}>
            <div className="grid-content bg-purple"/>
        </Layout.Col>
        <Layout.Col {...colsProps[1]}>
            <div className="grid-content bg-purple-light"/>
        </Layout.Col>
        <Layout.Col {...colsProps[2]}>
            <div className="grid-content bg-purple"/>
        </Layout.Col>
        <Layout.Col {...colsProps[3]}>
            <div className="grid-content bg-purple-light"/>
        </Layout.Col>
    </Layout.Row>
);

describe('Layout test', () => {
    it('Basic layout', () => {
        const w1 = mount(
            <Layout.Row>
                <Layout.Col span="24">
                    <div className="grid-content bg-purple-dark"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w2 = mount(
            <Layout.Row>
                <Layout.Col span="12">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="12">
                    <div className="grid-content bg-purple-light"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w3 = mount(
            <Layout.Row>
                <Layout.Col span="8">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="8">
                    <div className="grid-content bg-purple-light"/>
                </Layout.Col>
                <Layout.Col span="8">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w4 = layoutMock();
        const w5 = mount(
            <Layout.Row>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple-light"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple-light"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple-light"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w6 = mount(
            <Layout.Row>
                <Layout.Col span="0">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w1.find('.cd-row .cd-col-24 .grid-content').exists()).toBeTruthy();
        expect(w1.find('.cd-row .cd-col-24').length).toBe(1);
        expect(w2.find('.cd-row .cd-col-12').length).toBe(2);
        expect(w3.find('.cd-row .cd-col-8').length).toBe(3);
        expect(w4.find('.cd-row .cd-col-6').length).toBe(4);
        expect(w5.find('.cd-row .cd-col-4').length).toBe(6);
        expect(w6.find('.cd-row .cd-col-0').length).toBe(1);
    });

    it('Column spacing', () => {
        const w = layoutMock({ gutter: '20' });
        expect(w.find('.cd-row .cd-col-6').length).toBe(4);
        expect(w.find('.cd-row .cd-col-6').at(0).prop('style').paddingLeft).toBe('10px');
        expect(w.find('.cd-row .cd-col-6').at(0).prop('style').paddingRight).toBe('10px');
    })

    it('Hybrid layout', () => {
        const w1 = mount(
            <Layout.Row gutter="20">
                <Layout.Col span="16">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="8">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w2 = layoutMock(
            { gutter: '20' },
            [
                { span: '8' },
                { span: '8' },
                { span: '4' },
                { span: '4' }
            ]
        );
        const w3 = mount(
            <Layout.Row gutter="20">
                <Layout.Col span="4">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="16">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w1.find('.cd-row .cd-col-16').length).toBe(1);
        expect(w1.find('.cd-row .cd-col-8').length).toBe(1);

        expect(w2.find('.cd-row .cd-col-8').length).toBe(2);
        expect(w2.find('.cd-row .cd-col-4').length).toBe(2);

        expect(w3.find('.cd-row .cd-col-16').length).toBe(1);
        expect(w3.find('.cd-row .cd-col-4').length).toBe(2);
    })

    it('Column offset', () => {
        const w1 = mount(
            <Layout.Row gutter="20">
                <Layout.Col span="6">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="6" offset="6">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w2 = mount(
            <Layout.Row gutter="20">
                <Layout.Col span="6" offset="6">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
                <Layout.Col span="6" offset="6">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        const w3 = mount(
            <Layout.Row gutter="20">
                <Layout.Col span="12" offset="6">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w1.find('.cd-row .cd-col-6').length).toBe(2);
        expect(w1.find('.cd-row .cd-col-6.cd-col-offset-6').length).toBe(1);
        expect(w2.find('.cd-row .cd-col-6.cd-col-offset-6').length).toBe(2);
        expect(w3.find('.cd-row .cd-col-12.cd-col-offset-6').length).toBe(1);
    });

    const l = (props = {}) => render(
        <Layout.Row {...props} className="row-bg" type="flex">
            <Layout.Col span="6">
                <div className="grid-content bg-purple"/>
            </Layout.Col>
            <Layout.Col span="6">
                <div className="grid-content bg-purple-light"/>
            </Layout.Col>
            <Layout.Col span="6">
                <div className="grid-content bg-purple"/>
            </Layout.Col>
        </Layout.Row>
    );

    it('Alignment', () => {

        const w1 = l();
        const w2 = l({ justify: 'center' });
        const w3 = l({ justify: 'end' });
        const w4 = l({ justify: 'space-between' });
        const w5 = l({ justify: 'space-around' });

        expect(w1.hasClass('cd-row--flex')).toBeTruthy();
        expect(w2.hasClass('is-justify-center')).toBeTruthy();
        expect(w3.hasClass('is-justify-end')).toBeTruthy();
        expect(w4.hasClass('is-justify-space-between')).toBeTruthy();
        expect(w5.hasClass('is-justify-space-around')).toBeTruthy();
    });

    it('Responsive Layout', () => {
        const w = layoutMock(
            { gutter: '10' },
            [
                { xs: '8', sm: '6', md: '4', lg: '3' },
                { xs: { span: 4, offset: 4 }, sm: '6', md: '8', lg: '9' },
                { xs: '4', sm: '6', md: '8', lg: '9' },
                { xs: '8', sm: '6', md: '4', lg: '3' }
            ]
        );
        const w1 = mount(
            <Layout.Row gutter="10">
                <Layout.Col xs="0" sm="6" md="4" lg="3">
                    <div className="grid-content bg-purple"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w.find('.cd-col-24.cd-col-xs-8.cd-col-sm-6.cd-col-md-4.cd-col-lg-3').length).toBe(2);
        expect(w.find('.cd-col-24.cd-col-xs-4.cd-col-sm-6.cd-col-md-8.cd-col-lg-9').length).toBe(2);
        expect(w1.find('.cd-col-24.cd-col-xs-0.cd-col-sm-6.cd-col-md-4.cd-col-lg-3').length)
            .toBe(1);
    });

    it('Row custom tag', () => {
        const w = mount(
            <Layout.Row tag="section">
                <Layout.Col span="24">
                    <div className="grid-content bg-purple-dark"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w.find('section').length).toBe(1);
    });

    it('Column custom tag', () => {
        const w = mount(
            <Layout.Row>
                <Layout.Col tag="section" span="24">
                    <div className="grid-content"/>
                </Layout.Col>
            </Layout.Row>
        );
        expect(w.find('.cd-row section.cd-col-24').length).toBe(1);
    });

    it('Row with align', () => {
        const w1 = l({ align: 'middle' });
        const w2 = l({ align: 'bottom' });

        expect(w1.hasClass('is-align-middle')).toBeTruthy();
        expect(w2.hasClass('is-align-bottom')).toBeTruthy();
    });

    const lay = (props = {}) => mount(
        <Layout.Row gutter="20">
            <Layout.Col span="12" {...props}>
                <div className="grid-content bg-purple"/>
            </Layout.Col>
        </Layout.Row>
    );

    it('Column with push', () => {
        const w = lay({ push: '12' });

        expect(w.find('.cd-col-12').hasClass('cd-col-push-12')).toBeTruthy();
    });

    it('Column with pull', () => {
        const w = lay({ pull: 12 });

        expect(w.find('.cd-col-12').hasClass('cd-col-pull-12')).toBeTruthy();
    });
});
