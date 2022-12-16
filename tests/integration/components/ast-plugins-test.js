import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('tests/integration/components/ast-plugins-test', function (hooks) {
  setupRenderingTest(hooks);

  test('stand alone templates have AST plugins ran', async function (assert) {
    await render(hbs`{{x-module-name-inlined-component}}`);

    assert.equal(
      this.element.textContent.trim(),
      'dummy/templates/components/x-module-name-inlined-component.hbs'
    );
  });
});
