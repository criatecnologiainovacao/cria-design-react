import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Tag from './Tag';

describe('Tag test', () => {
  it('tag', () => {
    const w = mount(
              < Tag > TEST < /Tag>
  )
    ;
    expect(w.find('.or-tag').text()).toBe('TEST');
  });

  it('type', () => {
    const w = mount(
              < Tag
    type = 'primary' > TEST < /Tag>
  )
    ;
    expect(w.find('.or-tag--primary')).toHaveLength(1);
  });

  it('closable', () => {
    const w = shallow(
              < Tag
    type = 'primary'
    closable = { true } > TEST < /Tag>
  )
    ;
    expect(w.find('i.or-tag__close').exists()).toBe(true);
  });

  it('hit', () => {
    const w = mount(
              < Tag
    hit = { true } > TEST < /Tag>
  )
    ;
    expect(w.find('.or-tag').first().hasClass('is-hit')).toBeTruthy();
  });

  it('rounded', () => {
    const w = mount(
              < Tag
    rounded = { true } > TEST < /Tag>
  )
    ;
    expect(w.find('.or-tag').first().hasClass('is-rounded')).toBeTruthy();
  });

  it('plain', () => {
    const w = mount(
              < Tag
    plain = { true } > TEST < /Tag>
  )
    ;
    expect(w.find('.or-tag').first().hasClass('is-plain')).toBeTruthy();
  });

  it('onClose', () => {
    const onClose = sinon.spy();
    const w = shallow(
              < Tag
    type = 'primary'
    closable = { true }
    onClose = { onClose } > TEST < /Tag>
  )
    ;

    w.find('i.or-tag__close').simulate('click');

    expect(onClose.calledOnce).toBe(true);
  });
});