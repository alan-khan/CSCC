import './style.scss';
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var __ = wp.i18n.__;

  blocks.registerBlockType('blocks/carousel', {
    title: __('Carousel', 'your-plugin'),
    icon: 'slides',
    category: 'common',
    attributes: {
      slides: {
        type: 'array',
        default: [],
      },
      title: {
        type: 'string',
        default: '',
      },
      paragraph: {
        type: 'string',
        default: '',
      },
      content_name: {
        type: 'array',
        default: [],
      },
      content_year: {
        type: 'array',
        default: [],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || '';
      var paragraph = attributes.paragraph || '';
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];

      function onSlideChange(value, index) {
        var updatedSlides = slides.slice();
        updatedSlides[index] = value;
        props.setAttributes({ slides: updatedSlides });
      }

      function onTitleChange(value) {
        props.setAttributes({ title: value });
      }

      function onParagraphChange(value) {
        props.setAttributes({ paragraph: value });
      }

      function onContentNameChange(value, index) {
        var updatedContentName = content_name.slice();
        updatedContentName[index] = value;
        props.setAttributes({ content_name: updatedContentName });
      }
      function onContentYearChange(value, index) {
        var updatedContentYear = content_year.slice();
        updatedContentYear[index] = value;
        props.setAttributes({ content_year: updatedContentYear });
      }
      function addSlide() {
        var updatedSlides = slides.slice();
        updatedSlides.push('');
        var updatedContentName = content_name.slice();
        updatedContentName.push('');
        var updatedContentYear = content_year.slice();
        updatedContentYear.push('');
        props.setAttributes({ slides: updatedSlides, content_name: updatedContentName,content_year:updatedContentYear });
      }

      function removeSlide(index) {
        var updatedSlides = slides.slice();
        updatedSlides.splice(index, 1);
        var updatedContentName = content_name.slice();
        updatedContentName.splice(index, 1);
        var updatedContentYear = content_year.slice();
        updatedContentYear.splice(index, 1);
        props.setAttributes({ slides: updatedSlides, content_name: updatedContentName,content_year: updatedContentYear});
      }

      return el(
        'div',
        { className: props.className },
        el('div', { className: 'block-edit-form' },
          el('div', { className: 'customizer-bar' },
            el(TextControl, {
              label: __('Title', 'your-plugin'),
              value: title,
              onChange: onTitleChange,
            }),
            el(TextControl, {
              label: __('Paragraph', 'your-plugin'),
              value: paragraph,
              onChange: onParagraphChange,
            })
          ),
          el('div', { className: 'carousel' },
            slides.map(function (slide, index) {
              if (index === 0) {
                return null;
              }
              return el('div', { key: index },
                el(TextControl, {
                  tagName: 'div',
                  multiline: true,
                  label: __('Content', 'your-plugin'),
                  placeholder: __('Enter slide content...', 'your-plugin'),
                  value: slide,
                  onChange: function (value) { onSlideChange(value, index); },
                }),
                el(TextControl, {
                  label: __('Content Name', 'your-plugin'),
                  value: content_name[index],
                  onChange: function (value) { onContentNameChange(value, index); },
                }),
                el(TextControl, {
                  label: __('Content Name', 'your-plugin'),
                  value: content_year[index],
                  onChange: function (value) { onContentYearChange(value, index); },
                }),
                el(components.IconButton, {
                  icon: 'no-alt',
                  onClick: function () { removeSlide(index); },
                  label: __('Remove Slide', 'your-plugin'),
                })
              );
            }),
            el('div', null,
             
              el(components.IconButton, {
                icon: 'plus',
                onClick: addSlide,
                label: __('Add Slide', 'your-plugin'),
              })
            )
          )
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || '';
      var paragraph = attributes.paragraph || '';
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];

      
      
      var slideElements = slides.map(function (slide, index) {
        if(index != 0){
        return el(
          'div',
          { key: index },
          el('div', { dangerouslySetInnerHTML: { __html: slide } }),
          el('div', {className:'name'}, content_name[index]), // Add the content_name within a new <div>
          el('div', {className:'name_year'}, content_year[index]) // Add the content_name within a new <div>
        );
        }
      });
    
      return el(
        'div',
        { className: props.className + 'main-wrapper' },
        el('div', {  className: 'wp-block-blocks-paragraph' },
          el('div', { style: 'padding:20px' },
            el('h2', { style: 'color:#000000' }, title),
            el('p', { style: 'color:#000000' }, paragraph)
          )
        ),
        el('div', { className: 'carousel' }, slideElements)
      );
    },
  });
})(
  window.wp.blocks,
  window.wp.element,
  window.wp.components,
  window.wp.editor
);
