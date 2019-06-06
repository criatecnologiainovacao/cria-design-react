import React from 'react';
import { mount, render } from 'enzyme/build';

import Layout from './index';

const layoutMockFourCols = (
    renderType = mount,
    rowProps = {},
    colsProps = [
        { span: '6' },
        { span: '6' },
        { span: '6' },
        { span: '6' }
    ]
) => renderType(
    <Layout.Row {...rowProps}>
        <Layout.Col {...colsProps[0]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[1]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[2]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[3]}>
            <div/>
        </Layout.Col>
    </Layout.Row>
);

const layoutMockThreeCols = (
    renderType = mount,
    rowProps = {},
    colsProps = [
        { span: '6' },
        { span: '6' },
        { span: '6' }
    ]
) => renderType(
    <Layout.Row {...rowProps}>
        <Layout.Col {...colsProps[0]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[1]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[2]}>
            <div/>
        </Layout.Col>
    </Layout.Row>
);

const layoutMockTwoCols = (
    renderType = mount,
    rowProps = {},
    colsProps = [
        { span: '6' },
        { span: '6' }
    ]
) => renderType(
    <Layout.Row {...rowProps}>
        <Layout.Col {...colsProps[0]}>
            <div/>
        </Layout.Col>
        <Layout.Col {...colsProps[1]}>
            <div/>
        </Layout.Col>
    </Layout.Row>
);

const layoutMockOneCols = (
    renderType = mount,
    rowProps = {},
    colsProps = [
        { span: '6' }
    ]
) => renderType(
    <Layout.Row {...rowProps}>
        <Layout.Col {...colsProps[0]}>
            <div/>
        </Layout.Col>
    </Layout.Row>
);

