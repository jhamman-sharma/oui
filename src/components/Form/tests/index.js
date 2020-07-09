import React from 'react';
import { mount } from 'enzyme';
import Form from '../index';
import Input from '../Input';

describe('Form Component ', () => {
  it('renders a default Form', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const component = mount(<Form
      title='This is a Sheet'>
      <Form.Item>
        <Input
          label="Input label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />
      </Form.Item>
    </Form>);
    expect(component.find('.oui-close-button').length).toBe(1);
  });

  it('renders any children passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const bodyString = 'Sheets can contain anything, typically forms, in the body.';

    const component = mount(<Sheet
      title='This is a Sheet'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>{bodyString}</p>
    </Sheet>);
    expect(component.find('.oui-sheet__body').containsMatchingElement(<p>{bodyString}</p>)).toBe(true);
  });

  it('calls the onClose prop function when close button is clicked', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const component = mount(<Sheet
      title='This is a Sheet'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    component.find('.oui-close-button').simulate('click');
    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('renders a subtitle when passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const subtitleString = 'This is a subtitle';

    const component = mount(<Sheet
      title='This is a Sheet'
      subtitle={ subtitleString }
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-sheet__header').containsMatchingElement(<p>{subtitleString}</p>)).toBe(true);
  });

  it('renders a subtitle node when passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const subtitleNode = <p>This is a <a href="#">subtitle</a></p>;

    const component = mount(<Sheet
      title='This is a Sheet'
      subtitle={ subtitleNode }
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-sheet__header').containsMatchingElement(<div>{subtitleNode}</div>)).toBe(true);
  });

  it('renders the footer buttons', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const button1Label = 'No Thanks';
    const button2Label = 'Continue';


    const component = mount(<Sheet
      title='This is a Sheet'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          { button1Label }
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          { button2Label }
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-button-row').containsMatchingElement(<button>{button1Label}</button>)).toBe(true);
    expect(component.find('.oui-button-row').containsMatchingElement(<button>{button2Label}</button>)).toBe(true);
  });

  it('does not render a close button when hasCloseButton is false', () => {
    const onClickSpy = jest.fn();

    const component = mount(<Sheet
      title='This is a Sheet'
      hasCloseButton={ false }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-close-button').length).toBe(0);
  });

  it('renders an Attention bar when warningContent is passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const subtitleNode = <p>This is a <a href="#">subtitle</a></p>;

    const component = mount(<Sheet
      title='This is a Sheet'
      subtitle={ subtitleNode }
      onClose={ onCloseSpy }
      warningContent="This is a warning"
      warningTestSection="warning-test-section"
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-attention--warning').length).toBe(1);
    expect(component.find('[data-test-section="warning-test-section"]').length).toBe(1);
  });

  it('renders the title in the center when centerHeader is true', () => {
    const onClickSpy = jest.fn();

    const component = mount(<Sheet
      title='This is a Sheet'
      subtitle='This is a subtitle'
      centerHeader={ true }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-sheet__header').hasClass('text--center')).toBe(true);
  });

  it('does not render the footer when hasFooter is false', () => {
    const component = mount(<Sheet
      title='This is a Sheet'
      subtitle='This is a subtitle'
      hasFooter={ false }>
      <p>Sheets can contain anything, typically forms, in the body.</p>
    </Sheet>);
    expect(component.find('.oui-sheet__footer').length).toBe(0);
  });
});
