import React from 'react';
import Col from './Col';
import {
  nubbinSize,
} from '../../tokens/forimport/index.es';

type ColWithNubbinPropTypes = {
  /** Inner contents of the column */
  children: React.ReactNode;
  /** A reference to the element that the nubbin should point to */
  nubbinRef: React.Ref<React.ReactNode>;
};
const ColWithNubbin: React.SFC<ColWithNubbinPropTypes> = ({
  children,
  nubbinRef,
  ...props
}) => {
  let nubbinTopPosition = 0;
  if (nubbinRef) {
    // 17 is half the distance of the diagonal of the nubbin
    // Actually used the pythagorean theorem:
    // Nubbin is 24 x 24, so 24 * √2 = 33.94 / 2 = 17
    let nubbinHypotenuse = parseInt(nubbinSize) * Math.sqrt(2);
    // Adjust the top position to be halfway through the ref's height
    // minus half the nubbin's height (the hypotenuse)
    nubbinTopPosition = nubbinRef.offsetTop + nubbinRef.offsetHeight / 2 - nubbinHypotenuse / 2;
  }

  return (
    <Col {...props}>
      <div className="height--1-1 soft-double background--light border--left">
        <div
          className="oui-config-panel__nubbin"
          style={{ top: nubbinTopPosition }}
        ></div>
        {children}
      </div>
    </Col>
  );
};

ColWithNubbin.displayName = 'ColWithNubbin';

ColWithNubbin.defaultProps = {};

export default ColWithNubbin;
