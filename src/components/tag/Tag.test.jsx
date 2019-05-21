import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Tag from './Tag';

describe('Tag test', function () {
  it('tag', function () {
    var w = mount(React.createElement(
      Tag,
      null,
      'TEST'
    ));
    expect(w.find('.cd-tag').text()).toBe('TEST');
  });

  it('type', function () {
    var w = mount(React.createElement(
      Tag,
      { type: 'primary' },
      'TEST'
    ));
    expect(w.find('.cd-tag--primary')).toHaveLength(1);
  });

  it('closable', function () {
    var w = shallow(React.createElement(
      Tag,
      { type: 'primary', closable: true },
      'TEST'
    ));
    expect(w.find('i.cd-tag__close').exists()).toBe(true);
  });

  it('hit', function () {
    var w = mount(React.createElement(
      Tag,
      { hit: true },
      'TEST'
    ));
    expect(w.find('.cd-tag').first().hasClass('is-hit')).toBeTruthy();
  });

  it('rounded', function () {
    var w = mount(React.createElement(
      Tag,
      { rounded: true },
      'TEST'
    ));
    expect(w.find('.cd-tag').first().hasClass('is-round')).toBeTruthy();
  });

  it('plain', function () {
    var w = mount(React.createElement(
      Tag,
      { plain: true },
      'TEST'
    ));
    expect(w.find('.cd-tag').first().hasClass('is-plain')).toBeTruthy();
  });

  it('onClose', function () {
    var onClose = sinon.spy();
    var w = shallow(React.createElement(
      Tag,
      { type: 'primary', closable: true, onClose: onClose },
      'TEST'
    ));

    w.find('i.cd-tag__close').simulate('click');

    expect(onClose.calledOnce).toBe(true);
  });
});