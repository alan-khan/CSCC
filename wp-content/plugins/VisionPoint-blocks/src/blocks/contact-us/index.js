import './style.scss';

(function (blocks, element, components, editor, data) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var ColorPicker = components.ColorPicker;
  var __ = wp.i18n.__;

  blocks.registerBlockType('blocks/contact-us', {
    title: __('Contact Us', 'your-plugin'),
    icon: 'editor-contract',
    category: 'common',
    attributes: {
      heading: {
        type: 'string',
        default: '',
      },
      paragraph1: {
        type: 'string',
        default: '',
      },
      paragraph2: {
        type: 'string',
        default: '',
      },
      backgroundColor: {
        type: 'string',
        default: '',
      },
      isBackgroundOpen: {
        type: 'boolean',
        default: true,
      },
    },
    edit: function (props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph1 = attributes.paragraph1;
      var paragraph2 = attributes.paragraph2;
      var backgroundColor = attributes.backgroundColor;
      var isBackgroundOpen = attributes.isBackgroundOpen;

      function onHeadingChange(value) {
        props.setAttributes({ heading: value });
      }

      function onParagraph1Change(value) {
        props.setAttributes({ paragraph1: value });
      }

      function onParagraph2Change(value) {
        props.setAttributes({ paragraph2: value });
      }

      function onBackgroundColorChange(value) {
        props.setAttributes({ backgroundColor: value });
      }

      function onBackgroundToggleChange(value) {
        props.setAttributes({ isBackgroundOpen: value });
      }

      var blockClasses = ['custom-block'];
      if (backgroundColor && isBackgroundOpen) {
        blockClasses.push('has-background');
      }

      return el(
        'div',
        { className: blockClasses.join(' ') },
        // el(TextControl, {
        //   label: __('Heading', 'your-plugin'),
        //   value: heading,
        //   onChange: onHeadingChange,
        // }),
        // el(TextControl, {
        //   label: __('Paragraph 1', 'your-plugin'),
        //   value: paragraph1,
        //   onChange: onParagraph1Change,
        // }),
        el(TextControl, {
          label: __('Shortcode', 'your-plugin'),
          value: paragraph2,
          onChange: onParagraph2Change,
        }),
        el(components.ToggleControl, {
          label: __('Background Color', 'your-plugin'),
          checked: isBackgroundOpen,
          onChange: onBackgroundToggleChange,
        }),
        // isBackgroundOpen && el(ColorPicker, {
        //   label: __('Choose Background Color', 'your-plugin'),
        //   color: backgroundColor,
        //   onChangeComplete: function (color) {
        //     onBackgroundColorChange(color.hex);
        //   },
        // }),
        el(
          'div',
          { className: 'main-wrapper', style: { backgroundColor: backgroundColor } },
          paragraph2 && el('p', { className: 'section-paragraph' }, paragraph2)
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph1 = attributes.paragraph1;
      var paragraph2 = attributes.paragraph2;
      var backgroundColor = attributes.backgroundColor;
      var isBackgroundOpen = attributes.isBackgroundOpen;
      var bgcolor = 0;

      var blockClasses = ['custom-block'];
      if (isBackgroundOpen) {
        blockClasses.push('has-background');
        bgcolor = '#06038d';
      }
      else{
        bgcolor = '#eaeaea';
      }

      return el(
        'div',
        { className: blockClasses.join(' '), style: { backgroundColor: bgcolor } },
        el(
          'div',
          { className: 'main-wrapper' },
          paragraph2 && el('p', { className: 'section-paragraph' }, paragraph2)
        )
      );
    },
  });

  // Register the block's sidebar controls
  var registerPlugin = data.plugins.__experimentalCreateInterpolateElement;
  if (registerPlugin) {
    registerPlugin('wp-blocks/contact-us', 'edit-post/block-sidebar', {
      render: function (props) {
        var _wp$components = wp.components,
          PanelBody = _wp$components.PanelBody,
          ToggleControl = _wp$components.ToggleControl;

        function onBackgroundColorToggleChange(value) {
          props.setAttributes({ backgroundColor: value ? '#06038d' : '' });
        }

        function onBackgroundOpenToggleChange(value) {
          props.setAttributes({ isBackgroundOpen: value });
        }

        return el(
          PanelBody,
          { title: __('Contact Us Settings', 'your-plugin'), icon: 'admin-settings', initialOpen: true },
          el(ToggleControl, {
            label: __('Show Background Color', 'your-plugin'),
            checked: !!props.attributes.backgroundColor,
            onChange: onBackgroundColorToggleChange,
          }),
          el(ToggleControl, {
            label: __('Open Background Color', 'your-plugin'),
            checked: props.attributes.isBackgroundOpen,
            onChange: onBackgroundOpenToggleChange,
          })
        );
      },
    });
  }
})(
  window.wp.blocks,
  window.wp.element,
  window.wp.components,
  window.wp.editor,
  window.wp.data
);
