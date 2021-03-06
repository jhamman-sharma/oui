import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CopyButton from '../CopyButton';
import Highlight from 'highlight.js/lib/highlight.js';

Highlight.registerLanguage('cs', require('highlight.js/lib/languages/cs'));
Highlight.registerLanguage('css', require('highlight.js/lib/languages/css'));
Highlight.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
Highlight.registerLanguage('html', require('highlight.js/lib/languages/xml'));
Highlight.registerLanguage('java', require('highlight.js/lib/languages/java'));
Highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('js', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('jsx', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
Highlight.registerLanguage('md', require('highlight.js/lib/languages/markdown'));
Highlight.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'));
Highlight.registerLanguage('php', require('highlight.js/lib/languages/php'));
Highlight.registerLanguage('python', require('highlight.js/lib/languages/python'));
Highlight.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
Highlight.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
Highlight.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
Highlight.registerLanguage('go', require('highlight.js/lib/languages/go'));

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

class Code extends React.Component {
  constructor() {
    super();
    this.renderCode = this.renderCode.bind(this);
  }

  renderCode() {
    let dangerouslySetInnerHTML = null;
    const {
      hasCopyButton,
      isHighlighted,
      language,
      type,
      testSection,
    } = this.props;
    let code = this.props.children;

    if (isHighlighted) {
      // Code that uses syntax highlighting needs to have
      // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
      dangerouslySetInnerHTML = {
        __html: language ? Highlight.highlight(language, code).value :
          Highlight.highlightAuto(code).value,
      };
      code = null;
    }
    let codeClasses = classNames(
      {
        'oui-code': type === 'inline',
        'oui-code__offset-content': type !== 'inline' && hasCopyButton,
      });

    return (
      /* eslint-disable react/no-danger */
      <code
        data-oui-component={ true }
        className={ codeClasses }
        data-test-section={ type === 'inline' && testSection }
        dangerouslySetInnerHTML={ dangerouslySetInnerHTML }>
        { code }
      </code>
      /* eslint-enable react/no-danger */
    );
  }

  render() {
    const {
      children,
      type,
      hasCopyButton,
      copyButtonStyle,
      copyButtonUsesTextLabel,
      shouldWrap,
      testSection,
      className,
      ouiStyle = true,
    } = this.props;
    let classes = classNames(className, 'oui-code__container',
      {
        'oui-pre': ouiStyle && !shouldWrap,
        'oui-pre-wrap': shouldWrap,
      });

    if (!children) {
      return null;
    }

    if (type === 'inline') {
      return this.renderCode();
    }

    return (
      <div data-oui-component={ true } className="position--relative">
        { hasCopyButton &&
          <div style={{position: 'absolute', top: '5px', right: '5px' }}>
            <CopyButton
              textToCopy={ children }
              usesTextLabel={ copyButtonUsesTextLabel }
              testSection={ testSection }
              style={ copyButtonStyle }
            />
          </div>
        }
        <pre
          className={ classes }
          data-test-section={ testSection }>
          { this.renderCode() }
        </pre>
      </div>
    );
  }
}

Code.propTypes = {
  /** The code within the component */
  children: PropTypes.string,
  /** className provide the possibility for extra classNames */
  className: PropTypes.string,
  /** Style for the CopyButton */
  copyButtonStyle: PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
    'underline',
    'unstyled',
    'none',
  ]),
  /** Copy button displays `Copy` instead of icon */
  copyButtonUsesTextLabel: PropTypes.bool,
  /** Adds a copy button to code examples */
  hasCopyButton: PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: PropTypes.oneOf(['cs', 'css', 'diff', 'html', 'java', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'python', 'ruby', 'scss',
    'swift', 'go']),
  /** ouiStyle */
  ouiStyle: PropTypes.bool,
  /** Whether or not the content should wrap */
  shouldWrap: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** How the code should be displayed */
  type: PropTypes.oneOf(['inline', 'block']).isRequired,
};

Code.defaultProps = {
  copyButtonUsesTextLabel: false,
};

export default Code;
