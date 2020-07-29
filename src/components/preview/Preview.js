import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import '../../stylesheets/preview/_image_preview.scss';
import CardPreview from './CardPreview';
import ButtonReset from './Reset';

const Preview = (props) => {
  console.log(props);
  return (
    <section className="app__preview">
      <div className="button-container">
        <ButtonReset />
      </div>
      <CardPreview name={props.name} job="Botánica" />
    </section>
  );
};

export default Preview;
