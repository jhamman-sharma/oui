
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Button/react.json'; import examples from '../../../../src/components/Button/example'; import readme from 'raw-loader!../../../../src/components/Button/README.md'; import sassExamples from '../../../../data/components/Button/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class ButtonComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ButtonComponent
