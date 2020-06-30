import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Overview', module);
stories
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('NewColor', () => {
    return (<div>

      <h1>Colors</h1>

      <div class="oui--swatches push--ends">
         <span className="width--50 height--50 display--inline-block background--red"></span>
         <span className="width--50 height--50 display--inline-block background--gold"></span>
         <span className="width--50 height--50 display--inline-block background--indigo"></span>
         <span className="width--50 height--50 display--inline-block background--cyan"></span>
         <span className="width--50 height--50 display--inline-block background--green"></span>
         <span className="width--50 height--50 display--inline-block background--blue"></span>
         <span className="width--50 height--50 display--inline-block background--orange"></span>
         <span className="width--50 height--50 display--inline-block background--grey-40"></span>

      </div>

  </div>)});