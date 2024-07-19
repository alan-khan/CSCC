import './style.scss';
(function (blocks, element, components, editor) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var __ = wp.i18n.__;
  
    blocks.registerBlockType('blocks/statistics-one', {
      title: __('Statistics One', 'your-plugin'),
      icon: 'editor-contract',
      category: 'common',
      attributes: {
        heading: {
          type: 'string',
          default: '',
        },
        paragraph: {
          type: 'string',
          default: '',
        },
      },
      edit: function (props) {
        var attributes = props.attributes;
        var heading = attributes.heading;
        var paragraph = attributes.paragraph;
  
        function onHeadingChange(value) {
          props.setAttributes({ heading: value });
        }
  
        function onParagraphChange(value) {
          props.setAttributes({ paragraph: value });
        }
  
        return el(
          'div',
          { className: props.className },
          el(TextControl, {
            label: __('Heading', 'your-plugin'),
            value: heading,
            onChange: onHeadingChange,
          }),
          el(TextControl, {
            label: __('Paragraph', 'your-plugin'),
            value: paragraph,
            onChange: onParagraphChange,
          }),
          el(
            'div',
            { className: 'main-statistics' },
            heading && el('h3', { className: 'section-heading' }, heading),
            paragraph && el('p', { className: 'section-paragraph' }, paragraph)
          )
        );
      },
      save: function (props) {
        var attributes = props.attributes;
        var heading = attributes.heading;
        var paragraph = attributes.paragraph;
  
        return el(
          'div',
          { className: props.className },
          el(
            'div',
            { className: 'main-statistics' },
            heading && el('h3', { className: 'section-heading' }, heading),
            paragraph && el('p', { className: 'section-paragraph' }, paragraph)
          )
        );
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.editor
  );