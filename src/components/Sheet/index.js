import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ButtonRow from '../ButtonRow';
import CloseButton from '../CloseButton';
import Attention from '../Attention';

const Sheet = props => {
  let subtitleContent;
  if (props.subtitle && typeof props.subtitle === 'string') {
    subtitleContent = (
      <p className="push--top flush--bottom">{props.subtitle}</p>
    );
  } else {
    subtitleContent = (
      <div className="push--top flush--bottom">{props.subtitle}</div>
    );
  }

  let headerClasses = classNames({
    'oui-sheet__header': true,
    'text--center': props.centerHeader,
  });

  return (
    <div className="oui-sheet__wrapper">
      <div className="oui-sheet__overlay" />
      <div
        data-oui-component={ true }
        className="oui-sheet overflow-y--auto"
        data-test-section={ props.testSection }>
        {props.hasCloseButton && (
          <CloseButton onClick={ props.onClose } size="large" />
        )}
        {props.warningContent && (
          <div className="oui-sheet__warning">
            <Attention alignment="center" type="warning" testSection={ props.warningTestSection }>
              { props.warningContent }
            </Attention>
          </div>
        )}
        <header className={ headerClasses }>
          <h2 className="flush--bottom">{props.title}</h2>
          {subtitleContent}
        </header>
        <div className="oui-sheet__body">{props.children}</div>
        <footer className="oui-sheet__footer">
          <ButtonRow rightGroup={ props.footerButtonList } />
        </footer>
      </div>
    </div>
  );
};

Sheet.propTypes = {
  /**
   *  Used to determine if the title & subtitle of the sheet should be centered.
   */
  centerHeader: PropTypes.bool,
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: PropTypes.node.isRequired,
  /**
   * Array of buttons used in the footer of the sheet.
   */
  footerButtonList: PropTypes.array.isRequired,
  /**
   *  Used to determine if the sheet should have a close button.
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Function to perform when the sheet is closed.
   */
  onClose: PropTypes.func,
  /**
   * A subtitle for the sheet.
   */
  subtitle: PropTypes.node || PropTypes.string,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
  /**
   * Main title of the sheet.
   */
  title: PropTypes.string.isRequired,
  /**
   * Content of the warning Attention bar.
   */
  warningContent: PropTypes.string,
  /**
   * Identifier used to create data-test-section
   * attribute for the Attention bar.
   */
  warningTestSection: PropTypes.string,
};

Sheet.defaultProps = {
  centerHeader: false,
  hasCloseButton: true,
  onClose: () => {},
  subtitle: '',
  testSection: '',
  warningTestSection: '',
};

export default Sheet;
