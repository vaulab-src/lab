import { TestWindow } from '@stencil/core/testing';
import { Datepicker } from './datepicker';

describe('datepicker', () => {
  it('should build', () => {
    expect(new Datepicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDatepickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Datepicker],
        html: '<datepicker></datepicker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
