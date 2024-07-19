import './style.scss';(function (blocks, editor, element, components) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;

  blocks.registerBlockType('blocks/imagetext', {
    title: 'Image Text Block',
    icon: 'format-image',
    category: 'common',
    supports: {
      // Add support for the "inspector" panel
      inspector: true,
    },

    attributes: {
      image: {
        type: 'string',
        default: '',
      },
      title: {
        type: 'string',
        default: '',
      },
      imagetext: {
        type: 'string',
        default: '',
      },
    },

    edit: function (props) {
      var attributes = props.attributes;

      function onSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }

      function onChangeTitle(value) {
        props.setAttributes({
          title: value,
        });
      }

      function onChangeImageText(value) {
        // var value = event.target.value;
        props.setAttributes({
          imagetext: value,
        });
      }

      return el(
        'div',
        {},
        el(
          'div',
          {style: { display: 'inline-block' }},
          el(MediaUpload, {
            onSelect: onSelectImage,
            type: 'image',
            render: function (mediaUploadProps) {
              return el(
                'button',
                {
                  onClick: mediaUploadProps.open,
                  className: 'components-button editor-post-featured-image__toggle',
                  style: { backgroundSize: 'cover' }, // Apply fill style to the button
                },
                attributes.image
                  ? el('img', { src: attributes.image, alt: 'Preview', className: 'image-preview-small', style: { width: '100%', height: '100%' } }) // Fix image size
                  : 'Select Image'
              );
            },
            
          })
        ),
        el(TextControl, {
          type: 'text',
          className: 'components-text-control__input',
          placeholder: 'Enter title',
          value: attributes.title,
          onChange: onChangeTitle,
        }),
        el(TextareaControl, {
          
          className: 'components-textarea-control__input',
          placeholder: 'Enter imagetext',
          value: attributes.imagetext,
          onChange: onChangeImageText,
        })
      );
    },

    save: function (props) {
      var attributes = props.attributes;

      return el(
        'div',
        { className: 'card image-card' },
        el(
          'figure',
          {},
          el(
            'div',
            { className: 'img-grow' },
            attributes.image && el('img', { src: attributes.image, alt: 'Preview' })
          ),
          el(
            'figcaption',
            { className: 'image-caption' },
            el(
              'div',
              { className: 'card-body' },
              el('h4', {}, attributes.title),
              el('p', {}, attributes.imagetext)
            )
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);
