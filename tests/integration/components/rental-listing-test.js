import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  });

  test("it should display rental details", async function() {
    await render(hbs`<RentalListing @rental={{this.rental}} />`)
  });

  test("should toggle wide class on click", async function() {
    await render(hbs`<RentalListing @rental={{this.rental}} />`); 
  })

});
