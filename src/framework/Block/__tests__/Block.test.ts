// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import { assert } from 'chai';
import { stub } from 'sinon';
import { Block } from '../Block';

class Stub extends Block<{
  [x: string]: any;
}> {
  constructor(props: { [x: string]: any }) {
    super({ ...props });
  }

  render() {
    return '<p>Hello</p>';
  }
}

const block = new Stub({
  testProps: { key: 'value' },
});

describe('Block', () => {
  it('Возвращает тэг', () => {
    assert.equal(block.element!.tagName, 'P');
  });

  it('Возвращает контент', () => {
    assert.equal(block.element!.textContent, 'Hello');
  });

  it('Изменяются пропсы блока', () => {
    block.setProps({ ...block.props, id: 'test' });
    assert.deepEqual(block.props, {
      id: 'test',
      testProps: { key: 'value' },
    });
  });

  it('Вызывается событие event у блока', () => {
    const testHandleEvent = stub();

    const testEvent = new MouseEvent('click');

    block.setProps({
      ...block.props,
      events: {
        click: testHandleEvent,
      },
    });

    block.element?.dispatchEvent(testEvent);
    assert.ok(testHandleEvent.calledOnce);
  });
});
