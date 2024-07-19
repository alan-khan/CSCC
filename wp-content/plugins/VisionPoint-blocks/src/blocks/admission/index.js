import './style.scss';

(function (blocks, editor, element, components) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;

  blocks.registerBlockType('blocks/admission', {
    title: 'Admission Block',
    icon: 'format-image',
    category: 'common',
    supports: {
      // Add support for the "inspector" panel
      inspector: true,
    },

    attributes: {
      title: {
        type: 'string',
        default: '',
      },
      subTitle: {
        type: 'string',
        default: '',
      },
      image: {
        type: 'string',
        default: '',
      },
      links: {
        type: 'array',
        default: [],
      },
    },

    edit: function (props) {
      var title = props.attributes.title;
      var subTitle = props.attributes.subTitle;
      var image = props.attributes.image;
      var links = props.attributes.links;

      function handleSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }

      function handleChangeTitle(value) {
        props.setAttributes({
          title: value,
        });
      }

      function handleChangeSubTitle(value) {
        props.setAttributes({
          subTitle: value,
        });
      }

      function handleAddLink() {
        var newLinks = Array.from(links);
        newLinks.push({ link_name: '', link_url: '' });

        props.setAttributes({
          links: newLinks,
        });
      }

      function handleRemoveLink(index) {
        var updatedLinks = Array.from(links);
        updatedLinks.splice(index, 1);

        props.setAttributes({
          links: updatedLinks,
        });
      }

      function handleChangeLinkName(index, value) {
        var updatedLinks = Array.from(links);
        updatedLinks[index].link_name = value;

        props.setAttributes({
          links: updatedLinks,
        });
      }

      function handleChangeLinkURL(index, value) {
        var updatedLinks = Array.from(links);
        updatedLinks[index].link_url = value;

        props.setAttributes({
          links: updatedLinks,
        });
      }

      return el(
        'div',
        {},
        el(TextControl, {
          type: 'text',
          label: 'Title',
          value: title,
          onChange: handleChangeTitle,
        }),
        el(TextControl, {
          type: 'text',
          label: 'SubTitle',
          value: subTitle,
          onChange: handleChangeSubTitle,
        }),
        el(
          'div',
          { style: { display: 'inline-block' } },
          el(MediaUpload, {
            onSelect: handleSelectImage,
            type: 'image',
            render: function (mediaUploadProps) {
              return el(
                'button',
                {
                  onClick: mediaUploadProps.open,
                  className: 'components-button editor-post-featured-image__toggle',
                  style: { backgroundSize: 'cover' },
                },
                image
                  ? el('img', { src: image, alt: 'Preview', className: 'image-preview-small', style: { width: '100%', height: '100%' } })
                  : 'Select Image'
              );
            },
          })
        ),
        el(
          'button',
          { onClick: handleAddLink },
          'Add Link'
        ),
        links.map(function (link, index) {
          return el(
            'div',
            { key: index },
            el(TextControl, {
              type: 'text',
              label:'Cta  Link ',
              className: 'components-text-control__input',
              placeholder: 'Link Name',
              value: link.link_name,
              onChange: function (value) { handleChangeLinkName(index, value); },
            }),
            el(TextControl, {
              type: 'text',
              label:'Cta Link url',
              className: 'components-text-control__input',
              placeholder: 'Link URL',
              value: link.link_url,
              onChange: function (value) { handleChangeLinkURL(index, value); },
            }),
            el('button', { onClick: function () { handleRemoveLink(index); } }, 'Remove Link')
          );
        })
      );
    },

    save: function (props) {
      var title = props.attributes.title;
      var subTitle = props.attributes.subTitle;
      var image = props.attributes.image;
      var links = props.attributes.links;

      return el(
        'div',
        { className: 'admission-block' },
        el('div',{},
        image && el('img', { src: image, alt: 'Image' }),
        ),

        el('div',{className:' text-center admission-card'},
        el('p', {className:''}, subTitle),
        el('h2', {}, title),
        el('div',{className:'container'},
        el('div',{className:''},
        el('ul',{className:'vpli'},
        links.map(function (link, index) {
          return el(
            'li',
            { key: index},
            el('a', { href: link.link_url }, link.link_name, el('i', {className:'fa fa-chevron-right'},))
          );
        })
        )
        ),
        ),


        ),
      );
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);