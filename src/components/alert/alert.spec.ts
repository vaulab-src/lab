import { TestWindow } from '@stencil/core/testing';
import { Alert } from './alert';

describe('alert', () => {
  it('should build', () => {
    expect(new Alert()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAlertElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Alert],
        html: '<lab-alert type="warning" header="Nodtes" message="Additional description and informations about copywriting" closable></lab-alert>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing

  });
});
