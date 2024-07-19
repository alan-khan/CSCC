import './style.scss';
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var RichText = editor.RichText;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;
  var IconButton = components.IconButton;
  var __ = wp.i18n.__;

  blocks.registerBlockType('blocks/accordion', {
    title: __('Accordion', 'your-plugin'),
    icon: 'editor-ul',
    category: 'common',
    keywords: [__('section', 'your-plugin'), __('accordion', 'your-plugin')],
    attributes: {
      mainTitleAccordion: {
        type: 'string',
        default: '',
      },
      accordions: {
        type: 'array',
        default: [],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var accordions = attributes.accordions;
      var TextControl = components.TextControl;
      var TextareaControl = components.TextareaControl;
      var mainTitleAccordion = attributes.mainTitleAccordion;

      var onMainTitleChange = function (value) {
        props.setAttributes({ mainTitleAccordion: value });
      };


      function onAccordionTitleChange(event, index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions[index].title = event.target.value;
        props.setAttributes({ accordions: updatedAccordions });
      }
    
      function onAccordionContentChange(event, index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions[index].content = event.target.value;
        props.setAttributes({ accordions: updatedAccordions });
      }
    
      function addAccordion() {
        var updatedAccordions = accordions.slice();
        updatedAccordions.push({ title: '', content: '' });
        props.setAttributes({ accordions: updatedAccordions });
      }
    
      function removeAccordion(index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions.splice(index, 1);
        props.setAttributes({ accordions: updatedAccordions });
      }
    
      return el(
        'div',
        { className: props.className },
        accordions.map(function (accordion, index) {
          return el('div', { key: index },
            el('label', null, 'Title'),
            el(TextControl, {
              type: 'text',
              className: 'accordion',
              value: accordion.title,
              onChange: function (value) { onAccordionTitleChange({ target: { value } }, index); },
            }),
            el('div', { className: 'panel' },
              el('label', null, 'Content'),
              el(TextareaControl, {
                value: accordion.content,
                onChange: function (value) { onAccordionContentChange({ target: { value } }, index); },
              })
            ),
            el(IconButton, {
              className: 'remove-accordion',
              icon: 'no-alt',
              onClick: function () { removeAccordion(index); },
              label: __('Remove Accordion', 'your-plugin'),
            })
          );
        }),
        el(IconButton, {
          className: 'add-accordion',
          icon: 'plus',
          onClick: addAccordion,
          label: __('Add Accordion', 'your-plugin'),
        }),
        el('div',
          { className: 'my-block' },
          el(TextControl, {
            label: __('Main Title', 'my-plugin'),
            value: mainTitleAccordion,
            onChange: onMainTitleChange,
          }),
        )
      );
    },
    
    
    save: function(props) {
      var attributes = props.attributes;
      var accordions = attributes.accordions;
      var mainTitle = attributes.mainTitleAccordion;
    
      return el(
        'div',
        { className: props.className },
        el('h1',null,mainTitle),
        el('div', {className: 'expand'},el('button', { className: 'expand-all-button float-right'}, 'Expand All',
        el('span',{},'+'),) ),
        
        
        accordions.map(function(accordion, index) {
          return el('div', { key: index, className: 'accordion' },
            
            el('p', { className: 'accordion--title' }, accordion.title ),
            el('div', { className: 'accordion--content' },
              el('div', { className: 'accordion--content-inner'},
              el('p', null, accordion.content)
              )
            )
          );
        })
      );
    },
    
  });
})(
  window.wp.blocks,
  window.wp.element,
  window.wp.components,
  window.wp.editor
);