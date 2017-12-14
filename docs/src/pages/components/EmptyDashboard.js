
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/EmptyDashboard/react.json'; import examples from '../../../../src/components/EmptyDashboard/example'; import readme from 'raw-loader!../../../../src/components/EmptyDashboard/README.md';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null
  }
  
  class EmptyDashboardComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default EmptyDashboardComponent