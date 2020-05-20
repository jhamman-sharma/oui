import classNames from 'classnames';
import React, { Ref } from 'react';
const DEVICE_SIZES = ['large', 'small'];

/** colSize shorthand */
type colSizeShorthand = boolean | number | 'fitContent' | 'fillSpace';

type column =
  | colSizeShorthand
  | {
      /** Draw border on this single column. */
      border: 'top' | 'bottom' | 'left' | 'right' | 'sides' | 'ends' | 'all';
      /** Push columns around with an offset. */
      offset: string | number;
      /** Specify a content display order different from HTML source order. */
      order: string | number;
      /** Pad inner content with a default amount. */
      paddedContent: 'none' | 'around' | 'sides' | 'ends' | 'remove';
      /** Size of this column; allows for some shorthand. */
      size: colSizeShorthand;
    };

type ColPropTypes = {
  /** Specify an element besides <div>. */
  as?: React.ElementType;
  /** Add single border column. */
  border?: 'top' | 'bottom' | 'left' | 'right' | 'sides' | 'ends' | 'all';
  /** Inner contents. */
  children: React.ReactNode;
  /** Whether or not this is a reading column layout */
  isReadingColumn?: boolean;
  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  large?: column;
  /**
   * Force overflow scrolling
   */
  overflow?: 'overflow-y--scroll' | 'overflow-x--auto' | 'overflow-y--auto';

  /** Add default amount of padding. */
  paddedContent?: 'around' | 'sides' | 'ends' | 'none';
  /** Optional pass through ref. */
  ref?: Ref<HTMLElement>;
  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  small?: column;

  /** Identifier for automated tests */
  testSection?: string;
};
const Col: React.SFC<ColPropTypes> = React.forwardRef(
  (
    {
      as: Component = 'div',
      border,
      children,
      overflow,
      paddedContent = 'none',
      isReadingColumn,
      testSection,
      ...props
    },
    ref?: React.Ref<HTMLElement | React.ElementType>
  ) => {
    const prefix = 'col';
    const spans: string[] = [];
    const classes: string[] = [];
    if (border) {
      classes.push(`border--${border}`);
    }
    if (overflow) {
      classes.push(overflow);
      classes.push('height--1-1');
    }
    if (paddedContent !== 'none') {
      classes.push(`padded-content--${paddedContent}`);
    }
    if (isReadingColumn) {
      children = <div className="reading-column">{children}</div>
    }
    DEVICE_SIZES.forEach(brkPoint => {
      const propValue = props[brkPoint];
      delete props[brkPoint];
      let span;
      let offset;
      let order;
      if (propValue !== null && propValue !== undefined && typeof propValue === 'object') {
        ({ span = 'fillSpace', offset, order } = propValue);
      } else {
        span = propValue;
      }
      if (offset !== null && offset !== undefined) {
        classes.push(`offset-${brkPoint}-${offset}`);
      }
      if (order !== null && order !== undefined) {
        classes.push(`order-${brkPoint}-${order}`);
      }
      if (span !== null && span !== undefined) {
        spans.push(span === 'fillSpace' ? `${prefix}-${brkPoint}` : `${prefix}-${brkPoint}-${span}`);
      }
    });
    if (!spans.length) {
      spans.push(prefix); // plain 'col'
    }
    const hostElemProps = {};
    if (typeof Component === 'string' && testSection) {
      // Change testSection to data-test-section when the root is a native element.
      hostElemProps['data-test-section'] = testSection;
    }
    return (
      <Component
        {...hostElemProps}
        {...props}
        children={children}
        ref={ref}
        className={classNames(...spans, ...classes)}
      />
    );
  }
);

Col.displayName = 'Col';

Col.defaultProps = {
  isReadingColumn: false,
};

export default Col;
