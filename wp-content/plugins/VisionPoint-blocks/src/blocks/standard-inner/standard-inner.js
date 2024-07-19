import './style.scss';
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var InnerBlocks = editor.InnerBlocks; // Add InnerBlocks component
  var __ = wp.i18n.__;

  blocks.registerBlockType('blocks/stander-inner', {
    title: __('Stander Inner Block', 'your-plugin'),
    icon: 'editor-contract',
    category: 'common',
    attributes: {
      title: {
        type: 'string',
        default: '',
      },
      buttonName: {
        type: 'string',
        default: '',
      },
      buttonLink: {
        type: 'string',
        default: '',
      },
    },
    edit: function (props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;

      function onTitleChange(value) {
        props.setAttributes({ title: value });
      }

      function onButtonNameChange(value) {
        props.setAttributes({ buttonName: value });
      }

      function onButtonLinkChange(value) {
        props.setAttributes({ buttonLink: value });
      }

      return el(
        'div',
        { className: props.className },
        el(TextControl, {
          label: __('Title', 'your-plugin'),
          value: title,
          onChange: onTitleChange,
        }),
        el(TextControl, {
          label: __('Button Name', 'your-plugin'),
          value: buttonName,
          onChange: onButtonNameChange,
        }),
        el(URLInput, {
          label: __('Button Link', 'your-plugin'),
          value: buttonLink,
          onChange: onButtonLinkChange,
        }),
        el(
          'div',
          { className: 'container' },
          el('h2', { className: 'page-title' }, title),
          buttonName && buttonLink && el('a', { className: 'btn btn-success cta-button', href: buttonLink }, buttonName),
          el(InnerBlocks,{},'Please Add BreadCrum') // Add InnerBlocks component here
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;

      return el(
        'div',
        { className: props.className+'container md-150' },
        el(InnerBlocks.Content),
        el(
          'div',
          { className: 'container' },
          el('h2', { className: 'page-title' }, title),
          buttonName && buttonLink && el('a', { className: 'btn cta-button', href: buttonLink }, buttonName),
          // Add InnerBlocks.Content here
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
