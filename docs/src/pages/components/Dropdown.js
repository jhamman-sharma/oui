
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Dropdown/react.json'; import examples from '../../../../src/components/Dropdown/example'; import readme from 'raw-loader!../../../../src/components/Dropdown/README.md'; import sassExamples from '../../../../data/components/Dropdown/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class DropdownComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default DropdownComponent
