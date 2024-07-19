/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../plugins/VisionPoint-blocks/src/blocks/accordion/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/accordion/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/accordion/style.scss");

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
        default: ''
      },
      accordions: {
        type: 'array',
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var accordions = attributes.accordions;
      var TextControl = components.TextControl;
      var TextareaControl = components.TextareaControl;
      var mainTitleAccordion = attributes.mainTitleAccordion;
      var onMainTitleChange = function onMainTitleChange(value) {
        props.setAttributes({
          mainTitleAccordion: value
        });
      };
      function onAccordionTitleChange(event, index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions[index].title = event.target.value;
        props.setAttributes({
          accordions: updatedAccordions
        });
      }
      function onAccordionContentChange(event, index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions[index].content = event.target.value;
        props.setAttributes({
          accordions: updatedAccordions
        });
      }
      function addAccordion() {
        var updatedAccordions = accordions.slice();
        updatedAccordions.push({
          title: '',
          content: ''
        });
        props.setAttributes({
          accordions: updatedAccordions
        });
      }
      function removeAccordion(index) {
        var updatedAccordions = accordions.slice();
        updatedAccordions.splice(index, 1);
        props.setAttributes({
          accordions: updatedAccordions
        });
      }
      return el('div', {
        className: props.className
      }, accordions.map(function (accordion, index) {
        return el('div', {
          key: index
        }, el('label', null, 'Title'), el(TextControl, {
          type: 'text',
          className: 'accordion',
          value: accordion.title,
          onChange: function onChange(value) {
            onAccordionTitleChange({
              target: {
                value: value
              }
            }, index);
          }
        }), el('div', {
          className: 'panel'
        }, el('label', null, 'Content'), el(TextareaControl, {
          value: accordion.content,
          onChange: function onChange(value) {
            onAccordionContentChange({
              target: {
                value: value
              }
            }, index);
          }
        })), el(IconButton, {
          className: 'remove-accordion',
          icon: 'no-alt',
          onClick: function onClick() {
            removeAccordion(index);
          },
          label: __('Remove Accordion', 'your-plugin')
        }));
      }), el(IconButton, {
        className: 'add-accordion',
        icon: 'plus',
        onClick: addAccordion,
        label: __('Add Accordion', 'your-plugin')
      }), el('div', {
        className: 'my-block'
      }, el(TextControl, {
        label: __('Main Title', 'my-plugin'),
        value: mainTitleAccordion,
        onChange: onMainTitleChange
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var accordions = attributes.accordions;
      var mainTitle = attributes.mainTitleAccordion;
      return el('div', {
        className: props.className
      }, el('h1', null, mainTitle), el('div', {
        className: 'expand'
      }, el('button', {
        className: 'expand-all-button float-right'
      }, 'Expand All', el('span', {}, '+'))), accordions.map(function (accordion, index) {
        return el('div', {
          key: index,
          className: 'accordion'
        }, el('p', {
          className: 'accordion--title'
        }, accordion.title), el('div', {
          className: 'accordion--content'
        }, el('div', {
          className: 'accordion--content-inner'
        }, el('p', null, accordion.content))));
      }));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/admission/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/admission/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/admission/style.scss");

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
      inspector: true
    },
    attributes: {
      title: {
        type: 'string',
        default: ''
      },
      subTitle: {
        type: 'string',
        default: ''
      },
      image: {
        type: 'string',
        default: ''
      },
      links: {
        type: 'array',
        default: []
      }
    },
    edit: function edit(props) {
      var title = props.attributes.title;
      var subTitle = props.attributes.subTitle;
      var image = props.attributes.image;
      var links = props.attributes.links;
      function handleSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function handleChangeTitle(value) {
        props.setAttributes({
          title: value
        });
      }
      function handleChangeSubTitle(value) {
        props.setAttributes({
          subTitle: value
        });
      }
      function handleAddLink() {
        var newLinks = Array.from(links);
        newLinks.push({
          link_name: '',
          link_url: ''
        });
        props.setAttributes({
          links: newLinks
        });
      }
      function handleRemoveLink(index) {
        var updatedLinks = Array.from(links);
        updatedLinks.splice(index, 1);
        props.setAttributes({
          links: updatedLinks
        });
      }
      function handleChangeLinkName(index, value) {
        var updatedLinks = Array.from(links);
        updatedLinks[index].link_name = value;
        props.setAttributes({
          links: updatedLinks
        });
      }
      function handleChangeLinkURL(index, value) {
        var updatedLinks = Array.from(links);
        updatedLinks[index].link_url = value;
        props.setAttributes({
          links: updatedLinks
        });
      }
      return el('div', {}, el(TextControl, {
        type: 'text',
        label: 'Title',
        value: title,
        onChange: handleChangeTitle
      }), el(TextControl, {
        type: 'text',
        label: 'SubTitle',
        value: subTitle,
        onChange: handleChangeSubTitle
      }), el('div', {
        style: {
          display: 'inline-block'
        }
      }, el(MediaUpload, {
        onSelect: handleSelectImage,
        type: 'image',
        render: function render(mediaUploadProps) {
          return el('button', {
            onClick: mediaUploadProps.open,
            className: 'components-button editor-post-featured-image__toggle',
            style: {
              backgroundSize: 'cover'
            }
          }, image ? el('img', {
            src: image,
            alt: 'Preview',
            className: 'image-preview-small',
            style: {
              width: '100%',
              height: '100%'
            }
          }) : 'Select Image');
        }
      })), el('button', {
        onClick: handleAddLink
      }, 'Add Link'), links.map(function (link, index) {
        return el('div', {
          key: index
        }, el(TextControl, {
          type: 'text',
          label: 'Cta  Link ',
          className: 'components-text-control__input',
          placeholder: 'Link Name',
          value: link.link_name,
          onChange: function onChange(value) {
            handleChangeLinkName(index, value);
          }
        }), el(TextControl, {
          type: 'text',
          label: 'Cta Link url',
          className: 'components-text-control__input',
          placeholder: 'Link URL',
          value: link.link_url,
          onChange: function onChange(value) {
            handleChangeLinkURL(index, value);
          }
        }), el('button', {
          onClick: function onClick() {
            handleRemoveLink(index);
          }
        }, 'Remove Link'));
      }));
    },
    save: function save(props) {
      var title = props.attributes.title;
      var subTitle = props.attributes.subTitle;
      var image = props.attributes.image;
      var links = props.attributes.links;
      return el('div', {
        className: 'admission-block'
      }, el('div', {}, image && el('img', {
        src: image,
        alt: 'Image'
      })), el('div', {
        className: ' text-center admission-card'
      }, el('p', {
        className: ''
      }, subTitle), el('h2', {}, title), el('div', {
        className: 'container'
      }, el('div', {
        className: ''
      }, el('ul', {
        className: 'vpli'
      }, links.map(function (link, index) {
        return el('li', {
          key: index
        }, el('a', {
          href: link.link_url
        }, link.link_name, el('i', {
          className: 'fa fa-chevron-right'
        })));
      }))))));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/admissionhero/index.js":
/*!**************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/admissionhero/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/admissionhero/style.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("blocks/admissions-hero", {
  title: "Admissions Hero",
  icon: "shield",
  category: "common",
  attributes: {
    title: {
      type: "string",
      default: "Admissions"
    },
    description: {
      type: "string",
      default: "Everything you need to know to become a student at CSCC."
    },
    buttonText1: {
      type: "string",
      default: "Get Started"
    },
    buttonURL1: {
      type: "string",
      default: "/"
    },
    buttonText2: {
      type: "string",
      default: "Contact Us"
    },
    buttonURL2: {
      type: "string",
      default: "/"
    },
    image: {
      type: "string",
      default: ""
    },
    secondaryTitle: {
      type: "string",
      default: "This is Cleveland"
    },
    secondaryDescription: {
      type: "string",
      default: "Cleveland State Community College subscribes to an open-door policy and welcomes applications from all persons, regardless of race, color, religion, sex, national origin or disability. Our mission is to admit, register and graduate students in an efficient fashion in accordance with guidelines and procedures, to maintain accurate student records, to provide information and statistics to various groups of people, and to foster a positive working environment by providing quality service to campus and external communities."
    },
    listItems: {
      type: "string",
      default: "Admissions"
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var title = attributes.title,
      description = attributes.description,
      buttonText1 = attributes.buttonText1,
      buttonURL1 = attributes.buttonURL1,
      buttonText2 = attributes.buttonText2,
      buttonURL2 = attributes.buttonURL2,
      image = attributes.image,
      secondaryTitle = attributes.secondaryTitle,
      secondaryDescription = attributes.secondaryDescription,
      listItems = attributes.listItems;
    var onImageSelect = function onImageSelect(media) {
      setAttributes({
        image: media.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admissions-hero-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admissions-hero-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "admission-hero-breadcrumbs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/"
    }, "Home")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, listItems)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "h1",
      value: title,
      onChange: function onChange(newTitle) {
        return setAttributes({
          title: newTitle
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      value: description,
      onChange: function onChange(newDesc) {
        return setAttributes({
          description: newDesc
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-btn-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "a",
      value: buttonText1,
      class: "btn btn-primary btn-darkbg",
      onChange: function onChange(newButtonText1) {
        return setAttributes({
          buttonText1: newButtonText1
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInput, {
      value: buttonURL1,
      class: "new-line",
      placeholder: "Enter Link Here",
      onChange: function onChange(newURL1) {
        return setAttributes({
          buttonURL1: newURL1
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "a",
      value: buttonText2,
      class: "btn btn-light btn-darkbg",
      onChange: function onChange(newButtonText2) {
        return setAttributes({
          buttonText2: newButtonText2
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInput, {
      value: buttonURL2,
      class: "new-line",
      placeholder: "Enter Link Here",
      onChange: function onChange(newURL2) {
        return setAttributes({
          buttonURL2: newURL2
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: image,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          onClick: open,
          className: "components-button editor-post-featured-image__toggle"
        }, image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: image,
          alt: "Preview",
          className: "image-preview-small",
          style: {
            position: "relative",
            left: "0%"
          }
        }) : "Select Image");
      }
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container admissions-hero-section-secondary"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "h2",
      value: secondaryTitle,
      onChange: function onChange(newSecondaryTitle) {
        return setAttributes({
          secondaryTitle: newSecondaryTitle
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      value: secondaryDescription,
      onChange: function onChange(newSecondaryDesc) {
        return setAttributes({
          secondaryDescription: newSecondaryDesc
        });
      }
    })))));
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      title = _props$attributes.title,
      description = _props$attributes.description,
      buttonText1 = _props$attributes.buttonText1,
      buttonURL1 = _props$attributes.buttonURL1,
      buttonText2 = _props$attributes.buttonText2,
      buttonURL2 = _props$attributes.buttonURL2,
      image = _props$attributes.image,
      secondaryTitle = _props$attributes.secondaryTitle,
      secondaryDescription = _props$attributes.secondaryDescription,
      listItems = _props$attributes.listItems;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admissions-hero-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admissions-hero-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "admission-hero-breadcrumbs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/"
    }, "Home")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, listItems)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-btn-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: buttonURL1,
      className: "btn btn-primary btn-darkbg"
    }, buttonText1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: buttonURL2,
      className: "btn btn-light btn-darkbg"
    }, buttonText2)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image,
      alt: "Preview",
      className: "img-main img1"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container admissions-hero-section-secondary"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, secondaryTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, secondaryDescription)))));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/breadcrumbs/index.js":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/breadcrumbs/index.js ***!
  \************************************************************************/
/***/ (function() {

// import './style.scss';
(function (blocks, element, components) {
  var el = element.createElement;
  var __ = wp.i18n.__;
  blocks.registerBlockType('blocks/breadcrumbs', {
    title: __('breadcrums', 'your-plugin'),
    icon: 'admin-post',
    category: 'common',
    edit: function edit(props) {
      return el('p', {}, __('Bread Crum ', 'your-plugin'));
    },
    save: function save() {
      return el(components.ServerSideRender, {
        block: 'blocks/breadcrumbs'
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/button/index.js":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/button/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/button/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  var SelectControl = components.SelectControl;
  registerBlockType('blocks/button', {
    title: 'Button Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
      buttons: {
        type: 'array',
        default: [{
          buttonName: 'Button 1',
          buttonLink: '#',
          buttonType: 'primary'
        }, {
          buttonName: 'Button 2',
          buttonLink: '#',
          buttonType: 'secondary'
        }]
      },
      backgroundColor: {
        type: 'string',
        default: '#F2F2F2'
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onButtonNameChange(index, newName) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonName = newName;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonLinkChange(index, newLink) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonLink = newLink;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonTypeChange(index, newType) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonType = newType;
        setAttributes({
          buttons: buttons
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      function addButton() {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.push({
          buttonName: 'New Button',
          buttonLink: '#',
          buttonType: 'primary'
        });
        setAttributes({
          buttons: buttons
        });
      }
      function removeButton(index) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.splice(index, 1);
        setAttributes({
          buttons: buttons
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: 'Background Color',
        colorSettings: [{
          label: 'Background Color',
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el(Fragment, {
          key: index
        }, el(TextControl, {
          label: 'Button Name',
          value: button.buttonName,
          onChange: function onChange(newName) {
            onButtonNameChange(index, newName);
          }
        }), el(URLInput, {
          label: 'Button Link',
          value: button.buttonLink,
          onChange: function onChange(newLink) {
            onButtonLinkChange(index, newLink);
          }
        }), el(SelectControl, {
          label: 'Button Type',
          value: button.buttonType,
          options: [{
            value: 'primary',
            label: 'Primary'
          }, {
            value: 'secondary',
            label: 'Secondary'
          }, {
            value: 'tertiary',
            label: 'Tertiary'
          }, {
            value: 'primary-two',
            label: 'Primary Two'
          }, {
            value: 'secondary-two',
            label: 'Secondary Two'
          }, {
            value: 'tertiary-two',
            label: 'Tertiary Two'
          }, {
            value: 'inactive',
            label: 'inactive'
          }, {
            value: 'primary active',
            label: 'Primary Active'
          }, {
            value: 'secondary active',
            label: 'Secondary Active'
          }, {
            value: 'tertiary active',
            label: 'Tertiary Active'
          }, {
            value: 'primary-two active',
            label: 'Primary Two Active'
          }, {
            value: 'secondary-two active',
            label: 'Secondary Two Active'
          }, {
            value: 'tertiary-two active',
            label: 'Tertiary Two Active'
          }, {
            value: 'inactive active',
            label: 'inactive Active'
          }],
          onChange: function onChange(newType) {
            onButtonTypeChange(index, newType);
          }
        }), el('button', {
          className: 'button-remove',
          onClick: function onClick() {
            removeButton(index);
          }
        }, 'Remove Button'));
      }), el('button', {
        className: 'button-add',
        onClick: addButton
      }, 'Add Button')));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el('a', {
          href: button.buttonLink,
          className: button.buttonType,
          'data-type': button.buttonType,
          key: index
        }, button.buttonName);
      }));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/card/index.js":
/*!*****************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/card/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/card/style.scss");

(function (blocks, editor, element, components, i18n) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var __ = i18n.__;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var CardBlock = {
    title: __("Card Block", "your-plugin"),
    icon: "editor-code",
    category: "common",
    attributes: {
      title: {
        type: "string",
        source: "text",
        selector: ".card-title",
        default: ""
      },
      content: {
        type: "string",
        source: "html",
        selector: ".card-text",
        default: ""
      },
      image: {
        type: "string",
        default: ""
      },
      anchorText: {
        type: "string",
        default: ""
      },
      anchorLink: {
        type: "string",
        default: ""
      },
      status: {
        type: "string",
        default: "normal"
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function onChangeAnchorText(value) {
        props.setAttributes({
          anchorText: value
        });
      }
      function onChangeAnchorLink(value) {
        props.setAttributes({
          anchorLink: value
        });
      }
      return el("div", {
        className: props.className
      }, el(components.SelectControl, {
        label: __("Status", "your-plugin"),
        value: attributes.status,
        options: [{
          label: __("Active", "your-plugin"),
          value: "active"
        }, {
          label: __("Disable", "your-plugin"),
          value: "disable"
        }, {
          label: __("Normal", "your-plugin"),
          value: "normal"
        }],
        onChange: function onChange(value) {
          props.setAttributes({
            status: value
          });
        }
      }), el(TextControl, {
        label: __("Title", "your-plugin"),
        value: attributes.title,
        onChange: function onChange(value) {
          props.setAttributes({
            title: value
          });
        }
      }), el(TextControl, {
        label: __("Content", "your-plugin"),
        value: attributes.content,
        onChange: function onChange(value) {
          props.setAttributes({
            content: value
          });
        }
      }), el(TextControl, {
        label: __("Anchor Text", "your-plugin"),
        value: attributes.anchorText,
        onChange: onChangeAnchorText
      }), el(TextControl, {
        label: __("Anchor Link", "your-plugin"),
        value: attributes.anchorLink,
        onChange: onChangeAnchorLink
      }), el("div", {
        className: "cards"
      }, el(MediaUpload, {
        onSelect: onSelectImage,
        type: "image",
        render: function render(mediaUploadProps) {
          return el("div", {
            className: "card-img-top",
            onClick: mediaUploadProps.open
          }, attributes.image ? el("img", {
            src: attributes.image,
            alt: "Card image"
          }) : __("Upload Image", "your-plugin"));
        }
      }), el("div", {
        className: "card-body"
      }, el("h5", {
        className: "card-title"
      }, attributes.title), el("p", {
        className: "card-text"
      }, attributes.content), el("a", {
        className: "",
        href: attributes.anchorLink
      }, attributes.anchorText ? attributes.anchorText : __("See Profile", "your-plugin")))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        className: props.className
      }, el("div", {
        className: "cards " + attributes.status
      }, el("img", {
        className: "card-img-top",
        src: attributes.image,
        alt: "Card image"
      }), el("div", {
        className: "card-body"
      }, el("h5", {
        className: "card-title"
      }, attributes.title), el("p", {
        className: "card-text"
      }, attributes.content.length <= 110 ? attributes.content : attributes.content.substring(0, 110) + "."), el("a", {
        className: "",
        href: attributes.anchorLink
      }, attributes.anchorText ? attributes.anchorText : __("See Profile", "your-plugin")))));
    }
  };
  registerBlockType("blocks/card", CardBlock);
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components, window.wp.i18n);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/carousel/index.js":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/carousel/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/carousel/style.scss");

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
        default: []
      },
      title: {
        type: 'string',
        default: ''
      },
      paragraph: {
        type: 'string',
        default: ''
      },
      content_name: {
        type: 'array',
        default: []
      },
      content_year: {
        type: 'array',
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || '';
      var paragraph = attributes.paragraph || '';
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      function onSlideChange(value, index) {
        var updatedSlides = slides.slice();
        updatedSlides[index] = value;
        props.setAttributes({
          slides: updatedSlides
        });
      }
      function onTitleChange(value) {
        props.setAttributes({
          title: value
        });
      }
      function onParagraphChange(value) {
        props.setAttributes({
          paragraph: value
        });
      }
      function onContentNameChange(value, index) {
        var updatedContentName = content_name.slice();
        updatedContentName[index] = value;
        props.setAttributes({
          content_name: updatedContentName
        });
      }
      function onContentYearChange(value, index) {
        var updatedContentYear = content_year.slice();
        updatedContentYear[index] = value;
        props.setAttributes({
          content_year: updatedContentYear
        });
      }
      function addSlide() {
        var updatedSlides = slides.slice();
        updatedSlides.push('');
        var updatedContentName = content_name.slice();
        updatedContentName.push('');
        var updatedContentYear = content_year.slice();
        updatedContentYear.push('');
        props.setAttributes({
          slides: updatedSlides,
          content_name: updatedContentName,
          content_year: updatedContentYear
        });
      }
      function removeSlide(index) {
        var updatedSlides = slides.slice();
        updatedSlides.splice(index, 1);
        var updatedContentName = content_name.slice();
        updatedContentName.splice(index, 1);
        var updatedContentYear = content_year.slice();
        updatedContentYear.splice(index, 1);
        props.setAttributes({
          slides: updatedSlides,
          content_name: updatedContentName,
          content_year: updatedContentYear
        });
      }
      return el('div', {
        className: props.className
      }, el('div', {
        className: 'block-edit-form'
      }, el('div', {
        className: 'customizer-bar'
      }, el(TextControl, {
        label: __('Title', 'your-plugin'),
        value: title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: __('Paragraph', 'your-plugin'),
        value: paragraph,
        onChange: onParagraphChange
      })), el('div', {
        className: 'carousel'
      }, slides.map(function (slide, index) {
        if (index === 0) {
          return null;
        }
        return el('div', {
          key: index
        }, el(TextControl, {
          tagName: 'div',
          multiline: true,
          label: __('Content', 'your-plugin'),
          placeholder: __('Enter slide content...', 'your-plugin'),
          value: slide,
          onChange: function onChange(value) {
            onSlideChange(value, index);
          }
        }), el(TextControl, {
          label: __('Content Name', 'your-plugin'),
          value: content_name[index],
          onChange: function onChange(value) {
            onContentNameChange(value, index);
          }
        }), el(TextControl, {
          label: __('Content Name', 'your-plugin'),
          value: content_year[index],
          onChange: function onChange(value) {
            onContentYearChange(value, index);
          }
        }), el(components.IconButton, {
          icon: 'no-alt',
          onClick: function onClick() {
            removeSlide(index);
          },
          label: __('Remove Slide', 'your-plugin')
        }));
      }), el('div', null, el(components.IconButton, {
        icon: 'plus',
        onClick: addSlide,
        label: __('Add Slide', 'your-plugin')
      })))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || '';
      var paragraph = attributes.paragraph || '';
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      var slideElements = slides.map(function (slide, index) {
        if (index != 0) {
          return el('div', {
            key: index
          }, el('div', {
            dangerouslySetInnerHTML: {
              __html: slide
            }
          }), el('div', {
            className: 'name'
          }, content_name[index]),
          // Add the content_name within a new <div>
          el('div', {
            className: 'name_year'
          }, content_year[index]) // Add the content_name within a new <div>
          );
        }
      });

      return el('div', {
        className: props.className + 'main-wrapper'
      }, el('div', {
        className: 'wp-block-blocks-paragraph'
      }, el('div', {
        style: 'padding:20px'
      }, el('h2', {
        style: 'color:#000000'
      }, title), el('p', {
        style: 'color:#000000'
      }, paragraph))), el('div', {
        className: 'carousel'
      }, slideElements));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cleveland/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cleveland/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/cleveland/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var SelectControl = components.SelectControl;
  var __ = wp.i18n.__;
  var registerBlockType = blocks.registerBlockType;
  registerBlockType("blocks/cleveland", {
    title: __("Cleveland", "my-plugin"),
    icon: "admin-settings",
    category: "common",
    attributes: {
      mainTitle: {
        type: "string",
        default: ""
      },
      subTitlecleveland: {
        type: "string",
        default: ""
      },
      fields: {
        type: "array",
        default: [{
          title: "",
          selectOption: "fa fa-area-chart"
        }]
      },
      buttonName: {
        type: "string",
        default: ""
      },
      buttonLink: {
        type: "string",
        default: ""
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var mainTitle = attributes.mainTitle;
      var subTitlecleveland = attributes.subTitlecleveland;
      var fields = attributes.fields;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;
      var onMainTitleChange = function onMainTitleChange(value) {
        setAttributes({
          mainTitle: value
        });
      };
      var onsubTitleChange = function onsubTitleChange(value) {
        setAttributes({
          subTitlecleveland: value
        });
      };
      var onFieldChange = function onFieldChange(value, index, field) {
        var updatedFields = fields.slice();
        updatedFields[index][field] = value;
        setAttributes({
          fields: updatedFields
        });
      };
      var onButtonNameChange = function onButtonNameChange(value) {
        setAttributes({
          buttonName: value
        });
      };
      var onButtonLinkChange = function onButtonLinkChange(value) {
        setAttributes({
          buttonLink: value
        });
      };
      var addField = function addField() {
        var updatedFields = fields.slice();
        updatedFields.push({
          title: "",
          selectOption: "option1"
        });
        setAttributes({
          fields: updatedFields
        });
      };
      var removeField = function removeField(index) {
        var updatedFields = fields.slice();
        updatedFields.splice(index, 1);
        setAttributes({
          fields: updatedFields
        });
      };
      return el("div", {
        className: "my-block"
      }, el(TextControl, {
        label: __("Sub Title", "my-plugin"),
        value: subTitlecleveland,
        onChange: onsubTitleChange
      }), el(TextControl, {
        label: __("Main Title", "my-plugin"),
        value: mainTitle,
        onChange: onMainTitleChange
      }), el(TextControl, {
        label: __("Button Name", "my-plugin"),
        value: buttonName,
        onChange: onButtonNameChange
      }), el(TextControl, {
        label: __("Button link", "my-plugin"),
        value: buttonLink,
        onChange: onButtonLinkChange
      }), fields.map(function (field, index) {
        return el("div", {
          key: index
        }, el(TextControl, {
          label: __("Sub Title", "my-plugin"),
          value: field.title,
          onChange: function onChange(value) {
            return onFieldChange(value, index, "title");
          }
        }), el(SelectControl, {
          label: __("Select Option", "my-plugin"),
          value: field.selectOption,
          options: [{
            label: "Anchor",
            value: "	fa fa-anchor"
          }, {
            label: "Archive",
            value: "fa fa-archive"
          }, {
            label: "Chart",
            value: "fa fa-area-chart"
          }, {
            label: "Award",
            value: "fas fa-award"
          }],
          onChange: function onChange(value) {
            return onFieldChange(value, index, "selectOption");
          }
        }), el("button", {
          onClick: function onClick() {
            return removeField(index);
          }
        }, "Remove"));
      }), el("button", {
        onClick: addField
      }, "Add Field"));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var mainTitle = attributes.mainTitle;
      var fields = attributes.fields;
      var buttonName = attributes.buttonName;
      var subTitlecleveland = attributes.subTitlecleveland;
      var buttonLink = attributes.buttonLink;
      return el("div", {
        className: "my-block"
      }, el("div", {
        className: "abs1 move-down"
      }, "W"), el("div", {
        className: "abs2 move-up"
      }, "H"), el("div", {
        className: "abs3 move-down"
      }, "Y"), el("div", {
        className: "main-wrapper move-up2"
      }, el("h5", null, subTitlecleveland), el("h1", null, mainTitle), el("div", {
        className: "container"
      }, el("div", {
        className: "row"
      }, fields.map(function (field, index) {
        return el("div", {
          key: index,
          className: "col-md-4"
        }, el("i", {
          className: field.selectOption
        }), el("h3", null, field.title));
      })), el("a", {
        href: buttonLink,
        className: "primary"
      }, buttonName))));
    }
  });
})(wp.blocks, wp.element, wp.components, wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/column/index.js":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/column/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/column/style.scss");

(function (blocks, editor, components, i18n) {
  var el = wp.element.createElement;
  var registerBlockType = blocks.registerBlockType;
  var SelectControl = components.SelectControl;
  var ColorPalette = components.ColorPalette;
  var getColorClassName = editor.getColorClassName;
  registerBlockType('blocks/column', {
    title: i18n.__('Column Block', 'your-plugin'),
    icon: 'editor-table',
    category: 'common',
    attributes: {
      backgroundColor: {
        type: 'string',
        default: '#ffffff'
      },
      textColor: {
        type: 'string',
        default: '#000000'
      },
      columns: {
        type: 'number',
        default: 2
      },
      columnContent: {
        type: 'array',
        default: ['Column 1 Content', 'Column 2 Content']
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setBackgroundColor = function setBackgroundColor(color) {
        props.setAttributes({
          backgroundColor: color
        });
      };
      var setTextColor = function setTextColor(color) {
        props.setAttributes({
          textColor: color
        });
      };
      var setColumns = function setColumns(value) {
        var _columnContent;
        var columnContent = attributes.columnContent;
        if (value > columnContent.length) {
          // If the new number of columns is greater than the current content array length, add empty content for the new columns
          var newColumns = Array(value - columnContent.length).fill('');
          columnContent = columnContent.concat(newColumns);
        } else if (value < columnContent.length) {
          // If the new number of columns is less than the current content array length, truncate the content array
          columnContent = columnContent.slice(0, value);
        }
        props.setAttributes({
          columns: value,
          columnContent: (_columnContent = columnContent) !== null && _columnContent !== void 0 ? _columnContent : 'Content here'
        });
      };
      var setColumnContent = function setColumnContent(value, index) {
        var columnContent = attributes.columnContent.map(function (content, idx) {
          return idx === index ? value : content;
        });
        props.setAttributes({
          columnContent: columnContent
        });
      };
      return el('div', {
        className: props.className
      }, el(editor.InspectorControls, {}, el(components.PanelBody, {
        title: i18n.__('Color Settings', 'your-plugin'),
        initialOpen: true
      }, el(components.PanelRow, {}, el(components.ColorPalette, {
        colors: [{
          color: '#ffffff',
          name: 'White'
        }, {
          color: '#000000',
          name: 'Black'
        }, {
          color: '#ff0000',
          name: 'Red'
        }, {
          color: '#00ff00',
          name: 'Green'
        }, {
          color: '#0000ff',
          name: 'Blue'
        }, {
          color: '#06038d',
          name: 'Dark Blue'
        }, {
          color: '#6C7175',
          name: 'Gray'
        }, {
          color: '#eaeaea',
          name: 'Gray'
        }, {
          color: '#f5f5f5',
          name: 'light'
        }],
        value: attributes.backgroundColor,
        onChange: setBackgroundColor,
        disableCustomColors: true
      })), el(components.PanelRow, {}, el(components.ColorPalette, {
        colors: [{
          color: '#ffffff',
          name: 'White'
        }, {
          color: '#000000',
          name: 'Black'
        }, {
          color: '#ff0000',
          name: 'Red'
        }, {
          color: '#00ff00',
          name: 'Green'
        }, {
          color: '#0000ff',
          name: 'Blue'
        }, {
          color: '#06038d',
          name: 'Dark Blue'
        }, {
          color: '#6C7175',
          name: 'Gray'
        }, {
          color: '#eaeaea',
          name: 'Gray'
        }, {
          color: '#f5f5f5',
          name: 'light'
        }],
        value: attributes.textColor,
        onChange: setTextColor,
        disableCustomColors: true
      }))), el(components.PanelBody, {
        title: i18n.__('Column Settings', 'your-plugin'),
        initialOpen: true
      }, el(components.PanelRow, {}, el(SelectControl, {
        label: i18n.__('Number of Columns', 'your-plugin'),
        value: attributes.columns,
        options: [{
          label: '2',
          value: 2
        }, {
          label: '3',
          value: 3
        }, {
          label: '4',
          value: 4
        }],
        onChange: setColumns
      })))), el('div', {
        className: getColorClassName('background-color', attributes.backgroundColor),
        style: {
          display: 'flex',
          backgroundColor: attributes.backgroundColor,
          color: attributes.textColor,
          margin: '0px',
          padding: '0px'
        }
      }, attributes.columnContent.map(function (content, index) {
        return el('div', {
          className: 'column',
          style: {
            flex: '1'
          }
        }, el(editor.RichText, {
          tagName: 'div',
          value: content,
          onChange: function onChange(value) {
            setColumnContent(value, index);
          },
          placeholder: 'Enter your content here'
        }));
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        className: getColorClassName('background-color', attributes.backgroundColor),
        style: {
          display: 'flex',
          backgroundColor: attributes.backgroundColor,
          color: attributes.textColor,
          margin: '0px',
          padding: '0px'
        }
      }, attributes.columnContent.map(function (content, index) {
        return el('div', {
          className: 'column',
          style: {
            flex: '1',
            padding: '36px'
          }
        }, content);
      }));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.components, window.wp.i18n);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-info/index.js":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-info/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/contact-info/style.scss");


(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var IconButton = components.IconButton;
  var PanelBody = components.PanelBody;
  var InspectorControls = editor.InspectorControls;
  var Fragment = element.Fragment;
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/contact-info", {
    title: __("Contact Info", "your-plugin"),
    description: __("This is a Block"),
    icon: "businessperson",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: ""
      },
      contacts: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var contacts = attributes.contacts;
      function updateContact(index, field, value) {
        var updatedContacts = contacts.slice();
        updatedContacts[index][field] = value;
        props.setAttributes({
          contacts: updatedContacts
        });
      }
      function addContact() {
        var updatedContacts = contacts.slice();
        updatedContacts.push({
          first_name_title: "",
          first_name: ""
        });
        props.setAttributes({
          contacts: updatedContacts
        });
      }
      function removeContact(index) {
        var updatedContacts = contacts.slice();
        updatedContacts.splice(index, 1);
        props.setAttributes({
          contacts: updatedContacts
        });
      }
      var contactList = contacts.map(function (contact, index) {
        return el("li", {
          key: index
        }, el(TextControl, {
          label: __("Title", "your-plugin"),
          value: contact.first_name_title,
          onChange: function onChange(value) {
            updateContact(index, "first_name_title", value);
          }
        }), el(TextControl, {
          label: __("Content", "your-plugin"),
          value: contact.first_name,
          onChange: function onChange(value) {
            updateContact(index, "first_name", value);
          }
        }), el(IconButton, {
          icon: "trash",
          label: __("Delete", "your-plugin"),
          onClick: function onClick() {
            removeContact(index);
          }
        }));
      });
      return el(Fragment, null, el(InspectorControls, null, el("div", {
        className: props.className
      }, el(TextControl, {
        label: __("Title", "your-plugin"),
        value: title,
        onChange: function onChange(value) {
          props.setAttributes({
            title: value
          });
        }
      }), el("ul", {
        className: "contact-list"
      }, contactList), el(IconButton, {
        icon: "plus",
        label: __("Add Contact", "your-plugin"),
        onClick: addContact
      }))), el("div", {
        className: "wp-block-blocks-contact-info widget faculty-card mb-4"
      }, el("h4", null, title), el("div", {
        className: "faculty-card__contact"
      }, contacts.map(function (contact, index) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: index
        }, contact.first_name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          class: "c-heading"
        }, contact.first_name_title, " "), isPhoneNumber(contact.first_name) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          className: "link-underline",
          href: "tel:".concat(contact.first_name)
        }, contact.first_name)) : isValidEmail(contact.first_name) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          className: "link-underline",
          href: "mailto:".concat(contact.first_name)
        }, contact.first_name)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, contact.first_name)));
      }))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var contacts = attributes.contacts;
      var contactList = contacts.map(function (contact, index) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: index
        }, contact.first_name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          class: "c-heading"
        }, contact.first_name_title, " "), isPhoneNumber(contact.first_name) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          className: "link-underline",
          href: "tel:".concat(contact.first_name)
        }, contact.first_name)) : isValidEmail(contact.first_name) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          className: "link-underline",
          href: "mailto:".concat(contact.first_name)
        }, contact.first_name)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, contact.first_name)));
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "widget faculty-card mb-4"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "faculty-card__contact"
      }, contactList));
    }
  });

  // Function to check if a string is a phone number
  function isPhoneNumber(value) {
    // Regular expression to match phone numbers with optional country code
    var phoneNumberPattern = /^(\+?\d{1,4}[\s-]?)?\d{10}$/;
    return phoneNumberPattern.test(value);
  }

  // Function to check if a string is a valid email address
  function isValidEmail(value) {
    // Regular expression to validate email addresses
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(value);
  }
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/index.js":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/style.scss");

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
        default: ''
      },
      sub_title: {
        type: 'string',
        default: ''
      },
      email: {
        type: 'string',
        default: ''
      },
      perticular: {
        type: 'string',
        default: ''
      },
      contact: {
        type: 'string',
        default: ''
      },
      second_email: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var title = attributes.title || '';
      var sub_title = attributes.sub_title || '';
      var email = attributes.email || '';
      var perticular = attributes.perticular || '';
      var contact = attributes.contact || '';
      var second_email = attributes.second_email || '';
      function onTitleChange(value) {
        props.setAttributes({
          title: value
        });
      }
      function onSubTitleChange(value) {
        props.setAttributes({
          sub_title: value
        });
      }
      function onEmailChange(value) {
        props.setAttributes({
          email: value
        });
      }
      function onPerticularChange(value) {
        props.setAttributes({
          perticular: value
        });
      }
      function onContactChange(value) {
        props.setAttributes({
          contact: value
        });
      }
      function onSecondEmailChange(value) {
        props.setAttributes({
          second_email: value
        });
      }
      return el('div', {
        className: props.className
      }, el(TextControl, {
        label: __('Title', 'your-plugin'),
        value: title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: __('Sub Title', 'your-plugin'),
        value: sub_title,
        onChange: onSubTitleChange
      }), el(TextControl, {
        label: __('Email', 'your-plugin'),
        value: email,
        onChange: onEmailChange
      }), el(TextControl, {
        label: __('Perticular', 'your-plugin'),
        value: perticular,
        onChange: onPerticularChange
      }), el(TextControl, {
        label: __('Contact', 'your-plugin'),
        value: contact,
        onChange: onContactChange
      }), el(TextControl, {
        label: __('Second Email', 'your-plugin'),
        value: second_email,
        onChange: onSecondEmailChange
      }));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var title = attributes.title || '';
      var sub_title = attributes.sub_title || '';
      var email = attributes.email || '';
      var perticular = attributes.perticular || '';
      var contact = attributes.contact || '';
      var second_email = attributes.second_email || '';
      return el('div', {
        className: props.className
      }, el('div', {
        className: 'container'
      }, el('div', {
        className: 'row main-wrapper'
      }, el('div', {
        className: 'col-lg-6'
      }, el('h2', null, title), el('h6', null, sub_title), el('a', {
        href: "mailto:" + email,
        className: 'contact-us-2-block-email'
      }, email)), el('div', {
        className: 'col-lg-6 bg-color'
      }, el('p', null, perticular), el('a', {
        href: "tel:" + contact
      }, contact), el('a', {
        href: "mailto:" + second_email
      }, second_email)))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-us/index.js":
/*!***********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-us/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/contact-us/style.scss");

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
        default: ''
      },
      paragraph1: {
        type: 'string',
        default: ''
      },
      paragraph2: {
        type: 'string',
        default: ''
      },
      backgroundColor: {
        type: 'string',
        default: ''
      },
      isBackgroundOpen: {
        type: 'boolean',
        default: true
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph1 = attributes.paragraph1;
      var paragraph2 = attributes.paragraph2;
      var backgroundColor = attributes.backgroundColor;
      var isBackgroundOpen = attributes.isBackgroundOpen;
      function onHeadingChange(value) {
        props.setAttributes({
          heading: value
        });
      }
      function onParagraph1Change(value) {
        props.setAttributes({
          paragraph1: value
        });
      }
      function onParagraph2Change(value) {
        props.setAttributes({
          paragraph2: value
        });
      }
      function onBackgroundColorChange(value) {
        props.setAttributes({
          backgroundColor: value
        });
      }
      function onBackgroundToggleChange(value) {
        props.setAttributes({
          isBackgroundOpen: value
        });
      }
      var blockClasses = ['custom-block'];
      if (backgroundColor && isBackgroundOpen) {
        blockClasses.push('has-background');
      }
      return el('div', {
        className: blockClasses.join(' ')
      },
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
        onChange: onParagraph2Change
      }), el(components.ToggleControl, {
        label: __('Background Color', 'your-plugin'),
        checked: isBackgroundOpen,
        onChange: onBackgroundToggleChange
      }),
      // isBackgroundOpen && el(ColorPicker, {
      //   label: __('Choose Background Color', 'your-plugin'),
      //   color: backgroundColor,
      //   onChangeComplete: function (color) {
      //     onBackgroundColorChange(color.hex);
      //   },
      // }),
      el('div', {
        className: 'main-wrapper',
        style: {
          backgroundColor: backgroundColor
        }
      }, paragraph2 && el('p', {
        className: 'section-paragraph'
      }, paragraph2)));
    },
    save: function save(props) {
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
      } else {
        bgcolor = '#eaeaea';
      }
      return el('div', {
        className: blockClasses.join(' '),
        style: {
          backgroundColor: bgcolor
        }
      }, el('div', {
        className: 'main-wrapper'
      }, paragraph2 && el('p', {
        className: 'section-paragraph'
      }, paragraph2)));
    }
  });

  // Register the block's sidebar controls
  var registerPlugin = data.plugins.__experimentalCreateInterpolateElement;
  if (registerPlugin) {
    registerPlugin('wp-blocks/contact-us', 'edit-post/block-sidebar', {
      render: function render(props) {
        var _wp$components = wp.components,
          PanelBody = _wp$components.PanelBody,
          ToggleControl = _wp$components.ToggleControl;
        function onBackgroundColorToggleChange(value) {
          props.setAttributes({
            backgroundColor: value ? '#06038d' : ''
          });
        }
        function onBackgroundOpenToggleChange(value) {
          props.setAttributes({
            isBackgroundOpen: value
          });
        }
        return el(PanelBody, {
          title: __('Contact Us Settings', 'your-plugin'),
          icon: 'admin-settings',
          initialOpen: true
        }, el(ToggleControl, {
          label: __('Show Background Color', 'your-plugin'),
          checked: !!props.attributes.backgroundColor,
          onChange: onBackgroundColorToggleChange
        }), el(ToggleControl, {
          label: __('Open Background Color', 'your-plugin'),
          checked: props.attributes.isBackgroundOpen,
          onChange: onBackgroundOpenToggleChange
        }));
      }
    });
  }
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor, window.wp.data);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/css/index.js":
/*!****************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/css/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/css/style.scss");


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta-2/index.js":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta-2/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/cta-2/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  registerBlockType("blocks/cta-2", {
    title: "Cta Block 2",
    icon: "smiley",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "Default Title"
      },
      description: {
        type: "string",
        default: "Default Description"
      },
      button1Name: {
        type: "string",
        default: "Button 1"
      },
      button1Link: {
        type: "string",
        default: "#"
      },
      button2Name: {
        type: "string",
        default: "Button 2"
      },
      button2Link: {
        type: "string",
        default: "#"
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2"
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onTitleChange(newTitle) {
        setAttributes({
          title: newTitle
        });
      }
      function onDescriptionChange(newDescription) {
        setAttributes({
          description: newDescription
        });
      }
      function onButton1NameChange(newName) {
        setAttributes({
          button1Name: newName
        });
      }
      function onButton1LinkChange(newLink) {
        setAttributes({
          button1Link: newLink
        });
      }
      function onButton2NameChange(newName) {
        setAttributes({
          button2Name: newName
        });
      }
      function onButton2LinkChange(newLink) {
        setAttributes({
          button2Link: newLink
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: "Background Color",
        colorSettings: [{
          label: "Background Color",
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el("div", {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: "20px"
        }
      }, el(TextControl, {
        label: "Title",
        value: attributes.title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: "Description",
        value: attributes.description,
        onChange: onDescriptionChange
      }), el(TextControl, {
        label: "Button 1 Name",
        value: attributes.button1Name,
        onChange: onButton1NameChange
      }), el(URLInput, {
        label: "Button 1 Link",
        value: attributes.button1Link,
        onChange: onButton1LinkChange
      }), el(TextControl, {
        label: "Button 2 Name",
        value: attributes.button2Name,
        onChange: onButton2NameChange
      }), el(URLInput, {
        label: "Button 2 Link",
        value: attributes.button2Link,
        onChange: onButton2LinkChange
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        style: {
          backgroundColor: attributes.backgroundColor
        }
      }, el("div", {
        className: "container"
      }, el("div", {
        className: "main-wrapper"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "col-md-6"
      }, el("div", {
        className: "part-1"
      }, el("h1", null, attributes.title), el("p", null, attributes.description))), el("div", {
        className: "col-md-6"
      }, el("div", {
        className: "part-2"
      }, el("a", {
        href: attributes.button1Link,
        className: "button1-class primary"
      }, attributes.button1Name), el("a", {
        href: attributes.button2Link,
        className: "button2-class primary"
      }, attributes.button2Name)))))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta-3/index.js":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta-3/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/cta-3/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  registerBlockType("blocks/cta-3", {
    title: "Cta Block 3",
    icon: "smiley",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "Default Title"
      },
      description: {
        type: "string",
        default: "Default Description"
      },
      button1Name: {
        type: "string",
        default: "Button 1"
      },
      button1Link: {
        type: "string",
        default: "#"
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2"
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onTitleChange(newTitle) {
        setAttributes({
          title: newTitle
        });
      }
      function onDescriptionChange(newDescription) {
        setAttributes({
          description: newDescription
        });
      }
      function onButton1NameChange(newName) {
        setAttributes({
          button1Name: newName
        });
      }
      function onButton1LinkChange(newLink) {
        setAttributes({
          button1Link: newLink
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: "Background Color",
        colorSettings: [{
          label: "Background Color",
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el("div", {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: "20px"
        }
      }, el(TextControl, {
        label: "Title",
        value: attributes.title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: "Description",
        value: attributes.description,
        onChange: onDescriptionChange
      }), el(TextControl, {
        label: "Button 1 Name",
        value: attributes.button1Name,
        onChange: onButton1NameChange
      }), el(URLInput, {
        label: "Button 1 Link",
        value: attributes.button1Link,
        onChange: onButton1LinkChange
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: "20px"
        }
      }, el("div", {
        className: "container"
      }, el("div", {
        className: "main-wrapper"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "part-1"
      }, el("h2", null, attributes.title), el("p", null, attributes.description)), el("div", {
        className: "part-2"
      }, el("a", {
        href: attributes.button1Link,
        className: "secondary"
      }, attributes.button1Name))))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta/index.js":
/*!****************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/cta/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  var GradientColorPicker = components.GradientColorPicker;
  registerBlockType("blocks/cta", {
    title: "Cta Block",
    icon: "smiley",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "Default Title"
      },
      description: {
        type: "string",
        default: "Default Description"
      },
      button1Name: {
        type: "string",
        default: "Button 1"
      },
      button1Link: {
        type: "string",
        default: "#"
      },
      button2Name: {
        type: "string",
        default: "Button 2"
      },
      button2Link: {
        type: "string",
        default: "#"
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2"
      },
      gradientColor: {
        type: "string",
        default: "linear-gradient(0deg, #06038D 58%, #030247 100%)"
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onTitleChange(newTitle) {
        setAttributes({
          title: newTitle
        });
      }
      function onDescriptionChange(newDescription) {
        setAttributes({
          description: newDescription
        });
      }
      function onButton1NameChange(newName) {
        setAttributes({
          button1Name: newName
        });
      }
      function onButton1LinkChange(newLink) {
        setAttributes({
          button1Link: newLink
        });
      }
      function onButton2NameChange(newName) {
        setAttributes({
          button2Name: newName
        });
      }
      function onButton2LinkChange(newLink) {
        setAttributes({
          button2Link: newLink
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      function onGradientColorChange(newGradientColor) {
        setAttributes({
          gradientColor: newGradientColor
        });
      }
      return el(Fragment, null, el(InspectorControls, null), el("div", {
        style: {
          background: "linear-gradient(0deg, #06038D 58%, #030247 100%)",
          padding: "20px"
        }
      }, el(TextControl, {
        label: "Title",
        value: attributes.title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: "Description",
        value: attributes.description,
        onChange: onDescriptionChange
      }), el(TextControl, {
        label: "Button 1 Name",
        value: attributes.button1Name,
        onChange: onButton1NameChange
      }), el(URLInput, {
        label: "Button 1 Link",
        value: attributes.button1Link,
        onChange: onButton1LinkChange
      }), el(TextControl, {
        label: "Button 2 Name",
        value: attributes.button2Name,
        onChange: onButton2NameChange
      }), el(URLInput, {
        label: "Button 2 Link",
        value: attributes.button2Link,
        onChange: onButton2LinkChange
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        style: {
          background: "linear-gradient(0deg, #06038D 58%, #030247 100%)"
        }
      }, el("div", {
        className: "container"
      }, el("div", {
        className: "main-wrapper"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "col-md-7"
      }, el("div", {
        className: "part-1"
      }, el("h2", null, attributes.title), el("p", null, attributes.description))), el("div", {
        className: "col-md-5"
      }, el("div", {
        className: "part-2"
      }, el("a", {
        href: attributes.button1Link,
        className: "secondary"
      }, attributes.button1Name), el("a", {
        href: attributes.button2Link,
        className: "secondary-two"
      }, attributes.button2Name)))))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/index.js":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  var SelectControl = components.SelectControl;
  registerBlockType('blocks/cta-link-arrow', {
    title: 'CTA Link Arrow',
    icon: 'smiley',
    category: 'common',
    attributes: {
      buttons: {
        type: 'array',
        default: [{
          buttonName: 'Link One',
          buttonLink: '#',
          buttonType: 'Link-one'
        }]
      },
      backgroundColor: {
        type: 'string',
        default: '#F2F2F2'
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onButtonNameChange(index, newName) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonName = newName;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonLinkChange(index, newLink) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonLink = newLink;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonTypeChange(index, newType) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonType = newType;
        setAttributes({
          buttons: buttons
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      function addButton() {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.push({
          buttonName: 'New Link',
          buttonLink: '#',
          buttonType: 'Link-one'
        });
        setAttributes({
          buttons: buttons
        });
      }
      function removeButton(index) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.splice(index, 1);
        setAttributes({
          buttons: buttons
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: 'Background Color',
        colorSettings: [{
          label: 'Background Color',
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el(Fragment, {
          key: index
        }, el(TextControl, {
          label: 'CTA Link Name',
          value: button.buttonName,
          onChange: function onChange(newName) {
            onButtonNameChange(index, newName);
          }
        }), el(URLInput, {
          label: 'CTA Link Url',
          value: button.buttonLink,
          onChange: function onChange(newLink) {
            onButtonLinkChange(index, newLink);
          }
        }), el(SelectControl, {
          label: 'Link Type',
          value: button.buttonType,
          options: [{
            value: 'link-cta',
            label: 'Link-Cta Arrow'
          }, {
            value: 'link-cta-disabled',
            label: 'Link Cta Disabled'
          }],
          onChange: function onChange(newType) {
            onButtonTypeChange(index, newType);
          }
        }), el('button', {
          className: 'button-remove',
          onClick: function onClick() {
            removeButton(index);
          }
        }, 'Remove Link'));
      }), el('button', {
        className: 'button-add',
        onClick: addButton
      }, 'Add Link')));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el('a', {
          href: button.buttonLink,
          className: button.buttonType + '  font-arrow',
          'data-type': button.buttonType,
          key: index
        }, button.buttonName, el('i', {
          className: 'fa fa-chevron-right',
          style: {
            margin: '0px 0px 0px 6px'
          }
        }));
      }));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/ctalink/index.js":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/ctalink/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/ctalink/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  var SelectControl = components.SelectControl;
  registerBlockType('blocks/cta-link', {
    title: 'CTA Link',
    icon: 'smiley',
    category: 'common',
    attributes: {
      buttons: {
        type: 'array',
        default: [{
          buttonName: 'Link One',
          buttonLink: '#',
          buttonType: 'Link-one'
        }]
      },
      backgroundColor: {
        type: 'string',
        default: '#F2F2F2'
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onButtonNameChange(index, newName) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonName = newName;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonLinkChange(index, newLink) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonLink = newLink;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonTypeChange(index, newType) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonType = newType;
        setAttributes({
          buttons: buttons
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      function addButton() {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.push({
          buttonName: 'New Link',
          buttonLink: '#',
          buttonType: 'Link-one'
        });
        setAttributes({
          buttons: buttons
        });
      }
      function removeButton(index) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.splice(index, 1);
        setAttributes({
          buttons: buttons
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: 'Background Color',
        colorSettings: [{
          label: 'Background Color',
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el(Fragment, {
          key: index
        }, el(TextControl, {
          label: 'CTA Link Name',
          value: button.buttonName,
          onChange: function onChange(newName) {
            onButtonNameChange(index, newName);
          }
        }), el(URLInput, {
          label: 'CTA Link Url',
          value: button.buttonLink,
          onChange: function onChange(newLink) {
            onButtonLinkChange(index, newLink);
          }
        }), el(SelectControl, {
          label: 'Link Type',
          value: button.buttonType,
          options: [{
            value: 'link-one',
            label: 'Link-one'
          }, {
            value: 'link-two',
            label: 'Link-Two(For Bg Color)'
          }, {
            value: 'link-cta',
            label: 'Link-Cta'
          }, {
            value: 'link-cta-disabled',
            label: 'Link Cta Disabled'
          }],
          onChange: function onChange(newType) {
            onButtonTypeChange(index, newType);
          }
        }), el('button', {
          className: 'button-remove',
          onClick: function onClick() {
            removeButton(index);
          }
        }, 'Remove Link'));
      }), el('button', {
        className: 'button-add',
        onClick: addButton
      }, 'Add Link')));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: '20px'
        }
      }, attributes.buttons.map(function (button, index) {
        return el('a', {
          href: button.buttonLink,
          className: button.buttonType,
          'data-type': button.buttonType,
          key: index
        }, button.buttonName);
      }));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/event/index.js":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/event/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/event/style.scss");


var registerBlockType = window.wp.blocks.registerBlockType;
var InspectorControls = window.wp.blockEditor.InspectorControls;
var _window$wp$components = window.wp.components,
  PanelBody = _window$wp$components.PanelBody,
  TextControl = _window$wp$components.TextControl,
  TextareaControl = _window$wp$components.TextareaControl,
  Button = _window$wp$components.Button,
  ToggleControl = _window$wp$components.ToggleControl;
var Fragment = window.wp.element.Fragment;
registerBlockType('blocks/event-block', {
  title: 'Event Block',
  category: 'common',
  attributes: {
    events: {
      type: 'array',
      default: [{
        date: '',
        startTime: '',
        endTime: '',
        eventName: '',
        description: '',
        link: ''
      }]
    },
    showEvents: {
      type: 'boolean',
      default: true
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var events = attributes.events,
      showEvents = attributes.showEvents;
    function onChangeEvent(newEvent, index) {
      var newEvents = Array.from(events);
      newEvents[index] = newEvent;
      setAttributes({
        events: newEvents
      });
    }
    function addEvent() {
      var newEvent = {
        startTime: '',
        endTime: '',
        eventName: '',
        description: '',
        link: '',
        date: ''
      };
      var newEvents = Array.from(events);
      newEvents.push(newEvent);
      setAttributes({
        events: newEvents
      });
    }
    function removeEvent(index) {
      var newEvents = Array.from(events);
      newEvents.splice(index, 1);
      setAttributes({
        events: newEvents
      });
    }
    function toggleShowEvents() {
      setAttributes({
        showEvents: !showEvents
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Event Details",
      initialOpen: true
    }, events.map(function (event, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Event ", index + 1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "Date ",
        type: "date",
        value: event.date,
        onChange: function onChange(dateT) {
          return onChangeEvent(Object.assign({}, event, {
            date: dateT
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "Start Time",
        type: "time",
        value: event.startTime,
        onChange: function onChange(newStartTime) {
          return onChangeEvent(Object.assign({}, event, {
            startTime: newStartTime
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "End Time",
        type: "time",
        value: event.endTime,
        onChange: function onChange(newEndTime) {
          return onChangeEvent(Object.assign({}, event, {
            endTime: newEndTime
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "Event Name",
        value: event.eventName,
        onChange: function onChange(newEventName) {
          return onChangeEvent(Object.assign({}, event, {
            eventName: newEventName
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
        label: "Description",
        value: event.description,
        onChange: function onChange(newDescription) {
          return onChangeEvent(Object.assign({}, event, {
            description: newDescription
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "Link",
        value: event.link,
        onChange: function onChange(newLink) {
          return onChangeEvent(Object.assign({}, event, {
            link: newLink
          }), index);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: function onClick() {
          return removeEvent(index);
        },
        isDestructive: true
      }, "Remove Event"));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: addEvent
    }, "Add Event")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Display Options",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Show Events Horizental / Vertical ",
      checked: showEvents,
      onChange: toggleShowEvents
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, events.map(function (event, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Event ", index + 1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Start Time: ", event.startTime), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "End Time: ", event.endTime), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Event Name: ", event.eventName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Description: ", event.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Link: ", event.link));
    })));
  },
  save: function save(props) {
    var attributes = props.attributes;
    var events = attributes.events,
      showEvents = attributes.showEvents;
    if (!showEvents) {
      //   return null; // Don't render anything if showEvents is false

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "row"
      }, events.map(function (event, index) {
        var startTime = new Date("01/01/2000 ".concat(event.startTime));
        var formattedStartTime = startTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        var endTime = new Date("01/01/2000 ".concat(event.endTime));
        var formattedEndTime = endTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        var eventDate = new Date(event.date);
        var monthAbbreviation = eventDate.toLocaleString('en-US', {
          month: 'short'
        });
        var day = eventDate.getDate();
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "col-md-4 onhover",
          style: {
            paddingBottom: '22px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "date-main"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, monthAbbreviation), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, day)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "main-div"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "main-time"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, formattedStartTime, " - ", formattedEndTime)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", null, event.eventName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, event.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: event.link,
          className: "font-arrow"
        }, "CTA  ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: "fa fa-chevron-right"
        }))));
      })));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, events.map(function (event, index) {
        var eventDate = new Date(event.date);
        var monthAbbreviation = eventDate.toLocaleString('en-US', {
          month: 'short'
        });
        var day = eventDate.getDate();
        var startTime = new Date("01/01/2000 ".concat(event.startTime));
        var formattedStartTime = startTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        var endTime = new Date("01/01/2000 ".concat(event.endTime));
        var formattedEndTime = endTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "row",
          key: index
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "col-md-6 onhover",
          style: {
            paddingBottom: '22px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "date-main"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, monthAbbreviation), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, day)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "main-div"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "main-time"
        }, formattedStartTime, " - ", formattedEndTime), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", null, event.eventName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, event.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: event.link,
          className: "font-arrow"
        }, "CTA ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: "fa fa-chevron-right"
        })))));
      }));
    }
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/featured-post/index.js":
/*!**************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/featured-post/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/featured-post/style.scss");

(function (blocks, element, components) {
  var el = element.createElement;
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/featured-post", {
    title: __("Featured Post ", "your-plugin"),
    icon: "admin-post",
    category: "common",
    edit: function edit(props) {
      return el("p", {}, __("Featured Post Added ", "your-plugin"));
    },
    save: function save() {
      return el(components.ServerSideRender, {
        block: "blocks/featured-post"
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/hero/index.js":
/*!*****************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/hero/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/hero/style.scss");

(function (blocks, editor, element, components) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var TextControl = components.TextControl;
  var SelectControl = components.SelectControl;
  blocks.registerBlockType("blocks/hero-block", {
    title: "Hero Block",
    icon: "format-image",
    category: "common",
    supports: {
      // Add support for the "inspector" panel
      inspector: true
    },
    attributes: {
      main_title: {
        type: "string",
        default: ""
      },
      sub_text: {
        type: "string",
        default: ""
      },
      cta_button_name: {
        type: "string",
        default: ""
      },
      cta_button_link: {
        type: "string",
        default: ""
      },
      select_option: {
        type: "string",
        default: "option1"
      },
      image: {
        type: "string",
        default: ""
      },
      repeater_fields: {
        type: "array",
        default: []
      },
      front_data: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function onChangeMainTitle(value) {
        props.setAttributes({
          main_title: value
        });
      }
      function onChangeSubText(value) {
        props.setAttributes({
          sub_text: value
        });
      }
      function onChangeCtaButtonName(value) {
        props.setAttributes({
          cta_button_name: value
        });
      }
      function onChangeCtaButtonLink(value) {
        props.setAttributes({
          cta_button_link: value
        });
      }
      function onChangeSelectOption(value) {
        props.setAttributes({
          select_option: value
        });
      }
      function handleAddField() {
        var newFields = attributes.repeater_fields.slice();
        newFields.push({
          title: "",
          select: "option1",
          select_url: ""
        });
        props.setAttributes({
          repeater_fields: newFields
        });
      }
      function handleChangeTitle(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].title = value;
        props.setAttributes({
          repeater_fields: updatedFields
        });
      }
      function handleChangeSelect(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].select = value;
        props.setAttributes({
          repeater_fields: updatedFields
        });
      }
      function handleUrl(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].select_url = value;
        props.setAttributes({
          repeater_fields: updatedFields
        });
      }
      function handleRemoveField(index) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields.splice(index, 1);
        props.setAttributes({
          repeater_fields: updatedFields
        });
      }
      function handleAddFrontData() {
        var newFrontData = attributes.front_data.slice();
        newFrontData.push("");
        props.setAttributes({
          front_data: newFrontData
        });
      }
      function handleChangeFrontData(index, value) {
        var updatedFrontData = attributes.front_data.slice();
        updatedFrontData[index] = value;
        props.setAttributes({
          front_data: updatedFrontData
        });
      }
      function handleRemoveFrontData(index) {
        var updatedFrontData = attributes.front_data.slice();
        updatedFrontData.splice(index, 1);
        props.setAttributes({
          front_data: updatedFrontData
        });
      }
      return el("div", {}, el("div", {
        className: "image-upload",
        style: {
          display: "inline-block"
        }
      }, el(MediaUpload, {
        onSelect: onSelectImage,
        type: "image",
        render: function render(mediaUploadProps) {
          return el("button", {
            onClick: mediaUploadProps.open,
            className: "components-button editor-post-featured-image__toggle",
            style: {
              backgroundSize: "cover"
            }
          }, attributes.image ? el("img", {
            src: attributes.image,
            alt: "Preview",
            className: "image-preview",
            style: {
              width: "100%",
              height: "100%"
            }
          }) : "Select Image");
        }
      })), el(TextControl, {
        type: "text",
        label: "Main Title",
        value: attributes.main_title,
        onChange: onChangeMainTitle
      }), el(TextControl, {
        type: "text",
        label: "Sub Text",
        value: attributes.sub_text,
        onChange: onChangeSubText
      }), el(TextControl, {
        type: "text",
        label: "CTA Button Name",
        value: attributes.cta_button_name,
        onChange: onChangeCtaButtonName
      }), el(TextControl, {
        type: "url",
        label: "CTA Button Link",
        value: attributes.cta_button_link,
        onChange: onChangeCtaButtonLink
      }), el("div", {
        className: "repeater-fields"
      }, el("button", {
        onClick: handleAddField
      }, "Add Card"), attributes.repeater_fields.map(function (field, index) {
        return el("div", {
          key: index
        }, el(TextControl, {
          type: "text",
          label: "Title",
          value: field.title,
          onChange: function onChange(value) {
            handleChangeTitle(index, value);
          }
        }), el(SelectControl, {
          label: "Select",
          value: field.select,
          options: [{
            label: "News & Events",
            value: "wp-content/themes/VisionPoint/assets/images/News_Events.svg"
          }, {
            label: "Orientation",
            value: "wp-content/themes/VisionPoint/assets/images/Orientation.svg"
          }, {
            label: "Advising",
            value: "wp-content/themes/VisionPoint/assets/images/advising.svg"
          }, {
            label: "Registration",
            value: "wp-content/themes/VisionPoint/assets/images/registration.svg"
          }],
          onChange: function onChange(value) {
            handleChangeSelect(index, value);
          }
        }), el(TextControl, {
          type: "text",
          label: "Link Url",
          value: field.select_url,
          onChange: function onChange(value) {
            handleUrl(index, value);
          }
        }), el("button", {
          onClick: function onClick() {
            handleRemoveField(index);
          }
        }, "Remove Card"));
      })), el("div", {
        className: "front-data-fields"
      }, el("button", {
        onClick: handleAddFrontData
      }, "Add Option on Select"), attributes.front_data.map(function (data, index) {
        return el("div", {
          key: index
        }, el(TextControl, {
          type: "text",
          label: "Add Option for Select",
          value: data,
          onChange: function onChange(value) {
            handleChangeFrontData(index, value);
          }
        }), el("button", {
          onClick: function onClick() {
            handleRemoveFrontData(index);
          }
        }, "Remove Option on Select"));
      })));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        className: "hero-block",
        style: "background-image:url(" + attributes.image + ")"
      }, attributes.image && el("img", {
        src: attributes.image,
        alt: "Preview",
        className: "image"
      }), el("div", {
        className: "container"
      }, el("div", {
        className: "hero-content"
      }, el("h1", {}, attributes.main_title), el("h4", {}, attributes.sub_text), el("h3", {}, el("span", {}, "I Am...")), el("select", {}, attributes.front_data.map(function (data, index) {
        return el("option", {
          key: index,
          value: data
        }, data
        // el('p', {}, data)
        // el('option', {  }, ),
        );
      })), el("a", {
        className: "btn btn-secondary",
        href: attributes.cta_button_link
      }, attributes.cta_button_name))), el("div", {
        className: "main-wrapper"
      }, el("div", {
        className: "container"
      }, attributes.repeater_fields.map(function (field, index) {
        return el("a", {
          href: field.select_url
        }, el("div", {
          key: index,
          className: "area"
        }, el("img", {
          src: "https://cscc.vpmdevtech.com/".concat(field.select)
        }), el("h4", {}, field.title)));
      }))));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/imagetext/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/imagetext/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/imagetext/style.scss");

(function (blocks, editor, element, components) {
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
      inspector: true
    },
    attributes: {
      image: {
        type: 'string',
        default: ''
      },
      title: {
        type: 'string',
        default: ''
      },
      imagetext: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function onChangeTitle(value) {
        props.setAttributes({
          title: value
        });
      }
      function onChangeImageText(value) {
        // var value = event.target.value;
        props.setAttributes({
          imagetext: value
        });
      }
      return el('div', {}, el('div', {
        style: {
          display: 'inline-block'
        }
      }, el(MediaUpload, {
        onSelect: onSelectImage,
        type: 'image',
        render: function render(mediaUploadProps) {
          return el('button', {
            onClick: mediaUploadProps.open,
            className: 'components-button editor-post-featured-image__toggle',
            style: {
              backgroundSize: 'cover'
            } // Apply fill style to the button
          }, attributes.image ? el('img', {
            src: attributes.image,
            alt: 'Preview',
            className: 'image-preview-small',
            style: {
              width: '100%',
              height: '100%'
            }
          }) // Fix image size
          : 'Select Image');
        }
      })), el(TextControl, {
        type: 'text',
        className: 'components-text-control__input',
        placeholder: 'Enter title',
        value: attributes.title,
        onChange: onChangeTitle
      }), el(TextareaControl, {
        className: 'components-textarea-control__input',
        placeholder: 'Enter imagetext',
        value: attributes.imagetext,
        onChange: onChangeImageText
      }));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        className: 'card image-card'
      }, el('figure', {}, el('div', {
        className: 'img-grow'
      }, attributes.image && el('img', {
        src: attributes.image,
        alt: 'Preview'
      })), el('figcaption', {
        className: 'image-caption'
      }, el('div', {
        className: 'card-body'
      }, el('h4', {}, attributes.title), el('p', {}, attributes.imagetext)))));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/in-this-section/index.js":
/*!****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/in-this-section/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/in-this-section/style.scss");


var registerBlockType = window.wp.blocks.registerBlockType;
var InspectorControls = window.wp.blockEditor.InspectorControls;
var _window$wp$components = window.wp.components,
  SelectControl = _window$wp$components.SelectControl,
  PanelBody = _window$wp$components.PanelBody,
  TextControl = _window$wp$components.TextControl; // Import TextControl
var withSelect = wp.data.withSelect;
var RawHTML = wp.element.RawHTML;
var Fragment = window.wp.element.Fragment;
var __ = wp.i18n.__;
registerBlockType("blocks/in-this-section", {
  title: "In This Section 2",
  icon: "admin-post",
  category: "common",
  attributes: {
    selectedMenu: {
      type: "string",
      default: ""
    },
    menuItems: {
      type: "array",
      default: []
    },
    heading: {
      type: "string",
      default: "In This Section"
    }
  },
  edit: withSelect(function (select) {
    return {
      menus: select("core").getEntityRecords("taxonomy", "nav_menu", {
        per_page: -1
      }),
      posts: select("core").getEntityRecords("postType", "nav_menu_item", {
        _embed: true,
        per_page: -1
      })
    };
  })(function (_ref) {
    var menus = _ref.menus,
      posts = _ref.posts,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
    var menuOptions = menus ? menus.map(function (menu) {
      return {
        label: menu.name,
        value: menu.id
      };
    }) : [];
    if (!posts) {
      return null;
    }
    var getSubMenuItems = function getSubMenuItems(parentID) {
      return posts.filter(function (post) {
        return post.parent === parentID;
      });
    };
    var renderedItems = new Set();

    // Filter posts based on the selected menu
    var filteredPosts = attributes.selectedMenu ? posts.filter(function (post) {
      return post.menus == attributes.selectedMenu;
    }) : posts;
    setAttributes({
      menuItems: posts
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Event Details",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Heading",
      value: attributes.heading,
      onChange: function onChange(value) {
        return setAttributes({
          heading: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Select a Menu",
      value: attributes.selectedMenu,
      options: menuOptions,
      onChange: function onChange(value) {
        return setAttributes({
          selectedMenu: value
        });
      }
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "in-this-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, attributes.heading, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa\tfa fa-bars"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, filteredPosts.filter(function (item) {
      return !item.parent;
    }) // Only top-level menu items
    .map(function (item) {
      var hasSubItems = filteredPosts.some(function (subItem) {
        return subItem.parent === item.id;
      });
      renderedItems.add(item.id);
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: item.id,
        className: hasSubItems ? "drop-down" : ""
      }, hasSubItems ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, item.title.rendered, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-chevron-right"
      })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.url
      }, item.title.rendered), filteredPosts.some(function (subItem) {
        return subItem.parent == item.id && !renderedItems.has(subItem.id);
      }) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, filteredPosts.filter(function (subItem) {
        return subItem.parent == item.id && !renderedItems.has(subItem.id);
      }).map(function (subItem) {
        // Mark the sub-item as rendered to avoid duplicates
        renderedItems.add(subItem.id);
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: subItem.id
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: subItem.url
        }, subItem.title.rendered));
      })));
      return null;
    }))));
  }),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var selectedMenuItems = attributes.menuItems;
    var selectedMenu = attributes.selectedMenu;

    // Create a set to keep track of rendered items to avoid duplicates
    var renderedItems = new Set();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "in-this-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, attributes.heading, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa\tfa fa-bars"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, selectedMenuItems.map(function (item) {
      if (item.menus == selectedMenu && !renderedItems.has(item.id)) {
        // Mark the item as rendered to avoid duplicates
        var hasSubItems = selectedMenuItems.some(function (subItem) {
          return subItem.parent === item.id;
        });
        renderedItems.add(item.id);
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: item.id,
          className: hasSubItems ? "drop-down" : ""
        }, hasSubItems ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, item.title.rendered, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: "fa fa-chevron-right"
        })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: item.url
        }, item.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, selectedMenuItems.filter(function (subItem) {
          return subItem.parent == item.id && !renderedItems.has(subItem.id);
        }).map(function (subItem) {
          // Mark the sub-item as rendered to avoid duplicates
          renderedItems.add(subItem.id);
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
            key: subItem.id
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
            href: subItem.url
          }, subItem.title.rendered));
        })));
      }
      return null; // Skip items that have already been rendered as sub-items
    })));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/latest-news/index.js":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/latest-news/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/latest-news/style.scss");

(function (blocks, element, components) {
  var el = element.createElement;
  var __ = wp.i18n.__;
  blocks.registerBlockType('blocks/latest-custom-posts', {
    title: __('Latest News Posts', 'your-plugin'),
    icon: 'admin-post',
    category: 'common',
    edit: function edit(props) {
      return el('p', {}, __('Latest News Posts Block Added ', 'your-plugin'));
    },
    save: function save() {
      return el(components.ServerSideRender, {
        block: 'blocks/latest-custom-posts'
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/latest-programs/index.js":
/*!****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/latest-programs/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/latest-programs/style.scss");

(function (blocks, element, components) {
  var el = element.createElement;
  var __ = wp.i18n.__;
  blocks.registerBlockType('blocks/latest-programs', {
    title: __('Latest Program', 'your-plugin'),
    icon: 'admin-post',
    category: 'common',
    edit: function edit(props) {
      return el('p', {}, __('Latest Programs', 'your-plugin'));
    },
    save: function save() {
      return el(components.ServerSideRender, {
        block: 'blocks/latest-programs'
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/location/index.js":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/location/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/location/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var MediaUpload = editor.MediaUpload; // Use "editor.MediaUpload" instead of "wp.editor.MediaUpload"
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/location", {
    title: __("Location Block", "your-plugin"),
    // Corrected "testimonal" to "Testimonial"
    icon: "slides",
    category: "common",
    attributes: {
      slides: {
        type: "array",
        default: []
      },
      title: {
        type: "string",
        default: ""
      },
      paragraph: {
        type: "string",
        default: ""
      },
      content_name: {
        type: "array",
        default: []
      },
      content_year: {
        type: "array",
        default: []
      },
      images: {
        type: "array",
        default: []
      },
      sub_title: {
        default: []
      },
      url_more_button: {
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      var images = attributes.images || [];
      var sub_title = attributes.sub_title || [];
      var url_more_button = attributes.url_more_button || [];
      function onSlideChange(value, index) {
        var updatedSlides = slides.slice();
        updatedSlides[index] = value;
        props.setAttributes({
          slides: updatedSlides
        });
      }
      function onImagesChange(value, index) {
        var updatedImages = attributes.images.slice(); // Corrected "images" to "attributes.images"
        updatedImages[index] = value;
        props.setAttributes({
          images: updatedImages
        });
      }
      function onUrlMoreButtonChange(value, index) {
        var updatedUrlMoreButton = attributes.url_more_button.slice(); // Corrected "images" to "attributes.images"
        updatedUrlMoreButton[index] = value;
        props.setAttributes({
          url_more_button: updatedUrlMoreButton
        });
      }
      function onTitleChange(value) {
        props.setAttributes({
          title: value
        });
      }
      function onParagraphChange(value) {
        props.setAttributes({
          paragraph: value
        });
      }

      //   function onContentNameChange(value, index) {
      //     var updatedContentName = content_name.slice();
      //     updatedContentName[index] = value;
      //     props.setAttributes({ content_name: updatedContentName });
      //   }

      function onContentSubTitleChange(value, index) {
        var updatedContentName = sub_title.slice();
        updatedContentName[index] = value;
        props.setAttributes({
          sub_title: updatedContentName
        });
      }

      //   function onContentYearChange(value, index) {
      //     var updatedContentYear = content_year.slice();
      //     updatedContentYear[index] = value;
      //     props.setAttributes({ content_year: updatedContentYear });
      //   }

      function addSlide() {
        var updatedSlides = slides.slice();
        updatedSlides.push("");
        // var updatedContentName = content_name.slice();
        // updatedContentName.push('');
        // var updatedContentYear = content_year.slice();
        // updatedContentYear.push('');
        var updatedImages = images.slice();
        updatedImages.push("");
        var updatedSub_title = sub_title.slice();
        updatedSub_title.push("");
        var updatedurl_more_button = url_more_button.slice();
        updatedurl_more_button.push("");
        props.setAttributes({
          slides: updatedSlides,
          sub_title: updatedSub_title,
          url_more_button: updatedurl_more_button,
          // content_name: updatedContentName, content_year: updatedContentYear ,
          images: updatedImages
        });
      }
      function removeSlide(index) {
        var updatedSlides = slides.slice();
        updatedSlides.splice(index, 1);
        // var updatedContentName = content_name.slice();
        // updatedContentName.splice(index, 1);
        // var updatedContentYear = content_year.slice();
        // updatedContentYear.splice(index, 1);
        var updatedImages = images.slice();
        updatedImages.splice(index, 1);
        var updatedSub_title = sub_title.slice();
        updatedSub_title.splice(index, 1);
        var updatedurl_more_button = url_more_button.slice();
        updatedurl_more_button.splice(index, 1);
        props.setAttributes({
          slides: updatedSlides,
          sub_title: updatedSub_title,
          url_more_button: updatedurl_more_button,
          //  content_name: updatedContentName, content_year: updatedContentYear,
          images: updatedImages
        });
      }
      return el("div", {
        className: props.className
      }, el("h2", {}, "Location"), el("div", {
        className: "block-edit-form"
      }, el("div", {
        className: "customizer-bar"
      }, el(TextControl, {
        label: __("Title", "your-plugin"),
        value: title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: __("Sub Heading", "your-plugin"),
        value: paragraph,
        onChange: onParagraphChange
      })), el("div", {
        className: "carousel"
      }, attributes.images.map(function (image, index) {
        // Corrected "images" to "attributes.images"
        if (index === 0) {
          return null;
        }
        return el("div", {
          key: index
        }, el("div", {
          style: {
            display: "inline-block"
          }
        }, el(MediaUpload, {
          onSelect: function onSelect(media) {
            onImagesChange(media.url, index);
          },
          type: "image",
          value: image,
          render: function render(obj) {
            return el(components.Button, {
              className: image ? "image-button" : "button button-large",
              onClick: obj.open,
              style: {
                backgroundSize: "cover"
              }
            }, !image ? __("Upload Media", "your-plugin") : el("img", {
              src: image,
              style: {
                width: "100px",
                height: "100px"
              }
            }));
          }
        })), el(TextControl, {
          tagName: "div",
          multiline: true,
          label: __("Sub Title", "your-plugin"),
          placeholder: __("Enter Sub Title", "your-plugin"),
          value: sub_title[index] || "",
          // Corrected "slide" to "slides[index]"
          onChange: function onChange(value) {
            onContentSubTitleChange(value, index);
          }
        }), el(TextControl, {
          tagName: "div",
          multiline: true,
          label: __("Content", "your-plugin"),
          placeholder: __("Enter slide content...", "your-plugin"),
          value: slides[index] || "",
          // Corrected "slide" to "slides[index]"
          onChange: function onChange(value) {
            onSlideChange(value, index);
          }
        }), el(TextControl, {
          tagName: "div",
          multiline: true,
          label: __("URL for Button", "your-plugin"),
          placeholder: __("Enter URL For Button...", "your-plugin"),
          value: url_more_button[index] || "",
          // Corrected "slide" to "slides[index]"
          onChange: function onChange(value) {
            onUrlMoreButtonChange(value, index);
          }
        }), el(components.IconButton, {
          icon: "no-alt",
          onClick: function onClick() {
            removeSlide(index);
          },
          label: __("Remove Slide", "your-plugin")
        }));
      }), el("div", null, el(components.IconButton, {
        icon: "plus",
        onClick: addSlide,
        label: __("Add Slide", "your-plugin")
      })))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      var images = attributes.images || [];
      var sub_title = attributes.sub_title || [];
      var url_more_button = attributes.url_more_button || [];
      var elemnet = slides.map(function (slide, index) {
        if (index !== 0) {
          return el("div", {
            className: "inner-div",
            onclick: "toggleSlick(this)"
          }, el("img", {
            src: images[index],
            alt: ""
          }), el("div", {
            className: "slide_heaing"
          }, el("h5", {}, el("a", {
            href: url_more_button[index]
          }, sub_title[index]))), el("div", {
            className: "slide-data"
          }, slide, el("div", {
            className: "button_div"
          }, el("a", {
            href: url_more_button[index],
            className: "button1-class"
          }, "Learn More"))));
        }
      });
      return el("div", {
        className: "outer-div"
      }, el("div", {
        className: "subHeading"
      }, el("h4", {}, paragraph)), el("div", {
        className: "heading"
      }, el("h2", {}, title)), el("div", {
        className: "carousel12 test"
      }, elemnet));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/index.js":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var RichText = editor.RichText;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;
  var InspectorControls = editor.InspectorControls;
  var Fragment = element.Fragment;
  var MediaUpload = editor.MediaUpload;
  var IconButton = components.IconButton;
  blocks.registerBlockType('blocks/newpostcontent', {
    title: 'New Post Content',
    icon: 'shield',
    // Choose an appropriate icon
    category: 'common',
    attributes: {
      title: {
        type: 'string',
        default: ''
      },
      paragraph: {
        type: 'array',
        default: []
      },
      sub_title: {
        type: 'string',
        default: ''
      },
      contentext: {
        type: 'string',
        default: ''
      },
      upload_video: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var paragraph = attributes.paragraph;

      // Function to handle video selection and update the attribute
      var handleVideoSelect = function handleVideoSelect(media) {
        setAttributes({
          upload_video: media.url
        });
      };

      // Function to handle image selection and update the attribute
      var handleImageSelect = function handleImageSelect(media) {
        setAttributes({
          upload_image: media.url
        });
      };
      function onContentChange(event, index) {
        var Contents = paragraph.slice();
        Contents[index].content = event.target.value;
        props.setAttributes({
          paragraph: Contents
        });
      }
      function addParagraph() {
        var Contents = paragraph.slice();
        Contents.push({
          content: ''
        });
        props.setAttributes({
          paragraph: Contents
        });
      }
      function removeParagraph(index) {
        var Contents = paragraph.slice();
        Contents.splice(index, 1);
        props.setAttributes({
          paragraph: Contents
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el('div', {}, el(TextControl, {
        label: 'Title',
        value: attributes.title,
        onChange: function onChange(value) {
          setAttributes({
            title: value
          });
        }
      }), el('div', {}, paragraph.map(function (para, index) {
        return el('div', {
          className: 'panel'
        }, el(TextareaControl, {
          value: para.content,
          onChange: function onChange(value) {
            onContentChange({
              target: {
                value: value
              }
            }, index);
          }
        }), el(IconButton, {
          className: 'remove-accordion',
          icon: 'no-alt',
          onClick: function onClick() {
            removeParagraph(index);
          }
        }));
      }), el(IconButton, {
        className: 'add-accordion',
        icon: 'plus',
        onClick: addParagraph
      })), el(TextControl, {
        label: 'Subtitle',
        value: attributes.sub_title,
        onChange: function onChange(value) {
          setAttributes({
            sub_title: value
          });
        }
      }), el(MediaUpload, {
        onSelect: handleVideoSelect,
        allowedTypes: ['video'],
        value: attributes.upload_video,
        render: function render(obj) {
          return el('div', {}, el('video', {
            src: attributes.upload_video,
            controls: true
          }, el('p', {}, el('a', {
            href: attributes.upload_video,
            target: '_blank',
            rel: 'noopener noreferrer'
          }, 'Click here to view the video'))), el(components.Button, {
            className: 'button button-large',
            onClick: obj.open
          }, 'Upload Video'));
        }
      }), el(TextareaControl, {
        tagName: 'div',
        className: 'your-content',
        placeholder: 'Content',
        value: attributes.contentext,
        onChange: function onChange(value) {
          setAttributes({
            contentext: value
          });
        }
      }))), el('div', {}, el('h1', {}, attributes.title), paragraph.map(function (para, index) {
        return el('p', {}, para.content);
      }), el('h3', {}, attributes.sub_title), el('div', {
        className: 'row'
      }, el('div', {
        className: 'col-md-6'
      }, el('video', {
        src: attributes.upload_video,
        controls: true
      })), el('div', {
        className: 'col-md-6'
      }, attributes.contentext))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {}, el('div', {
        className: 'container'
      }, el('h1', {}, attributes.title), attributes.paragraph.map(function (para, index) {
        return el('p', {}, para.content);
      }), el('h3', {}, attributes.sub_title), el('div', {
        className: 'row'
      }, el('div', {
        className: 'col-md-6'
      }, el('video', {
        src: attributes.upload_video,
        controls: true
      })), el('div', {
        className: 'col-md-6'
      }, attributes.contentext))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/news-card/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/news-card/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/news-card/style.scss");

var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var createElement = wp.element.createElement;
var __ = wp.i18n.__;
registerBlockType("blocks/newscard", {
  title: __("News Listing Card", "your-plugin"),
  icon: "admin-post",
  category: "common",
  // ...
  attributes: {
    posts1: {
      type: "array",
      default: []
    },
    categories1: {
      type: "array",
      default: []
    }
  },
  edit: withSelect(function (select) {
    return {
      posts: select("core").getEntityRecords("postType", "news", {
        per_page: 3,
        _embed: true
      })
    };
  }, [])(function (_ref) {
    var posts = _ref.posts,
      className = _ref.className,
      setAttributes = _ref.setAttributes,
      props = _ref.props;
    if (!posts) {
      // Handle the case where posts are not available
      return null;
    }
    setAttributes({
      posts1: posts
    }); // Use setAttributes directly from the props object

    // Map over posts and create post card elements
    var postCards = posts.map(function (post) {
      var postDate = new Date(post.date);
      // Define the options for formatting the date
      var dateFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      // Format the date using the specified options
      var formattedDate = postDate.toLocaleDateString("en-US", dateFormatOptions);
      // Check if the post has a featured media item
      var hasFeaturedMedia = post._embedded && post._embedded["wp:featuredmedia"];
      // Get the featured media URL if it exists
      var featuredMediaURL = hasFeaturedMedia ? post._embedded["wp:featuredmedia"][0].source_url : "";
      return createElement("li", {}, createElement("div", {
        className: "news-flex-body",
        key: post.id
      }, createElement("div", {
        className: "entry-thumbnail"
      }, createElement("a", {
        href: post.link
      }, createElement("img", {
        src: featuredMediaURL,
        alt: post.title.rendered
      }))), createElement("p", {
        className: "news-flex-date"
      }, formattedDate), createElement("p", {
        className: "news-flex-title"
      }, createElement("a", {
        href: post.link
      }, post.title.rendered)), createElement("p", {
        className: "news-flex-excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt.rendered.split(" ").splice(0, 20).join(" ")
        }
      })));
    });

    // Render your block's edit interface here using 'postCards' and 'categoryList'
    return createElement("div", {
      className: "container"
    }, createElement("div", {
      className: "row"
    }, createElement("ul", {
      className: "news-flex-container-listing"
    }, postCards)));
  }),
  // ...

  save: function save(props) {
    var posts = props.attributes.posts1;

    // Define how the block should be saved here
    var postCards = posts.map(function (post) {
      var postDate = new Date(post.date);
      // Define the options for formatting the date
      var dateFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      // Format the date using the specified options
      var formattedDate = postDate.toLocaleDateString("en-US", dateFormatOptions);
      // Check if the post has a featured media item
      var hasFeaturedMedia = post._embedded && post._embedded["wp:featuredmedia"];
      // Get the featured media URL if it exists
      var featuredMediaURL = hasFeaturedMedia ? post._embedded["wp:featuredmedia"][0].source_url : "";
      return createElement("li", {}, createElement("div", {
        className: "news-flex-body",
        key: post.id
      }, createElement("div", {
        className: "entry-thumbnail"
      }, createElement("a", {
        href: post.link
      }, createElement("img", {
        src: featuredMediaURL,
        alt: post.title.rendered
      }))), createElement("p", {
        className: "news-flex-date"
      }, formattedDate), createElement("p", {
        className: "news-flex-title"
      }, createElement("a", {
        href: post.link
      }, post.title.rendered)), createElement("p", {
        className: "news-flex-excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt.rendered.split(" ").splice(0, 20).join(" ")
        }
      })));
    });

    // Render your block's edit interface here using 'postCards' and 'categoryList'
    return createElement("div", {
      className: "container"
    }, createElement("div", {
      className: "row"
    }, createElement("ul", {
      className: "news-flex-container-listing"
    }, postCards)));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/our-facility/index.js":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/our-facility/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/our-facility/style.scss");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  TextControl = _wp$components.TextControl,
  IconButton = _wp$components.IconButton;
var _wp$editor = wp.editor,
  MediaUpload = _wp$editor.MediaUpload,
  BlockControls = _wp$editor.BlockControls;
registerBlockType("your-facilities-block/facilities", {
  title: "Facilities Block",
  icon: "shield",
  category: "common",
  attributes: {
    heading: {
      type: "string",
      default: "Our Facility"
    },
    subheading: {
      type: "string",
      default: "We Offer State-of-the-Art Facilities"
    },
    items: {
      type: "array",
      default: [{
        text: "Health & Science Center",
        image: "",
        url: "" // Add URL field for each item
      }, {
        text: "Mary T. Barker Humanities Building",
        image: "",
        url: "" // Add URL field for each item
      }, {
        text: "Advanced Technologies Institute",
        image: "",
        url: "" // Add URL field for each item
      }]
    }
  },

  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var heading = attributes.heading,
      subheading = attributes.subheading,
      items = attributes.items;
    function addItem() {
      var updatedItems = items.slice(); // Create a copy using slice
      updatedItems.push({
        text: "",
        image: ""
      });
      setAttributes({
        items: updatedItems
      });
    }
    function removeItem(index) {
      var updatedItems = items.slice(); // Create a copy using slice
      updatedItems.splice(index, 1);
      setAttributes({
        items: updatedItems
      });
    }
    function updateItemText(index, text) {
      var updatedItems = items.slice(); // Create a copy using slice
      updatedItems[index].text = text;
      setAttributes({
        items: updatedItems
      });
    }
    function updateItemImage(index, image) {
      var updatedItems = items.slice(); // Create a copy using slice
      updatedItems[index].image = image.url;
      setAttributes({
        items: updatedItems
      });
    }
    function updateHeading(newHeading) {
      setAttributes({
        heading: newHeading
      });
    }
    function updateSubheading(newSubheading) {
      setAttributes({
        subheading: newSubheading
      });
    }
    function updateItemUrl(index, url) {
      var updatedItems = items.slice();
      updatedItems[index].url = url;
      setAttributes({
        items: updatedItems
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: props.className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "our-facilities-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      placeholder: "Heading",
      label: "Heading",
      value: heading,
      onChange: function onChange(newHeading) {
        return updateHeading(newHeading);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      placeholder: "Subheading",
      label: "Subheading",
      value: subheading,
      onChange: function onChange(newSubheading) {
        return updateSubheading(newSubheading);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://cscc.vpmdevtech.com/wp-content/uploads/2023/08/4d0fbcb7f6966e83dd56cf6853acb375bed06f535f59de58b97fd7275989.webp",
      alt: "Preview",
      class: "img-main img1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "List Items Here"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "our-facilities-list-items"
    }, items.map(function (item, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        placeholder: "Enter item",
        value: item.text,
        label: "Enter Text Here",
        onChange: function onChange(value) {
          return updateItemText(index, value);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        placeholder: "Enter URL",
        label: "Enter Url Here",
        value: item.url,
        onChange: function onChange(value) {
          return updateItemUrl(index, value);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
        onSelect: function onSelect(media) {
          return updateItemImage(index, media);
        },
        type: "image",
        value: item.image,
        render: function render(_ref) {
          var open = _ref.open;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
            onClick: open,
            className: "components-button editor-post-featured-image__toggle"
          }, item.image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
            src: item.image,
            alt: "Preview",
            className: "image-preview-small",
            style: {
              position: "relative",
              left: "0%"
            }
          }) : "Select Image");
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
        icon: "no-alt",
        onClick: function onClick() {
          return removeItem(index);
        }
      }));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "insert",
      label: "Add Item",
      onClick: addItem
    }))))));
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      heading = _props$attributes.heading,
      subheading = _props$attributes.subheading,
      items = _props$attributes.items;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "our-facilities-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "super-heading"
    }, heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "h1 text-white"
    }, subheading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://cscc.vpmdevtech.com/wp-content/uploads/2023/08/4d0fbcb7f6966e83dd56cf6853acb375bed06f535f59de58b97fd7275989.webp",
      alt: "Preview",
      class: "img-main img1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "our-facilities-list-items"
    }, items.map(function (item, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.url,
        "data-id": item.image
      }, item.text));
    }))))));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/paragraph/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/paragraph/index.js ***!
  \**********************************************************************/
/***/ (function() {

(function (blocks, editor, components, i18n) {
  var el = wp.element.createElement;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;
  var ColorPalette = editor.ColorPalette;
  var getColorClassName = editor.getColorClassName;
  registerBlockType('blocks/paragraph', {
    title: i18n.__('Paragraph Block', 'your-plugin'),
    icon: 'editor-paragraph',
    category: 'common',
    attributes: {
      title: {
        type: 'string',
        source: 'text',
        selector: 'h2',
        default: ''
      },
      content: {
        type: 'string',
        source: 'html',
        selector: 'p',
        default: ''
      },
      backgroundColor: {
        type: 'string',
        default: '#000000'
      },
      titleColor: {
        type: 'string',
        default: '#ffffff'
      },
      contentColor: {
        type: 'string',
        default: '#ffffff'
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setBackgroundColor = function setBackgroundColor(color) {
        props.setAttributes({
          backgroundColor: color
        });
      };
      var setTitleColor = function setTitleColor(color) {
        props.setAttributes({
          titleColor: color
        });
      };
      var setContentColor = function setContentColor(color) {
        props.setAttributes({
          contentColor: color
        });
      };
      return el('div', {
        className: props.className
      }, el(editor.InspectorControls, {}, el(components.PanelBody, {
        title: i18n.__('Color Settings', 'your-plugin'),
        initialOpen: true
      }, el(components.PanelRow, {}, el('label', {
        htmlFor: 'color-picker'
      }, 'Background Color'), el(components.ColorPalette, {
        colors: [{
          color: '#000000',
          name: 'Black'
        }, {
          color: '#ffffff',
          name: 'White'
        }, {
          color: '#ff0000',
          name: 'Red'
        }, {
          color: '#00ff00',
          name: 'Green'
        }, {
          color: '#0000ff',
          name: 'Blue'
        }, {
          color: '#06038d',
          name: 'Dark Blue'
        }, {
          color: '#6C7175',
          name: 'Gray'
        }, {
          color: '#eaeaea',
          name: 'Gray'
        }, {
          color: '#f5f5f5',
          name: 'light'
        }],
        value: attributes.backgroundColor,
        onChange: setBackgroundColor,
        disableCustomColors: true,
        id: 'color-picker'
      })), el(components.PanelRow, {}, el('label', {
        htmlFor: 'color-picker1'
      }, 'Title Color'), el(components.ColorPalette, {
        colors: [{
          color: '#ffffff',
          name: 'White'
        }, {
          color: '#000000',
          name: 'Black'
        }, {
          color: '#ff0000',
          name: 'Red'
        }, {
          color: '#00ff00',
          name: 'Green'
        }, {
          color: '#0000ff',
          name: 'Blue'
        }, {
          color: '#06038d',
          name: 'Dark Blue'
        }, {
          color: '#6C7175',
          name: 'Gray'
        }, {
          color: '#eaeaea',
          name: 'Gray'
        }, {
          color: '#f5f5f5',
          name: 'light'
        }],
        value: attributes.titleColor,
        onChange: setTitleColor,
        disableCustomColors: true,
        id: 'color-picker1'
      })), el(components.PanelRow, {}, el('label', {
        htmlFor: 'color-picker3'
      }, 'Paragraph Color'), el(components.ColorPalette, {
        colors: [{
          color: '#ffffff',
          name: 'White'
        }, {
          color: '#000000',
          name: 'Black'
        }, {
          color: '#ff0000',
          name: 'Red'
        }, {
          color: '#00ff00',
          name: 'Green'
        }, {
          color: '#0000ff',
          name: 'Blue'
        }, {
          color: '#06038d',
          name: 'Dark Blue'
        }, {
          color: '#6C7175',
          name: 'Gray'
        }, {
          color: '#eaeaea',
          name: 'Gray'
        }, {
          color: '#f5f5f5',
          name: 'light'
        }],
        value: attributes.contentColor,
        onChange: setContentColor,
        disableCustomColors: true,
        id: 'color-picker3'
      })))), el(TextControl, {
        label: i18n.__('Title', 'your-plugin'),
        value: attributes.title,
        onChange: function onChange(title) {
          props.setAttributes({
            title: title
          });
        }
      }), el(TextareaControl, {
        label: i18n.__('Content', 'your-plugin'),
        value: attributes.content,
        onChange: function onChange(content) {
          props.setAttributes({
            content: content
          });
        }
      }), el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          margin: '0px',
          padding: '0px'
        }
      }, el('div', {
        style: {
          padding: '40px 30px'
        }
      }, el('h2', {
        style: {
          color: attributes.titleColor
        }
      }, attributes.title), el('p', {
        style: {
          color: attributes.contentColor
        }
      }, attributes.content))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el('div', {
        style: {
          backgroundColor: attributes.backgroundColor,
          margin: '0px',
          padding: '0px'
        }
      }, el('div', {
        style: {
          padding: '20px'
        }
      }, el('h2', {
        style: {
          color: attributes.titleColor
        }
      }, attributes.title), el('p', {
        style: {
          color: attributes.contentColor
        }
      }, attributes.content)));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.components, window.wp.i18n);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/programs/index.js":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/programs/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/programs/style.scss");

(function (blocks, element, components, editor) {
  var InnerBlocks = editor.InnerBlocks;
  var el = wp.element.createElement;
  var TextControl = wp.components.TextControl;
  var MediaUpload = wp.editor.MediaUpload;
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/programs", {
    title: __("Programs", "your-plugin"),
    icon: "slides",
    category: "common",
    attributes: {
      sub_title: {
        type: "string",
        default: ""
      },
      title: {
        type: "string",
        default: ""
      },
      paragraph: {
        type: "string",
        default: ""
      },
      buttons: {
        type: "array",
        default: []
      },
      image: {
        type: "string",
        default: ""
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var sub_title = attributes.sub_title || "";
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var buttons = attributes.buttons || [];
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function onChangeSubTitle(value) {
        props.setAttributes({
          sub_title: value
        });
      }
      function onChangeTitle(value) {
        props.setAttributes({
          title: value
        });
      }
      function onChangeParagraph(value) {
        props.setAttributes({
          paragraph: value
        });
      }
      function onAddButton() {
        props.setAttributes({
          buttons: buttons.concat({
            button_name: "",
            button_url: ""
          })
        });
      }
      function onRemoveButton(index) {
        props.setAttributes({
          buttons: buttons.filter(function (_, i) {
            return i !== index;
          })
        });
      }
      function onChangeButtonName(value, index) {
        var updatedButtons = buttons.map(function (button, i) {
          if (i === index) {
            return {
              button_name: value,
              button_url: button.button_url
            };
          }
          return button;
        });
        props.setAttributes({
          buttons: updatedButtons
        });
      }
      function onChangeButtonUrl(value, index) {
        var updatedButtons = buttons.map(function (button, i) {
          if (i === index) {
            return {
              button_name: button.button_name,
              button_url: value
            };
          }
          return button;
        });
        props.setAttributes({
          buttons: updatedButtons
        });
      }
      return el("div", null, el(TextControl, {
        label: __("Sub Title", "your-plugin"),
        value: sub_title,
        onChange: onChangeSubTitle
      }), el(TextControl, {
        label: __("Title", "your-plugin"),
        value: title,
        onChange: onChangeTitle
      }), el(TextControl, {
        label: __("Paragraph", "your-plugin"),
        value: paragraph,
        onChange: onChangeParagraph
      }), el("div", {
        style: {
          display: "inline-block"
        }
      }, el(MediaUpload, {
        onSelect: onSelectImage,
        type: "image",
        render: function render(mediaUploadProps) {
          return el("button", {
            onClick: mediaUploadProps.open,
            className: "components-button editor-post-featured-image__toggle",
            style: {
              backgroundSize: "cover"
            } // Apply fill style to the button
          }, attributes.image ? el("img", {
            src: attributes.image,
            alt: "Preview",
            className: "image-preview-small",
            style: {
              width: "100%",
              height: "100%"
            }
          }) // Fix image size
          : "Select Image");
        }
      })), el("div", {
        className: "button-list"
      }, buttons.map(function (button, index) {
        return el("div", {
          key: index,
          className: "button-item"
        }, el(TextControl, {
          label: __("Button Name", "your-plugin"),
          value: button.button_name,
          onChange: function onChange(value) {
            onChangeButtonName(value, index);
          }
        }), el(TextControl, {
          label: __("Button URL", "your-plugin"),
          value: button.button_url,
          onChange: function onChange(value) {
            onChangeButtonUrl(value, index);
          }
        }), el("button", {
          onClick: function onClick() {
            onRemoveButton(index);
          }
        }, __("Remove Button", "your-plugin")));
      }), el("button", {
        onClick: onAddButton
      }, __("Add Button", "your-plugin"))), el(InnerBlocks, {}, "Please Add Latest Programs Block Only"));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var sub_title = attributes.sub_title || "";
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var buttons = attributes.buttons || [];
      var image = attributes.image || "";
      return el("div", {
        style: {
          backgroundImage: "url(".concat(image, ")")
        }
      },
      //el('img',{src:image}),
      el("div", {
        className: "main-div"
      }, el("div", {
        className: "part-one"
      }, sub_title && el("h5", null, sub_title), title && el("h2", null, title), paragraph && el("p", null, paragraph), el("div", {
        className: "button-list"
      }, buttons.map(function (button, index) {
        return el("div", {
          key: index,
          className: "button-item"
        }, el("a", {
          href: button.button_url
        }, button.button_name));
      }))), el("div", {
        className: "part-two"
      }, el(InnerBlocks.Content))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/promo/index.js":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/promo/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/promo/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  registerBlockType("blocks/promo", {
    title: "Promo Section Block",
    icon: "smiley",
    category: "common",
    attributes: {
      image: {
        type: "string",
        default: ""
      },
      mainHeading1: {
        type: "string",
        default: "Default Main Heading 1"
      },
      maindescription: {
        type: "string",
        default: "Default Paragraph Here"
      },
      mainbutton1Name: {
        type: "string",
        default: "Main Button 1"
      },
      mainbutton1Link: {
        type: "string",
        default: "#"
      },
      mainbutton2Name: {
        type: "string",
        default: "Main Button 2"
      },
      mainbutton2Link: {
        type: "string",
        default: "#"
      },
      mainHeading2: {
        type: "string",
        default: "CTA Heading Here"
      },
      description: {
        type: "string",
        default: "CTA Description"
      },
      button1Name: {
        type: "string",
        default: "CTA Button 1"
      },
      button1Link: {
        type: "string",
        default: "#"
      },
      button2Name: {
        type: "string",
        default: "CTA Button 2"
      },
      button2Link: {
        type: "string",
        default: "#"
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2"
      },
      listItems: {
        type: "array",
        default: ["Item 1", "Item 2", "Item 3"]
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var listItems = attributes.listItems;
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url
        });
      }
      function onMainHeading1Change(newHeading) {
        setAttributes({
          mainHeading1: newHeading
        });
      }
      function onMainDescriptionChange(newDescription) {
        setAttributes({
          maindescription: newDescription
        });
      }
      function onMainButton1NameChange(newName) {
        setAttributes({
          mainbutton1Name: newName
        });
      }
      function onMainButton1LinkChange(newLink) {
        setAttributes({
          mainbutton1Link: newLink
        });
      }
      function onMainButton2NameChange(newName) {
        setAttributes({
          mainbutton2Name: newName
        });
      }
      function onMainButton2LinkChange(newLink) {
        setAttributes({
          mainbutton2Link: newLink
        });
      }
      function onMainHeading2Change(newHeading) {
        setAttributes({
          mainHeading2: newHeading
        });
      }
      function onDescriptionChange(newDescription) {
        setAttributes({
          description: newDescription
        });
      }
      function onButton1NameChange(newName) {
        setAttributes({
          button1Name: newName
        });
      }
      function onButton1LinkChange(newLink) {
        setAttributes({
          button1Link: newLink
        });
      }
      function onBackgroundColorChange(newColor) {
        setAttributes({
          backgroundColor: newColor
        });
      }
      function onChangeListItem(newListItems) {
        setAttributes({
          listItems: newListItems
        });
      }
      function addListItem() {
        var newListItems = listItems.concat([""]);
        setAttributes({
          listItems: newListItems
        });
      }
      function removeListItem(index) {
        var newListItems = listItems.filter(function (_, i) {
          return i !== index;
        });
        setAttributes({
          listItems: newListItems
        });
      }
      return el(Fragment, null, el(InspectorControls, null, el(PanelColorSettings, {
        title: "Background Color",
        colorSettings: [{
          label: "Background Color",
          onChange: onBackgroundColorChange,
          value: attributes.backgroundColor
        }]
      })), el("div", {}, el("div", {
        style: {
          display: "inline-block"
        }
      }, el(MediaUpload, {
        onSelect: onSelectImage,
        type: "image",
        render: function render(mediaUploadProps) {
          return el("button", {
            onClick: mediaUploadProps.open,
            className: "components-button editor-post-featured-image__toggle",
            style: {
              backgroundSize: "cover"
            } // Apply fill style to the button
          }, attributes.image ? el("img", {
            src: attributes.image,
            alt: "Preview",
            className: "image-preview-small",
            style: {
              width: "100%",
              height: "100%"
            }
          }) // Fix image size
          : "Select Image");
        }
      }))), el("div", {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: "20px"
        }
      }, el(TextControl, {
        label: "Main Heading 1",
        value: attributes.mainHeading1,
        onChange: onMainHeading1Change
      }), el(TextControl, {
        label: "Paragraph Main",
        value: attributes.maindescription,
        onChange: onMainDescriptionChange
      }), el(TextControl, {
        label: "Main Button 1 Name",
        value: attributes.mainbutton1Name,
        onChange: onMainButton1NameChange
      }), el(URLInput, {
        label: "Main Button 1 Link",
        value: attributes.mainbutton1Link,
        onChange: onMainButton1LinkChange
      }), el(TextControl, {
        label: "Main Button 2 Name",
        value: attributes.mainbutton2Name,
        onChange: onMainButton2NameChange
      }), el(URLInput, {
        label: "Main Button 2 Link",
        value: attributes.mainbutton2Link,
        onChange: onMainButton2LinkChange
      }), el(TextControl, {
        label: "CTA Heading ",
        value: attributes.mainHeading2,
        onChange: onMainHeading2Change
      }), el(TextControl, {
        label: "CTA Paragraph",
        value: attributes.description,
        onChange: onDescriptionChange
      }), el(TextControl, {
        label: "CTA Button 1 Name",
        value: attributes.button1Name,
        onChange: onButton1NameChange
      }), el(URLInput, {
        label: "CTA Button 1 Link",
        value: attributes.button1Link,
        onChange: onButton1LinkChange
      })), el("div", {}, listItems.map(function (item, index) {
        return el("div", {
          key: index
        }, el(TextControl, {
          value: item,
          onChange: function onChange(newValue) {
            var newListItems = listItems.map(function (value, i) {
              return i === index ? newValue : value;
            });
            onChangeListItem(newListItems);
          }
        }), el("Button", {
          onClick: function onClick() {
            removeListItem(index);
          },
          isDestructive: true
        }, "Remove"));
      }), el("Button", {
        onClick: addListItem
      }, "Add Item")));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var listItems = attributes.listItems;
      return el("div", {
        style: {
          backgroundColor: attributes.backgroundColor,
          padding: "20px"
        }
      }, el("div", {
        className: "main-wrapper"
      }, el("div", {
        className: "container offset-container"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "col-md-6"
      }, el("h2", null, attributes.mainHeading1), el("p", null, attributes.maindescription), el("a", {
        href: attributes.mainbutton1Link,
        className: "primary"
      }, attributes.mainbutton1Name), el("a", {
        href: attributes.mainbutton2Link,
        className: "tertiary"
      }, attributes.mainbutton2Name)), el("div", {
        className: "col-md-6"
      }, el("ul", {
        className: "styled-order-list"
      }, listItems.map(function (item, index) {
        return el("li", {
          key: index
        }, item);
      }))))), el("div", {
        className: "offset-container-secondary"
      }, el("div", {
        className: "offset-wrapper"
      }, el("div", {
        className: "cta-wrapper"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "col-md-2"
      }, attributes.image && el("img", {
        src: attributes.image,
        alt: "Preview",
        className: "icon"
      })), el("div", {
        className: "col-md-8"
      }, el("h2", null, attributes.mainHeading2), el("p", null, attributes.description), el("a", {
        href: attributes.button1Link,
        className: "primary-two"
      }, attributes.button1Name))))))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/resources/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/resources/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/resources/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/resources", {
    title: __("Resources", "your-plugin"),
    icon: "editor-contract",
    category: "common",
    attributes: {
      listItems: {
        type: "array",
        default: []
      },
      listUrls: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var listItems = attributes.listItems || [];
      var listUrls = attributes.listUrls || [];
      function onListItemChange(value, index) {
        var updatedListItems = listItems.slice();
        updatedListItems[index] = value;
        props.setAttributes({
          listItems: updatedListItems
        });
      }
      function onListUrlChange(value, index) {
        var updatedListUrls = listUrls.slice();
        updatedListUrls[index] = value;
        props.setAttributes({
          listUrls: updatedListUrls
        });
      }
      function addListItem() {
        var updatedListItems = listItems.slice();
        updatedListItems.push("");
        var updatedListUrls = listUrls.slice();
        updatedListUrls.push("");
        props.setAttributes({
          listItems: updatedListItems,
          listUrls: updatedListUrls
        });
      }
      function removeListItem(index) {
        var updatedListItems = listItems.slice();
        updatedListItems.splice(index, 1);
        var updatedListUrls = listUrls.slice();
        updatedListUrls.splice(index, 1);
        props.setAttributes({
          listItems: updatedListItems,
          listUrls: updatedListUrls
        });
      }
      return el("div", {
        className: props.className
      }, el("div", {
        className: "resources"
      }, el(TextControl, {
        label: __("Main Heading Here", "your-plugin"),
        value: listItems[0] || "",
        onChange: function onChange(value) {
          onListItemChange(value, 0);
        }
      }), el("ul", null, listItems.slice(1).map(function (item, listItemIndex) {
        return el("li", {
          key: listItemIndex
        }, el(TextControl, {
          label: "Item Title",
          value: item,
          onChange: function onChange(value) {
            onListItemChange(value, listItemIndex + 1);
          }
        }), el(TextControl, {
          label: __("Item URL", "your-plugin"),
          value: listUrls[listItemIndex + 1] || "",
          onChange: function onChange(value) {
            onListUrlChange(value, listItemIndex + 1);
          }
        }), el(components.IconButton, {
          icon: "no-alt",
          onClick: function onClick() {
            removeListItem(listItemIndex + 1);
          },
          label: __("Remove Item", "your-plugin")
        }), el("a", {
          href: listUrls[listItemIndex + 1] || "#"
        }, item));
      }), el("li", null, el(components.IconButton, {
        icon: "plus",
        onClick: addListItem,
        label: __("Add Item", "your-plugin")
      }, "Add Options Here")))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var listItems = attributes.listItems || [];
      var listUrls = attributes.listUrls || [];
      return el("div", {
        className: props.className + " resources"
      }, el("div", {
        className: "container"
      }, el("h2", null, listItems[0] || ""), el("ul", null, listItems.slice(1).map(function (item, listItemIndex) {
        return el("li", {
          key: listItemIndex
        }, el("a", {
          href: listUrls[listItemIndex + 1] || "#"
        }, item));
      }))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/single-button/index.js":
/*!**************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/single-button/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/single-button/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var Fragment = element.Fragment;
  var registerBlockType = blocks.registerBlockType;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var PanelColorSettings = editor.PanelColorSettings;
  var InspectorControls = editor.InspectorControls;
  var SelectControl = components.SelectControl;
  registerBlockType("blocks/single-button", {
    title: "Single Button Block",
    icon: "smiley",
    category: "common",
    attributes: {
      buttons: {
        type: "array",
        default: [{
          buttonName: "Button 1",
          buttonLink: "#",
          buttonType: "primary"
        }]
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2"
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      function onButtonNameChange(index, newName) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonName = newName;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonLinkChange(index, newLink) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonLink = newLink;
        setAttributes({
          buttons: buttons
        });
      }
      function onButtonTypeChange(index, newType) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonType = newType;
        setAttributes({
          buttons: buttons
        });
      }
      function addButton() {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.push({
          buttonName: "New Button",
          buttonLink: "#",
          buttonType: "primary"
        });
        setAttributes({
          buttons: buttons
        });
      }
      function removeButton(index) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.splice(index, 1);
        setAttributes({
          buttons: buttons
        });
      }
      return el(Fragment, null, el("div", {
        style: {
          padding: "20px"
        }
      }, attributes.buttons.map(function (button, index) {
        return el(Fragment, {
          key: index
        }, el(TextControl, {
          label: "Single Button Name",
          value: button.buttonName,
          onChange: function onChange(newName) {
            onButtonNameChange(index, newName);
          }
        }), el(URLInput, {
          label: "Single Button Link",
          value: button.buttonLink,
          onChange: function onChange(newLink) {
            onButtonLinkChange(index, newLink);
          }
        }), el(SelectControl, {
          label: "Single Button Type",
          value: button.buttonType,
          options: [{
            value: "primary",
            label: "Primary"
          }, {
            value: "secondary",
            label: "Secondary"
          }, {
            value: "tertiary",
            label: "Tertiary"
          }, {
            value: "primary-two",
            label: "Primary Two"
          }, {
            value: "secondary-two",
            label: "Secondary Two"
          }, {
            value: "tertiary-two",
            label: "Tertiary Two"
          }, {
            value: "inactive",
            label: "inactive"
          }, {
            value: "primary active",
            label: "Primary Active"
          }, {
            value: "secondary active",
            label: "Secondary Active"
          }, {
            value: "tertiary active",
            label: "Tertiary Active"
          }, {
            value: "primary-two active",
            label: "Primary Two Active"
          }, {
            value: "secondary-two active",
            label: "Secondary Two Active"
          }, {
            value: "tertiary-two active",
            label: "Tertiary Two Active"
          }, {
            value: "inactive active",
            label: "inactive Active"
          }],
          onChange: function onChange(newType) {
            onButtonTypeChange(index, newType);
          }
        }), el("button", {
          className: "button-remove",
          onClick: function onClick() {
            removeButton(index);
          }
        }, "Remove Button"));
      }), el("button", {
        className: "button-add",
        onClick: addButton
      }, "Add Button")));
    },
    save: function save(props) {
      var attributes = props.attributes;
      return el("div", {
        style: {
          padding: "20px"
        }
      }, attributes.buttons.map(function (button, index) {
        return el("a", {
          href: button.buttonLink,
          className: button.buttonType,
          "data-type": button.buttonType,
          key: index
        }, button.buttonName);
      }));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/social/index.js":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/social/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/social/style.scss");


var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  TextControl = _wp$components.TextControl;
var Fragment = wp.element.Fragment;
var selectOptions = [{
  label: "Facebook",
  value: "fab fa-facebook"
}, {
  label: "Twitter",
  value: "fab fa-twitter"
}, {
  label: "Instagram",
  value: "fab fa-instagram"
}, {
  label: "LinkedIn",
  value: "fab fa-linkedin"
}, {
  label: "YouTube",
  value: "fab fa-youtube"
}];
registerBlockType("blocks/social", {
  title: "My Social",
  category: "common",
  attributes: {
    fields: {
      type: "array",
      default: [{
        content: "",
        selectOption: "fab fa-facebook",
        url: "" // Add a URL attribute
      }]
    },

    mainDivClass: {
      type: "string",
      default: "" // Default class name for the main div
    }
  },

  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var fields = attributes.fields;
    function addEvent() {
      var newEvent = {
        content: "",
        selectOption: "fab fa-facebook",
        url: "" // Default URL value
      };

      var newEvents = fields.concat(newEvent);
      setAttributes({
        fields: newEvents
      });
    }
    var onFieldChange = function onFieldChange(value, index, field) {
      var updatedFields = fields.slice();
      updatedFields[index][field] = value;
      setAttributes({
        fields: updatedFields
      });
    };
    function removeList(index) {
      var updatedLists = fields.slice();
      updatedLists.splice(index, 1);
      setAttributes({
        fields: updatedLists
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Event Details",
      initialOpen: true
    }, fields.map(function (field, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: "Select Option",
        value: field.selectOption,
        options: selectOptions,
        onChange: function onChange(selectedOption) {
          return onFieldChange(selectedOption, index, "selectOption");
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: "URL",
        value: field.url,
        onChange: function onChange(newValue) {
          return onFieldChange(newValue, index, "url");
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: function onClick() {
          return removeList(index);
        },
        isDestructive: true
      }, "Remove Social Icon"));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: addEvent
    }, "Add Social Icon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Main Div Verticle/Horizontal",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Verticle/Horizontal",
      value: attributes.mainDivClass,
      options: [{
        label: "Vertical",
        value: "vertical"
      },
      // Corrected typo in label
      {
        label: "Horizontal",
        value: "horizontal"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          mainDivClass: value
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "main-social ".concat(attributes.mainDivClass)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, fields.map(function (field, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: field.url
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: field.selectOption
      })));
    }))));
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      fields = _props$attributes.fields,
      mainDivClass = _props$attributes.mainDivClass;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "main-social ".concat(mainDivClass)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, fields.map(function (field, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: field.url
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: field.selectOption
      })));
    })));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/standard-inner/standard-inner.js":
/*!************************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/standard-inner/standard-inner.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/standard-inner/style.scss");

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
        default: ''
      },
      buttonName: {
        type: 'string',
        default: ''
      },
      buttonLink: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;
      function onTitleChange(value) {
        props.setAttributes({
          title: value
        });
      }
      function onButtonNameChange(value) {
        props.setAttributes({
          buttonName: value
        });
      }
      function onButtonLinkChange(value) {
        props.setAttributes({
          buttonLink: value
        });
      }
      return el('div', {
        className: props.className
      }, el(TextControl, {
        label: __('Title', 'your-plugin'),
        value: title,
        onChange: onTitleChange
      }), el(TextControl, {
        label: __('Button Name', 'your-plugin'),
        value: buttonName,
        onChange: onButtonNameChange
      }), el(URLInput, {
        label: __('Button Link', 'your-plugin'),
        value: buttonLink,
        onChange: onButtonLinkChange
      }), el('div', {
        className: 'container'
      }, el('h2', {
        className: 'page-title'
      }, title), buttonName && buttonLink && el('a', {
        className: 'btn btn-success cta-button',
        href: buttonLink
      }, buttonName), el(InnerBlocks, {}, 'Please Add BreadCrum') // Add InnerBlocks component here
      ));
    },

    save: function save(props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;
      return el('div', {
        className: props.className + 'container md-150'
      }, el(InnerBlocks.Content), el('div', {
        className: 'container'
      }, el('h2', {
        className: 'page-title'
      }, title), buttonName && buttonLink && el('a', {
        className: 'btn cta-button',
        href: buttonLink
      }, buttonName)
      // Add InnerBlocks.Content here
      ));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/statistic-2/index.js":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/statistic-2/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/statistic-2/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var __ = wp.i18n.__;
  blocks.registerBlockType('blocks/statistics-two', {
    title: __('Statistics Two', 'your-plugin'),
    icon: 'editor-contract',
    category: 'common',
    attributes: {
      heading: {
        type: 'string',
        default: ''
      },
      paragraph: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph = attributes.paragraph;
      function onHeadingChange(value) {
        props.setAttributes({
          heading: value
        });
      }
      function onParagraphChange(value) {
        props.setAttributes({
          paragraph: value
        });
      }
      return el('div', {
        className: props.className
      }, el(TextControl, {
        label: __('Heading', 'your-plugin'),
        value: heading,
        onChange: onHeadingChange
      }), el(TextControl, {
        label: __('Paragraph', 'your-plugin'),
        value: paragraph,
        onChange: onParagraphChange
      }), el('div', {
        className: ''
      }, heading && el('h2', {
        className: 'section-heading'
      }, heading), paragraph && el('p', {
        className: 'section-paragraph'
      }, paragraph)));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph = attributes.paragraph;
      return el('div', {
        className: props.className
      }, el('div', {
        className: 'row'
      }, heading && el('div', {
        className: 'col-1'
      }, el('h3', {
        className: ''
      }, heading)), paragraph && el('div', {
        className: 'col-2'
      }, el('p', {
        className: ''
      }, paragraph))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/statistic/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/statistic/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/statistic/style.scss");

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
        default: ''
      },
      paragraph: {
        type: 'string',
        default: ''
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph = attributes.paragraph;
      function onHeadingChange(value) {
        props.setAttributes({
          heading: value
        });
      }
      function onParagraphChange(value) {
        props.setAttributes({
          paragraph: value
        });
      }
      return el('div', {
        className: props.className
      }, el(TextControl, {
        label: __('Heading', 'your-plugin'),
        value: heading,
        onChange: onHeadingChange
      }), el(TextControl, {
        label: __('Paragraph', 'your-plugin'),
        value: paragraph,
        onChange: onParagraphChange
      }), el('div', {
        className: 'main-statistics'
      }, heading && el('h3', {
        className: 'section-heading'
      }, heading), paragraph && el('p', {
        className: 'section-paragraph'
      }, paragraph)));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var heading = attributes.heading;
      var paragraph = attributes.paragraph;
      return el('div', {
        className: props.className
      }, el('div', {
        className: 'main-statistics'
      }, heading && el('h3', {
        className: 'section-heading'
      }, heading), paragraph && el('p', {
        className: 'section-paragraph'
      }, paragraph)));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/stylelist/index.js":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/stylelist/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/stylelist/style.scss");


var registerBlockType = window.wp.blocks.registerBlockType;
var InspectorControls = window.wp.blockEditor.InspectorControls;
var _window$wp$components = window.wp.components,
  PanelBody = _window$wp$components.PanelBody,
  Button = _window$wp$components.Button,
  TextControl = _window$wp$components.TextControl;
var Fragment = window.wp.element.Fragment;
registerBlockType("stylelist/stylelist", {
  title: "Style List Block",
  category: "common",
  attributes: {
    listItems: {
      type: "array",
      default: ["Item 1", "Item 2", "Item 3"]
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var listItems = attributes.listItems;
    function onChangeListItem(newListItems) {
      setAttributes({
        listItems: newListItems
      });
    }
    function addListItem() {
      var newListItems = listItems.concat([""]);
      setAttributes({
        listItems: newListItems
      });
    }
    function removeListItem(index) {
      var newListItems = listItems.filter(function (_, i) {
        return i !== index;
      });
      setAttributes({
        listItems: newListItems
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "List Items",
      initialOpen: true
    }, listItems.map(function (item, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        value: item,
        onChange: function onChange(newValue) {
          var newListItems = listItems.map(function (value, i) {
            return i === index ? newValue : value;
          });
          onChangeListItem(newListItems);
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: function onClick() {
          return removeListItem(index);
        },
        isDestructive: true
      }, "Remove"));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: addListItem
    }, "Add Item"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, listItems.map(function (item, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        value: item,
        onChange: function onChange(e) {
          var newListItems = listItems.map(function (value, i) {
            return i === index ? e.target.value : value;
          });
          onChangeListItem(newListItems);
        }
      }));
    })));
  },
  save: function save(props) {
    var attributes = props.attributes;
    var listItems = attributes.listItems;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
      className: "styled-order-list"
    }, listItems.map(function (item, index) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index
      }, item);
    }));
  }
});

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/table/index.js":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/table/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/table/style.scss");


(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var PanelBody = components.PanelBody;
  var PanelRow = components.PanelRow;
  var Button = components.Button;
  var ButtonGroup = components.ButtonGroup;
  var Tooltip = components.Tooltip;
  var Dashicon = components.Dashicon;
  var InspectorControls = editor.InspectorControls;
  var __ = wp.i18n.__;
  var TextareaControl = components.TextareaControl;
  // Block registration
  blocks.registerBlockType('blocks/table-blocks', {
    title: __('Table Block'),
    // Block title
    icon: 'grid-view',
    // Block icon
    category: 'common',
    // Block category (e.g., common, formatting, layout, widgets, etc.)
    attributes: {
      rows: {
        type: 'number',
        default: 2 // Default number of rows
      },

      columns: {
        type: 'number',
        default: 2 // Default number of columns
      },

      cellsContent: {
        type: 'array',
        default: [] // Default content for cells
      }
    },

    edit: function edit(props) {
      // Get attributes
      var _props$attributes = props.attributes,
        rows = _props$attributes.rows,
        columns = _props$attributes.columns,
        cellsContent = _props$attributes.cellsContent;

      // Function to update the number of rows
      function updateRows(newRows) {
        var rowCount = parseInt(newRows);
        var updatedContent = [];
        for (var i = 0; i < rowCount; i++) {
          updatedContent.push(cellsContent[i] || Array.from({
            length: columns
          }, function () {
            return '';
          }));
        }
        props.setAttributes({
          rows: rowCount,
          cellsContent: updatedContent
        });
      }

      // Function to update the number of columns
      function updateColumns(newColumns) {
        var colCount = parseInt(newColumns);
        var updatedContent = cellsContent.map(function (rowArray) {
          var newRow = [];
          for (var i = 0; i < colCount; i++) {
            newRow.push(rowArray[i] || '');
          }
          return newRow;
        });
        props.setAttributes({
          columns: colCount,
          cellsContent: updatedContent
        });
      }

      // Function to update the cell content
      function updateCellContent(row, col, content) {
        var updatedContent = cellsContent.map(function (rowArray, rowIndex) {
          if (rowIndex === row) {
            var newRow = rowArray.map(function (cellContent, colIndex) {
              return colIndex === col ? content : cellContent;
            });
            return newRow;
          }
          return rowArray;
        });
        props.setAttributes({
          cellsContent: updatedContent
        });
      }

      // Function to add a header row
      function addHeaderRow() {
        var updatedContent = cellsContent.slice();
        updatedContent.unshift(Array.from({
          length: columns
        }, function () {
          return '';
        }));
        props.setAttributes({
          rows: rows + 1,
          cellsContent: updatedContent
        });
      }

      // Function to add a footer row
      function addFooterRow() {
        var updatedContent = cellsContent.slice();
        updatedContent.push(Array.from({
          length: columns
        }, function () {
          return '';
        }));
        props.setAttributes({
          rows: rows + 1,
          cellsContent: updatedContent
        });
      }

      // Render the block editor
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Table Settings')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: __('Number of Rows'),
        value: rows,
        onChange: updateRows
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        label: __('Number of Columns'),
        value: columns,
        onChange: updateColumns
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Table Actions')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: addHeaderRow
      }, "Add Header"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: addFooterRow
      }, "Add Footer"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: props.className
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Array.from({
        length: rows
      }, function (_, rowIndex) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
          key: rowIndex
        }, Array.from({
          length: columns
        }, function (_, colIndex) {
          var _cellsContent$rowInde;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
            key: "".concat(rowIndex, "-").concat(colIndex)
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
            type: "textarea",
            value: ((_cellsContent$rowInde = cellsContent[rowIndex]) === null || _cellsContent$rowInde === void 0 ? void 0 : _cellsContent$rowInde[colIndex]) || '',
            onChange: function onChange(newContent) {
              return updateCellContent(rowIndex, colIndex, newContent);
            }
          }));
        }));
      })))));
    },
    save: function save(props) {
      // Get attributes
      var _props$attributes2 = props.attributes,
        rows = _props$attributes2.rows,
        columns = _props$attributes2.columns,
        cellsContent = _props$attributes2.cellsContent;
      var classstyle = 'wp-block-table';
      // Render the saved content
      // Rest of the code...

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classstyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Array.from({
        length: rows
      }, function (_, rowIndex) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
          key: rowIndex
        }, Array.from({
          length: columns
        }, function (_, colIndex) {
          var _cellsContent$rowInde2;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
            key: "".concat(rowIndex, "-").concat(colIndex)
          }, ((_cellsContent$rowInde2 = cellsContent[rowIndex]) === null || _cellsContent$rowInde2 === void 0 ? void 0 : _cellsContent$rowInde2[colIndex]) || '');
        }));
      })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "mobile-table"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, Array.from({
        length: columns
      }, function (_, colIndex) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
          key: colIndex
        }, Array.from({
          length: rows
        }, function (_, rowIndex) {
          var _cellsContent$rowInde3;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
            key: rowIndex
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
            key: "".concat(rowIndex, "-").concat(colIndex)
          }, ((_cellsContent$rowInde3 = cellsContent[rowIndex]) === null || _cellsContent$rowInde3 === void 0 ? void 0 : _cellsContent$rowInde3[colIndex]) || ''));
        }));
      }))));

      // Rest of the code...
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/tabs/index.js":
/*!*****************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/tabs/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/tabs/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var RichText = editor.RichText;
  var IconButton = components.IconButton;
  var __ = wp.i18n.__;
  var blockIndex = 0;
  blocks.registerBlockType("blocks/tabs", {
    title: __("Tabs Block", "your-plugin"),
    icon: "editor-table",
    category: "common",
    attributes: {
      mainHeading: {
        type: "string",
        default: ""
      },
      tabs: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var mainHeading = attributes.mainHeading || "";
      var tabs = attributes.tabs || [];
      function onMainHeadingChange(value) {
        props.setAttributes({
          mainHeading: value
        });
      }
      function onTabHeadingChange(value, index) {
        var updatedTabs = tabs.map(function (tab, tabIndex) {
          if (tabIndex === index) {
            return Object.assign({}, tab, {
              heading: value
            });
          }
          return tab;
        });
        props.setAttributes({
          tabs: updatedTabs
        });
      }
      function onTabContentChange(value, index) {
        var updatedTabs = tabs.map(function (tab, tabIndex) {
          if (tabIndex === index) {
            return Object.assign({}, tab, {
              content: value
            });
          }
          return tab;
        });
        props.setAttributes({
          tabs: updatedTabs
        });
      }
      function addTab() {
        var newTab = {
          heading: "",
          content: "",
          blockName: "tabs-block-".concat(blockIndex)
        };
        blockIndex++;
        props.setAttributes({
          tabs: tabs.concat(newTab)
        });
      }
      function removeTab(index) {
        var updatedTabs = tabs.filter(function (_, tabIndex) {
          return tabIndex !== index;
        });
        props.setAttributes({
          tabs: updatedTabs
        });
      }
      return el("div", {
        className: props.className
      }, el("h2", null, el(RichText, {
        tagName: "span",
        placeholder: "Enter main heading...",
        value: mainHeading,
        onChange: onMainHeadingChange
      })), el("div", {
        className: "tabs"
      }, tabs.map(function (tab, index) {
        var tabClasses = "tablink " + (index === 0 ? "active" : "");
        return el("div", {
          key: index
        }, el(TextControl, {
          className: "tab-heading",
          value: tab.heading,
          onChange: function onChange(value) {
            onTabHeadingChange(value, index);
          },
          placeholder: "Enter tab heading..."
        }), el("div", {
          className: "tab-content"
        }, el(RichText, {
          tagName: "div",
          multiline: "p",
          placeholder: "Enter tab content...",
          value: tab.content,
          onChange: function onChange(value) {
            onTabContentChange(value, index);
          }
        })), el(IconButton, {
          icon: "minus",
          onClick: function onClick() {
            removeTab(index);
          },
          label: __("Remove Tab", "your-plugin")
        }));
      })), el(IconButton, {
        icon: "plus",
        onClick: addTab,
        label: __("Add Tab", "your-plugin")
      }));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var mainHeading = attributes.mainHeading || "";
      var tabs = attributes.tabs || [];
      return el("div", {
        className: props.className
      }, el("h2", null, mainHeading), el("div", {
        className: "tabs"
      }, tabs.map(function (tab, index) {
        var tabClasses = index === 0 ? "tablink active" : "tablink";
        return el("button", {
          key: index,
          className: tabClasses,
          "data-tab": "tab-".concat(index)
        }, tab.heading);
      })), el("div", {
        className: "tab-content"
      }, tabs.map(function (tab, index) {
        return el("div", {
          key: index,
          className: "tabcontent",
          id: "tab-".concat(index),
          "data-block-name": tab.blockName
        }, el(RichText.Content, {
          tagName: "div",
          value: tab.content
        }));
      })));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/testinonials/index.js":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/testinonials/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/testinonials/style.scss");

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var MediaUpload = editor.MediaUpload; // Use "editor.MediaUpload" instead of "wp.editor.MediaUpload"
  var __ = wp.i18n.__;
  blocks.registerBlockType("blocks/testimonial", {
    title: __("Testimonial", "your-plugin"),
    // Corrected "testimonal" to "Testimonial"
    icon: "slides",
    category: "common",
    attributes: {
      slides: {
        type: "array",
        default: []
      },
      title: {
        type: "string",
        default: ""
      },
      paragraph: {
        type: "string",
        default: ""
      },
      content_name: {
        type: "array",
        default: []
      },
      content_year: {
        type: "array",
        default: []
      },
      images: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      var images = attributes.images || [];
      function onSlideChange(value, index) {
        var updatedSlides = slides.slice();
        updatedSlides[index] = value;
        props.setAttributes({
          slides: updatedSlides
        });
      }
      function onImagesChange(value, index) {
        var updatedImages = attributes.images.slice(); // Corrected "images" to "attributes.images"
        updatedImages[index] = value;
        props.setAttributes({
          images: updatedImages
        });
      }
      function onTitleChange(value) {
        props.setAttributes({
          title: value
        });
      }
      function onParagraphChange(value) {
        props.setAttributes({
          paragraph: value
        });
      }
      function onContentNameChange(value, index) {
        var updatedContentName = content_name.slice();
        updatedContentName[index] = value;
        props.setAttributes({
          content_name: updatedContentName
        });
      }
      function onContentYearChange(value, index) {
        var updatedContentYear = content_year.slice();
        updatedContentYear[index] = value;
        props.setAttributes({
          content_year: updatedContentYear
        });
      }
      function addSlide() {
        var updatedSlides = slides.slice();
        updatedSlides.push("");
        var updatedContentName = content_name.slice();
        updatedContentName.push("");
        var updatedContentYear = content_year.slice();
        updatedContentYear.push("");
        var updatedImages = images.slice();
        updatedImages.push("");
        props.setAttributes({
          slides: updatedSlides,
          content_name: updatedContentName,
          content_year: updatedContentYear,
          images: updatedImages
        });
      }
      function removeSlide(index) {
        var updatedSlides = slides.slice();
        updatedSlides.splice(index, 1);
        var updatedContentName = content_name.slice();
        updatedContentName.splice(index, 1);
        var updatedContentYear = content_year.slice();
        updatedContentYear.splice(index, 1);
        var updatedImages = images.slice();
        updatedImages.splice(index, 1);
        props.setAttributes({
          slides: updatedSlides,
          content_name: updatedContentName,
          content_year: updatedContentYear,
          images: updatedImages
        });
      }
      return el("div", {
        className: props.className
      }, el("div", {
        className: "block-edit-form"
      },
      // el('div', { className: 'customizer-bar' },
      //   el(TextControl, {
      //     label: __('Title', 'your-plugin'),
      //     value: title,
      //     onChange: onTitleChange,
      //   }),
      //   el(TextControl, {
      //     label: __('Paragraph', 'your-plugin'),
      //     value: paragraph,
      //     onChange: onParagraphChange,
      //   })
      // ),
      el("div", {
        className: "carousel"
      }, attributes.images.map(function (image, index) {
        // Corrected "images" to "attributes.images"
        if (index === 0) {
          return null;
        }
        return el("div", {
          key: index
        }, el("div", {
          style: {
            display: "inline-block"
          }
        }, el(MediaUpload, {
          onSelect: function onSelect(media) {
            onImagesChange(media.url, index);
          },
          type: "image",
          value: image,
          render: function render(obj) {
            return el(components.Button, {
              className: image ? "image-button" : "button button-large",
              onClick: obj.open,
              style: {
                backgroundSize: "cover"
              }
            }, !image ? __("Upload Media", "your-plugin") : el("img", {
              src: image,
              style: {
                width: "100px",
                height: "100px"
              }
            }));
          }
        })), el(TextControl, {
          tagName: "div",
          multiline: true,
          label: __("Content", "your-plugin"),
          placeholder: __("Enter slide content...", "your-plugin"),
          value: slides[index] || "",
          // Corrected "slide" to "slides[index]"
          onChange: function onChange(value) {
            onSlideChange(value, index);
          }
        }), el(TextControl, {
          label: __("Content Name", "your-plugin"),
          value: content_name[index] || "",
          // Corrected "content_name" to "content_name[index]"
          onChange: function onChange(value) {
            onContentNameChange(value, index);
          }
        }), el(TextControl, {
          label: __("Content Year", "your-plugin"),
          value: content_year[index] || "",
          // Corrected "content_year" to "content_year[index]"
          onChange: function onChange(value) {
            onContentYearChange(value, index);
          }
        }), el(components.IconButton, {
          icon: "no-alt",
          onClick: function onClick() {
            removeSlide(index);
          },
          label: __("Remove Slide", "your-plugin")
        }));
      }), el("div", null, el(components.IconButton, {
        icon: "plus",
        onClick: addSlide,
        label: __("Add Slide", "your-plugin")
      })))));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var slides = attributes.slides || [];
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var content_name = attributes.content_name || [];
      var content_year = attributes.content_year || [];
      var images = attributes.images || [];
      var slideElements = slides.map(function (slide, index) {
        if (index !== 0) {
          // Use "!== 0" instead of "!= 0"
          return el("div", {
            key: index
          }, el("div", {
            className: "name"
          }, el("div", {
            className: "index-indicator"
          }), el("h2", {}, content_name[index])), el("p", {
            dangerouslySetInnerHTML: {
              __html: slide
            }
          }),
          // Add the content_name within a new <div>
          el("div", {
            className: "year"
          }, content_year[index])

          // Add the content_year within a new <div>
          );
        }
      });

      var slideImages = slides.map(function (slide, index) {
        if (index !== 0) {
          // Use "!== 0" instead of "!= 0"
          return el("img", {
            src: images[index]
          });
          // Add the content_year within a new <div>
        }
      });

      var imageUrl = window.location.origin + "/wp-content/uploads/2023/07/ddd-removebg-preview.png";
      return el("div", {
        className: props.className + " main-wrapper"
      },
      // Add a space between className and main-wrapper
      el("div", {
        className: "container"
      }, el("div", {
        className: "row"
      }, el("div", {
        className: "carousel-sync-1 carousel1 col-md-6"
      }, slideImages), el("div", {
        className: "col-md-6"
      }, el("div", {
        className: "outer-div"
      }), el("span", {}, "&#8222;"), el("div", {
        className: "main carousel1 carousel-sync-2"
      }, slideElements)))));
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/we-offer/index.js":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/we-offer/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../../plugins/VisionPoint-blocks/src/blocks/we-offer/style.scss");

(function (blocks, editor, element, components) {
  var el = element.createElement;
  var MediaUpload = editor.MediaUpload;
  var TextControl = components.TextControl;
  var TextareaControl = components.TextareaControl;
  blocks.registerBlockType("blocks/we", {
    title: "We Offer Block",
    icon: "format-image",
    category: "common",
    supports: {
      // Add support for the "inspector" panel
      inspector: true
    },
    attributes: {
      head_title: {
        type: "string",
        default: ""
      },
      head_sub_title: {
        type: "string",
        default: ""
      },
      items: {
        type: "array",
        default: []
      }
    },
    edit: function edit(props) {
      var head_title = props.attributes.head_title;
      var head_sub_title = props.attributes.head_sub_title;
      var items = props.attributes.items;
      console.log(items, "index item");
      function handleSelectImage(index, media) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          image: media.url
        });
        props.setAttributes({
          items: updatedItems
        });
      }
      function handleChangeTitle(index, value) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          title: value
        });
        props.setAttributes({
          items: updatedItems
        });
      }
      function handleChangeImageText(index, value) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          imagetext: value
        });
        props.setAttributes({
          items: updatedItems
        });
      }
      function handleAddItem() {
        var newItems = Array.from(items);
        newItems.push({
          image: "",
          title: "",
          imagetext: ""
        });
        props.setAttributes({
          items: newItems
        });
      }
      function handleRemoveItem(index) {
        var updatedItems = Array.from(items);
        updatedItems.splice(index, 1);
        props.setAttributes({
          items: updatedItems
        });
      }
      function handleHeadTitleChange(value) {
        props.setAttributes({
          head_title: value
        });
      }
      function handleHeadSubtitleChange(value) {
        props.setAttributes({
          head_sub_title: value
        });
      }
      return el("div", {}, el(TextControl, {
        type: "text",
        label: "Head Title",
        value: head_title,
        onChange: handleHeadTitleChange
      }), el(TextControl, {
        type: "text",
        label: "Head Subtitle",
        value: head_sub_title,
        onChange: handleHeadSubtitleChange
      }), el("button", {
        onClick: handleAddItem
      }, "Add Item"), items.map(function (item, index) {
        return el("div", {
          key: index
        }, el("div", {
          style: {
            display: "inline-block"
          }
        }, el(MediaUpload, {
          onSelect: function onSelect(media) {
            handleSelectImage(index, media);
          },
          type: "image",
          render: function render(mediaUploadProps) {
            return el("button", {
              onClick: mediaUploadProps.open,
              className: "components-button editor-post-featured-image__toggle",
              style: {
                backgroundSize: "cover"
              } // Apply fill style to the button
            }, item.image ? el("img", {
              src: item.image,
              alt: "Preview",
              className: "image-preview-small",
              style: {
                width: "100%",
                height: "100%"
              }
            }) // Fix image size
            : "Select Image");
          }
        })), el(TextControl, {
          label: " Link Name ",
          type: "text",
          className: "components-text-control__input",
          placeholder: "Enter title",
          value: item.title,
          onChange: function onChange(value) {
            handleChangeTitle(index, value);
          }
        }), el(TextControl, {
          label: " Link Url ",
          type: "text",
          className: "components-textarea-control__input",
          placeholder: "Enter imagetext",
          value: item.imagetext,
          onChange: function onChange(value) {
            handleChangeImageText(index, value);
          }
        }), el("button", {
          onClick: function onClick() {
            handleRemoveItem(index);
          }
        }, "Remove Item"));
      }));
    },
    save: function save(props) {
      var head_title = props.attributes.head_title;
      var head_sub_title = props.attributes.head_sub_title;
      var items = props.attributes.items;
      return el("div", {}, el("div", {
        className: "container"
      }, el("div", {
        className: "row container"
      }, el("div", {
        className: "col-md-5"
      }, el("h3", {}, head_sub_title), el("h1", {}, head_title), items.map(function (item, index) {
        return el("figure", {}, el("figcaption", {}, el("div", {}, el("a", {
          href: item.imagetext,
          className: "img" + index
        }, el("span", {
          className: "underline"
        }, item.title), el("i", {
          className: "no-underline we1 fa fa-chevron-right"
        }), el("i", {
          className: "no-underline we2 fa fa-sharp fa-regular fa-arrow-right-long"
        })))));
      })), el("div", {
        class: "col-md-7"
      }, items.map(function (item, index) {
        return el("figure", {
          key: index
        }, el("div", {
          className: "img-grow",
          id: "img-to-change"
        }, item.image && el("img", {
          src: item.image,
          alt: "Preview",
          id: "image" + index,
          className: "img-main img" + index
        })));
      })))));
    }
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/accordion/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/accordion/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/admission/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/admission/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/admissionhero/style.scss":
/*!****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/admissionhero/style.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/button/style.scss":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/button/style.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/card/style.scss":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/card/style.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/carousel/style.scss":
/*!***********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/carousel/style.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cleveland/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cleveland/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/column/style.scss":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/column/style.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-info/style.scss":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-info/style.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/style.scss":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/style.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/contact-us/style.scss":
/*!*************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/contact-us/style.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/css/style.scss":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/css/style.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta-2/style.scss":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta-2/style.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta-3/style.scss":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta-3/style.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/cta/style.scss":
/*!******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/cta/style.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/style.scss":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/style.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/ctalink/style.scss":
/*!**********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/ctalink/style.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/event/style.scss":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/event/style.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/featured-post/style.scss":
/*!****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/featured-post/style.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/hero/style.scss":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/hero/style.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/imagetext/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/imagetext/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/in-this-section/style.scss":
/*!******************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/in-this-section/style.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/latest-news/style.scss":
/*!**************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/latest-news/style.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/latest-programs/style.scss":
/*!******************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/latest-programs/style.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/location/style.scss":
/*!***********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/location/style.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/style.scss":
/*!*****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/style.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/news-card/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/news-card/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/our-facility/style.scss":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/our-facility/style.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/programs/style.scss":
/*!***********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/programs/style.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/promo/style.scss":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/promo/style.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/resources/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/resources/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/single-button/style.scss":
/*!****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/single-button/style.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/social/style.scss":
/*!*********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/social/style.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/standard-inner/style.scss":
/*!*****************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/standard-inner/style.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/statistic-2/style.scss":
/*!**************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/statistic-2/style.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/statistic/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/statistic/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/stylelist/style.scss":
/*!************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/stylelist/style.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/table/style.scss":
/*!********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/table/style.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/tabs/style.scss":
/*!*******************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/tabs/style.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/testinonials/style.scss":
/*!***************************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/testinonials/style.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks/we-offer/style.scss":
/*!***********************************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks/we-offer/style.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "../../plugins/VisionPoint-blocks/src/blocks.js":
/*!******************************************************!*\
  !*** ../../plugins/VisionPoint-blocks/src/blocks.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_standard_inner_standard_inner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/standard-inner/standard-inner.js */ "../../plugins/VisionPoint-blocks/src/blocks/standard-inner/standard-inner.js");
/* harmony import */ var _blocks_in_this_section_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/in-this-section/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/in-this-section/index.js");
/* harmony import */ var _blocks_contact_info_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/contact-info/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/contact-info/index.js");
/* harmony import */ var _blocks_paragraph_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/paragraph/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/paragraph/index.js");
/* harmony import */ var _blocks_column_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/column/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/column/index.js");
/* harmony import */ var _blocks_carousel_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/carousel/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/carousel/index.js");
/* harmony import */ var _blocks_accordion_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/accordion/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/accordion/index.js");
/* harmony import */ var _blocks_cta_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/cta/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/cta/index.js");
/* harmony import */ var _blocks_cta_2_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/cta-2/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/cta-2/index.js");
/* harmony import */ var _blocks_cta_3_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/cta-3/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/cta-3/index.js");
/* harmony import */ var _blocks_button_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/button/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/button/index.js");
/* harmony import */ var _blocks_tabs_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/tabs/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/tabs/index.js");
/* harmony import */ var _blocks_imagetext_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/imagetext/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/imagetext/index.js");
/* harmony import */ var _blocks_statistic_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/statistic/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/statistic/index.js");
/* harmony import */ var _blocks_statistic_2_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/statistic-2/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/statistic-2/index.js");
/* harmony import */ var _blocks_event_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/event/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/event/index.js");
/* harmony import */ var _blocks_css_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/css/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/css/index.js");
/* harmony import */ var _blocks_stylelist_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/stylelist/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/stylelist/index.js");
/* harmony import */ var _blocks_latest_news_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/latest-news/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/latest-news/index.js");
/* harmony import */ var _blocks_hero_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/hero/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/hero/index.js");
/* harmony import */ var _blocks_cleveland_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/cleveland/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/cleveland/index.js");
/* harmony import */ var _blocks_ctalink_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/ctalink/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/ctalink/index.js");
/* harmony import */ var _blocks_admission_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/admission/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/admission/index.js");
/* harmony import */ var _blocks_we_offer_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/we-offer/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/we-offer/index.js");
/* harmony import */ var _blocks_ctaarrowlink_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/ctaarrowlink/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/ctaarrowlink/index.js");
/* harmony import */ var _blocks_breadcrumbs_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/breadcrumbs/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/breadcrumbs/index.js");
/* harmony import */ var _blocks_table_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/table/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/table/index.js");
/* harmony import */ var _blocks_programs_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/programs/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/programs/index.js");
/* harmony import */ var _blocks_testinonials_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/testinonials/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/testinonials/index.js");
/* harmony import */ var _blocks_latest_programs_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/latest-programs/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/latest-programs/index.js");
/* harmony import */ var _blocks_location_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/location/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/location/index.js");
/* harmony import */ var _blocks_card_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/card/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/card/index.js");
/* harmony import */ var _blocks_admissionhero_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/admissionhero/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/admissionhero/index.js");
/* harmony import */ var _blocks_contact_us_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/contact-us/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/contact-us/index.js");
/* harmony import */ var _blocks_resources_index_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/resources/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/resources/index.js");
/* harmony import */ var _blocks_contact_us_2_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/contact-us-2/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/contact-us-2/index.js");
/* harmony import */ var _blocks_promo_index_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/promo/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/promo/index.js");
/* harmony import */ var _blocks_newpostcontent_index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/newpostcontent/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/newpostcontent/index.js");
/* harmony import */ var _blocks_featured_post_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/featured-post/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/featured-post/index.js");
/* harmony import */ var _blocks_social_index_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/social/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/social/index.js");
/* harmony import */ var _blocks_news_card_index_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/news-card/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/news-card/index.js");
/* harmony import */ var _blocks_single_button_index_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/single-button/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/single-button/index.js");
/* harmony import */ var _blocks_our_facility_index_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/our-facility/index.js */ "../../plugins/VisionPoint-blocks/src/blocks/our-facility/index.js");
/**
 * Import Blocks
 */

// import './blocks/example'













































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks": 0,
/******/ 			"./style-blocks": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkVisionPoint"] = self["webpackChunkVisionPoint"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-blocks"], function() { return __webpack_require__("../../plugins/VisionPoint-blocks/src/blocks.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=blocks.js.map