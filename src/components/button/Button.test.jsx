import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

describe('Button test', function () {
  it('create', function () {
    var w = shallow(React.createElement(
      Button,
      { type: 'primary' },
      'TEST'
    ));
    expect(w.hasClass('cd-button--primary')).toBeTruthy();
    expect(w.childAt(0).text()).toBe('TEST');
  });
  it('icon', function () {
    var w = shallow(React.createElement(
      Button,
      { icon: 'cd-icon-search' },
      'TEST'
    ));
    expect(w.childAt(0).hasClass('cd-icon-search')).toBeTruthy();
  });
    it('appendIcon', function () {
        var w = shallow(React.createElement(
            Button,
            { appendIcon: 'cd-icon-search' },
            'TEST'
        ));
        expect(w.childAt(1).hasClass('cd-icon-search')).toBeTruthy();
        expect(w.childAt(1).hasClass('cd-icon')).toBeTruthy();
    });
  it('nativeType', function () {
    var w = shallow(React.createElement(
      Button,
      { nativeType: 'submit' },
      'TEST'
    ));
    expect(w.prop('type')).toBe('submit');
  });
  it('loading', function () {
    var w = shallow(React.createElement(
      Button,
      { loading: true },
      'TEST'
    ));
    expect(w.hasClass('is-loading')).toBeTruthy();
    expect(w.childAt(0).hasClass('cd-icon-loading')).toBeTruthy();
  });
  it('disabled', function () {
    var w = shallow(React.createElement(
      Button,
      { disabled: true },
      'TEST'
    ));
    expect(w.hasClass('is-disabled')).toBeTruthy();
  });
  it('size', function () {
    var w = shallow(React.createElement(
      Button,
      { size: 'large' },
      'TEST'
    ));
    expect(w.hasClass('cd-button--large')).toBeTruthy();
  });
  it('plain', function () {
    var w = shallow(React.createElement(
      Button,
      { plain: true },
      'TEST'
    ));
    expect(w.hasClass('is-plain')).toBeTruthy();
  });
  it('round', function () {
    var w = shallow(React.createElement(
      Button,
      { round: true },
      'TEST'
    ));
    expect(w.hasClass('is-round')).toBeTruthy();
  });
  it('circle', function () {
    var w = shallow(React.createElement(
      Button,
      { circle: true },
      'TEST'
    ));
    expect(w.hasClass('is-circle')).toBeTruthy();
  });
  it('click', function () {
    var fn = sinon.spy();
    var w = shallow(React.createElement(
      Button,
      { onClick: fn },
      'TEST'
    ));
    w.simulate('click');
    expect(fn.callCount).toBe(1);
  });
    it('loading implies disabled', function () {
        var fn = sinon.spy();
        var w = shallow(React.createElement(
            Button,
            { loading: true, onClick: fn },
            'TEST'
        ));
        w.simulate('click');
        expect(fn.callCount).toBe(0);
    })
});