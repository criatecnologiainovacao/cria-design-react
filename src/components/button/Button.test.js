import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

describe('Button test', () => {
  it('create', () => {
    const w = shallow(
              < Button
    type = 'primary' > TEST < /Button>
  )
    ;
    expect(w.hasClass('cd-button--primary')).toBeTruthy();
    expect(w.childAt(0).text()).toBe('TEST');
  });
  it('icon', () => {
    const w = shallow(
              < Button
    icon = 'cd-icon-search' > TEST < /Button>
  )
    ;
    expect(w.childAt(0).hasClass('cd-icon-search')).toBeTruthy();
  });
  it('nativeType', () => {
    const w = shallow(
              < Button
    nativeType = 'submit' > TEST < /Button>
  )
    ;
    expect(w.prop('type')).toBe('submit');
  });
  it('loading', () => {
    const w = shallow(
              < Button
    loading = { true } > TEST < /Button>
  )
    ;
    expect(w.hasClass('is-loading')).toBeTruthy();
    expect(w.childAt(0).hasClass('cd-icon-loading')).toBeTruthy();
  });
  it('disabled', () => {
    const w = shallow(
              < Button
    disabled = { true } > TEST < /Button>
  )
    ;
    expect(w.hasClass('is-disabled')).toBeTruthy();
  });
  it('size', () => {
    const w = shallow(
              < Button
    size = 'large' > TEST < /Button>
  )
    ;
    expect(w.hasClass('cd-button--large')).toBeTruthy();
  });
  it('plain', () => {
    const w = shallow(
              < Button
    plain = { true } > TEST < /Button>
  )
    ;
    expect(w.hasClass('is-plain')).toBeTruthy();
  });
  it('round', () => {
    const w = shallow(
              < Button
    round = { true } > TEST < /Button>
  )
    ;
    expect(w.hasClass('is-round')).toBeTruthy();
  });
  it('circle', () => {
    const w = shallow(
              < Button
    circle = { true } > TEST < /Button>
  )
    ;
    expect(w.hasClass('is-circle')).toBeTruthy();
  });
  it('click', () => {
    const fn = sinon.spy();
    const w = shallow(
              < Button
    onClick = { fn } > TEST < /Button>
  )
    ;
    w.simulate('click');
    expect(fn.callCount).toBe(1);
  });
});