describe('Layout test', () => {
    it('Basic layout', () => {
        const w1 = layoutMockOneCols(mount, {}, { span: '24' });
        const w2 = layoutMockTwoCols(mount, {}, [{ span: '12' }, { span: '12' }]);
        const w3 = layoutMockThreeCols(mount, {}, [{ span: '8' }, { span: '8' }, { span: '8' }]);
        const w4 = layoutMockFourCols(mount, {}, [
            { span: '6' },
            { span: '6' },
            { span: '6' },
            { span: '6' }
        ]);
        const w5 = mount(
            <Layout.Row>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
                <Layout.Col span="4">
                    <div/>
                </Layout.Col>
            </Layout.Row>
        );
        const w6 = layoutMockOneCols(mount, {}, [{ span: '0' }]);

        expect(w1.find('.cd-row .cd-col-24').length).toBe(1);
        expect(w2.find('.cd-row .cd-col-12').length).toBe(2);
        expect(w3.find('.cd-row .cd-col-8').length).toBe(3);
        expect(w4.find('.cd-row .cd-col-6').length).toBe(4);
        expect(w5.find('.cd-row .cd-col-4').length).toBe(6);
        expect(w6.find('.cd-row .cd-col-0').length).toBe(1);
    });

    it('Column spacing', () => {
        const w = layoutMockFourCols(mount, { gutter: '20' });
        expect(w.find('.cd-row .cd-col-6').length).toBe(4);
        expect(w.find('.cd-row .cd-col-6').at(0).prop('style').paddingLeft).toBe('10px');
        expect(w.find('.cd-row .cd-col-6').at(0).prop('style').paddingRight).toBe('10px');
    });

    it('Hybrid layout', () => {
        const w1 = layoutMockTwoCols(mount, { gutter: '20' }, [{ span: '16' }, { span: '8' }]);
        const w2 = layoutMockFourCols(
            mount,
            { gutter: '20' },
            [
                { span: '8' },
                { span: '8' },
                { span: '4' },
                { span: '4' }
            ]
        );
        const w3 = layoutMockThreeCols(mount, { gutter: '20' }, [
            { span: '4' },
            { span: '16' },
            { span: '4' }
        ]);

        expect(w1.find('.cd-row .cd-col-16').length).toBe(1);
        expect(w1.find('.cd-row .cd-col-8').length).toBe(1);

        expect(w2.find('.cd-row .cd-col-8').length).toBe(2);
        expect(w2.find('.cd-row .cd-col-4').length).toBe(2);

        expect(w3.find('.cd-row .cd-col-16').length).toBe(1);
        expect(w3.find('.cd-row .cd-col-4').length).toBe(2);
    });

    it('Column offset', () => {
        const w1 = layoutMockTwoCols(mount, { gutter: '20' }, [
            { span: '6' },
            { span: '6', offset: '6' }
        ]);
        const w2 = layoutMockTwoCols(mount, { gutter: '20' }, [
            { span: '6', offset: '6' },
            { span: '6', offset: '6' }
        ]);
        const w3 = layoutMockOneCols(mount, { gutter: '20' }, [
            { span: '12', offset: '6' }
        ]);

        expect(w1.find('.cd-row .cd-col-6').length).toBe(2);
        expect(w1.find('.cd-row .cd-col-6.cd-col-offset-6').length).toBe(1);
        expect(w2.find('.cd-row .cd-col-6.cd-col-offset-6').length).toBe(2);
        expect(w3.find('.cd-row .cd-col-12.cd-col-offset-6').length).toBe(1);
    });

    it('Alignment', () => {

        const w1 = layoutMockThreeCols(render, { type: 'flex' });
        const w2 = layoutMockThreeCols(render, { type: 'flex', justify: 'center' });
        const w3 = layoutMockThreeCols(render, { type: 'flex', justify: 'end' });
        const w4 = layoutMockThreeCols(render, { type: 'flex', justify: 'space-between' });
        const w5 = layoutMockThreeCols(render, { type: 'flex', justify: 'space-around' });

        expect(w1.hasClass('cd-row--flex')).toBeTruthy();
        expect(w2.hasClass('is-justify-center')).toBeTruthy();
        expect(w3.hasClass('is-justify-end')).toBeTruthy();
        expect(w4.hasClass('is-justify-space-between')).toBeTruthy();
        expect(w5.hasClass('is-justify-space-around')).toBeTruthy();
    });

    it('Responsive Layout', () => {
        const w = layoutMockFourCols(
            mount,
            { gutter: '10' },
            [
                { xs: '8', sm: '6', md: '4', lg: '3' },
                { xs: { span: 4, offset: 4 }, sm: '6', md: '8', lg: '9' },
                { xs: '4', sm: '6', md: '8', lg: '9' },
                { xs: '8', sm: '6', md: '4', lg: '3' }
            ]
        );
        const w1 = layoutMockOneCols(mount, { gutter: '10' }, [
            {
                xs: '0',
                sm: '6',
                md: '4',
                lg: '3'
            }
        ]);

        expect(w.find('.cd-col-24.cd-col-xs-8.cd-col-sm-6.cd-col-md-4.cd-col-lg-3').length).toBe(2);
        expect(w.find('.cd-col-24.cd-col-xs-4.cd-col-sm-6.cd-col-md-8.cd-col-lg-9').length).toBe(2);
        expect(w1.find('.cd-col-24.cd-col-xs-0.cd-col-sm-6.cd-col-md-4.cd-col-lg-3').length)
            .toBe(1);
    });

    it('Row custom tag', () => {
        const w = layoutMockOneCols(mount, { tag: 'section' }, [{ span: '24' }]);

        expect(w.find('section').length).toBe(1);
    });

    it('Column custom tag', () => {
        const w = layoutMockOneCols(mount, {}, [{ tag: 'section', span: '24' }]);

        expect(w.find('.cd-row section.cd-col-24').length).toBe(1);
    });

    it('Row with align', () => {
        const w1 = layoutMockThreeCols(render, { type: 'flex', align: 'middle' });
        const w2 = layoutMockThreeCols(render, { type: 'flex', align: 'bottom' });

        expect(w1.hasClass('is-align-middle')).toBeTruthy();
        expect(w2.hasClass('is-align-bottom')).toBeTruthy();
    });

    it('Column with push', () => {
        const w = layoutMockOneCols(mount, { gutter: '20' }, [{ span: '12', push: '12' }]);

        expect(w.find('.cd-col-12').hasClass('cd-col-push-12')).toBeTruthy();
    });

    it('Column with pull', () => {
        const w = layoutMockOneCols(mount, { gutter: '20' }, [{ span: '12', pull: 12 }]);

        expect(w.find('.cd-col-12').hasClass('cd-col-pull-12')).toBeTruthy();
    });
});
