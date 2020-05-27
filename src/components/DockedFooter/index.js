import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

class DockedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocked: true,
      listenersSet: false,
      atBottom: true,
    };
    this.dockedFooterRef = React.createRef();
    this.setAtBottom = this.setAtBottom.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this.throttle = this.throttle.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scrollRef !== prevProps.scrollRef) {
      this.setIsDocked();

      this.setEventListeners();
    }
  }

  domNodesPresent = () => {
    return !!this.dockedFooterRef.current && !!this.props.scrollRef;
  }

  setEventListeners() {
    if (!this.state.listenersSet && this.domNodesPresent()) {
      let scrollContainer = this.props.scrollRef;
      window.addEventListener(
        'resize',
        this.throttle(3, () => this.setIsDocked()),
        { passive: false },
        { useCapture: true }
      );
      scrollContainer.addEventListener(
        'scroll',
        this.throttle(3, () => this.setAtBottom()),
        { passive: true }
      );
      scrollContainer.addEventListener(
        'wheel',
        this.throttle(3, () => this.setAtBottom()),
        { passive: true }
      );
      scrollContainer.addEventListener('click', () => this.setIsDocked(), {
        passive: true,
      });
      scrollContainer.addEventListener('keydown', () => this.setIsDocked(), {
        passive: true,
      });
      this.setState({ listenersSet: true });
    }
  }

  throttle(delay, fn) {
    let lastCall = 0;
    return function(...args) {
      const now = (new Date()).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }

  setIsDocked = (callback) => {
    if (this.domNodesPresent()) {
      const shouldDockByHeight = this.dockedFooterRef.current.offsetTop >=
      this.props.scrollRef.offsetHeight -
        this.dockedFooterRef.current.offsetHeight;
      const newState = {
        isDocked: shouldDockByHeight,
      };

      return this.setState(newState, () => {
        this.setAtBottom();
      });
    }
    this.setAtBottom();

  }

  setAtBottom() {
    if (this.domNodesPresent()) {
      const atBottom = this.props.scrollRef.scrollHeight - this.props.scrollRef.scrollTop === this.props.scrollRef.clientHeight;
      let newState = {
        atBottom: atBottom,
        isDocked: !atBottom,
      };
      this.setState(newState);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttle(3, this.shouldDock));
    window.removeEventListener(
      'mousemove',
      this.throttle(5, this.setIsDocked),
      { passive: false },
      { useCapture: true }
    );
    this.props.scrollRef.removeEventListener(
      'scroll',
      this.throttle(3, this.setAtBottom),
      { passive: true }
    );
    this.props.scrollRef.removeEventListener('wheel', this.throttle(3, this.setAtBottom), {
      passive: true,
    });
    this.props.scrollRef.removeEventListener('click', this.shouldDock, {
      passive: true,
    });
    this.props.scrollRef.removeEventListener('keydown', this.shouldDock, {
      passive: true,
    });
  }

  render() {
    return (
      <div
        data-test-section={ this.props.testSection }
        ref={ this.dockedFooterRef }
        className={ classNames({
          'oui-docked-footer': true,
          'oui-docked-footer--is-docked': this.state.isDocked,
          'push-double--top': this.props.includesMargin,
        }) }>
        <ButtonRow
          leftGroup={ this.props.leftGroup }
          centerGroup={ this.props.centerGroup }
          rightGroup={ this.props.rightGroup }
          testSection={ this.props.testSection }
        />
      </div>
    );
  }
}

DockedFooter.propTypes = {
  /**
   *  Any components to be included in the DockedFooter
   */
  centerGroup: PropTypes.arrayOf(PropTypes.element),
  /**
   *  Used to determine if there should be top margin
   */
  includesMargin: PropTypes.bool,
  /**
   * Array of buttons for left side
   */
  leftGroup: PropTypes.arrayOf(PropTypes.element),
  /**
   * Array of buttons for right side
   */
  rightGroup: PropTypes.arrayOf(PropTypes.element),
  /**
   * Ref from parent element for DockedFooter to set listeners
   */
  scrollRef: PropTypes.node,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string.isRequired,
};

DockedFooter.defaultProps = {
  scrollRef: null,
  includesMargin: false,
  testSection: '',
};

export default DockedFooter;
