import './style.scss';
(function (blocks, element, components) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var __ = wp.i18n.__;
  
    blocks.registerBlockType('blocks/contact-us-2', {
      title: __('Contact Us Horizontal', 'your-plugin'),
      icon: 'email',
      category: 'common',
      attributes: {
        title: {
          type: 'string',
          default: '',
        },
        sub_title: {
          type: 'string',
          default: '',
        },
        email: {
          type: 'string',
          default: '',
        },
        perticular: {
          type: 'string',
          default: '',
        },
        contact: {
          type: 'string',
          default: '',
        },
        second_email: {
          type: 'string',
          default: '',
        },
      },
  
      edit: function (props) {
        var attributes = props.attributes;
        var title = attributes.title || '';
        var sub_title = attributes.sub_title || '';
        var email = attributes.email || '';
        var perticular = attributes.perticular || '';
        var contact = attributes.contact || '';
        var second_email = attributes.second_email || '';
  
        function onTitleChange(value) {
          props.setAttributes({ title: value });
        }
  
        function onSubTitleChange(value) {
          props.setAttributes({ sub_title: value });
        }
  
        function onEmailChange(value) {
          props.setAttributes({ email: value });
        }
  
        function onPerticularChange(value) {
          props.setAttributes({ perticular: value });
        }
  
        function onContactChange(value) {
          props.setAttributes({ contact: value });
        }
  
        function onSecondEmailChange(value) {
          props.setAttributes({ second_email: value });
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
            label: __('Sub Title', 'your-plugin'),
            value: sub_title,
            onChange: onSubTitleChange,
          }),
          el(TextControl, {
            label: __('Email', 'your-plugin'),
            value: email,
            onChange: onEmailChange,
          }),
          el(TextControl, {
            label: __('Perticular', 'your-plugin'),
            value: perticular,
            onChange: onPerticularChange,
          }),
          el(TextControl, {
            label: __('Contact', 'your-plugin'),
            value: contact,
            onChange: onContactChange,
          }),
          el(TextControl, {
            label: __('Second Email', 'your-plugin'),
            value: second_email,
            onChange: onSecondEmailChange,
          })
        );
      },
  
      save: function (props) {
        var attributes = props.attributes;
        var title = attributes.title || '';
        var sub_title = attributes.sub_title || '';
        var email = attributes.email || '';
        var perticular = attributes.perticular || '';
        var contact = attributes.contact || '';
        var second_email = attributes.second_email || '';
  
        return el(
          'div',
          { className: props.className },
          el('div',{className:'container'},
          el('div',{className:'row main-wrapper'},
          el('div',{className:'col-lg-6'}, 
          el('h2', null, title),
          el('h6', null, sub_title),
          el('a', {href:"mailto:" +email, className:'contact-us-2-block-email'}, email),
          ),
          el('div',{className:'col-lg-6 bg-color'}, 
          el('p', null,  perticular),
          el('a', {href:"tel:"+contact},  contact),
          el('a', {href:"mailto:"+second_email}, second_email)
          ),
          ),
         
          )
        );
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.components
  );