import { assert } from 'chai';
import { stub } from 'sinon';
import router from '../Router';
import { Block } from '../../Block';

class Test extends Block<StringIndexed> {
  protected render() {
    return '<p>Hello</p>';
  }
}

describe('Router', () => {
  const pushStateStub = stub(window.history, 'pushState');
  const historyBackStub = stub(history, 'back');
  const historyForwardStub = stub(history, 'forward');

  before(() => {
    router.use('/pageOne', Test).use('/pageTwo', Test).start();
    router.go('/');
  });

  after(() => {
    pushStateStub.restore();
  });

  it('Возвращает длинну истории роутера', () => {
    router.go('/pageOne');
    router.go('/pageTwo');
    assert.equal(pushStateStub.callCount, 3);
  });

  it('Возвращается назад по истории роутера', () => {
    router.back();
    assert.isTrue(historyBackStub.calledOnce);
  });

  it('Идет вперед по истории роутера', () => {
    router.forward();
    assert.isTrue(historyForwardStub.calledOnce);
  });
});
