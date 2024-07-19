import "./style.scss";

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
        default: "",
      },
      title: {
        type: "string",
        default: "",
      },
      paragraph: {
        type: "string",
        default: "",
      },
      buttons: {
        type: "array",
        default: [],
      },
      image: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var sub_title = attributes.sub_title || "";
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var buttons = attributes.buttons || [];

      function onSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }

      function onChangeSubTitle(value) {
        props.setAttributes({ sub_title: value });
      }

      function onChangeTitle(value) {
        props.setAttributes({ title: value });
      }

      function onChangeParagraph(value) {
        props.setAttributes({ paragraph: value });
      }

      function onAddButton() {
        props.setAttributes({
          buttons: buttons.concat({ button_name: "", button_url: "" }),
        });
      }

      function onRemoveButton(index) {
        props.setAttributes({
          buttons: buttons.filter(function (_, i) {
            return i !== index;
          }),
        });
      }

      function onChangeButtonName(value, index) {
        var updatedButtons = buttons.map(function (button, i) {
          if (i === index) {
            return { button_name: value, button_url: button.button_url };
          }
          return button;
        });
        props.setAttributes({ buttons: updatedButtons });
      }

      function onChangeButtonUrl(value, index) {
        var updatedButtons = buttons.map(function (button, i) {
          if (i === index) {
            return { button_name: button.button_name, button_url: value };
          }
          return button;
        });
        props.setAttributes({ buttons: updatedButtons });
      }

      return el(
        "div",
        null,
        el(TextControl, {
          label: __("Sub Title", "your-plugin"),
          value: sub_title,
          onChange: onChangeSubTitle,
        }),
        el(TextControl, {
          label: __("Title", "your-plugin"),
          value: title,
          onChange: onChangeTitle,
        }),
        el(TextControl, {
          label: __("Paragraph", "your-plugin"),
          value: paragraph,
          onChange: onChangeParagraph,
        }),

        el(
          "div",
          { style: { display: "inline-block" } },
          el(MediaUpload, {
            onSelect: onSelectImage,
            type: "image",
            render: function (mediaUploadProps) {
              return el(
                "button",
                {
                  onClick: mediaUploadProps.open,
                  className:
                    "components-button editor-post-featured-image__toggle",
                  style: { backgroundSize: "cover" }, // Apply fill style to the button
                },
                attributes.image
                  ? el("img", {
                      src: attributes.image,
                      alt: "Preview",
                      className: "image-preview-small",
                      style: { width: "100%", height: "100%" },
                    }) // Fix image size
                  : "Select Image"
              );
            },
          })
        ),
        el(
          "div",
          { className: "button-list" },
          buttons.map(function (button, index) {
            return el(
              "div",
              { key: index, className: "button-item" },
              el(TextControl, {
                label: __("Button Name", "your-plugin"),
                value: button.button_name,
                onChange: function (value) {
                  onChangeButtonName(value, index);
                },
              }),
              el(TextControl, {
                label: __("Button URL", "your-plugin"),
                value: button.button_url,
                onChange: function (value) {
                  onChangeButtonUrl(value, index);
                },
              }),
              el(
                "button",
                {
                  onClick: function () {
                    onRemoveButton(index);
                  },
                },
                __("Remove Button", "your-plugin")
              )
            );
          }),
          el(
            "button",
            {
              onClick: onAddButton,
            },
            __("Add Button", "your-plugin")
          )
        ),
        el(InnerBlocks, {}, "Please Add Latest Programs Block Only")
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var sub_title = attributes.sub_title || "";
      var title = attributes.title || "";
      var paragraph = attributes.paragraph || "";
      var buttons = attributes.buttons || [];
      var image = attributes.image || "";

      return el(
        "div",
        { style: { backgroundImage: `url(${image})` } },
        //el('img',{src:image}),
        el(
          "div",
          { className: "main-div" },
          el(
            "div",
            { className: "part-one" },
            sub_title && el("h5", null, sub_title),
            title && el("h2", null, title),
            paragraph && el("p", null, paragraph),
            el(
              "div",
              { className: "button-list" },
              buttons.map(function (button, index) {
                return el(
                  "div",
                  { key: index, className: "button-item" },
                  el("a", { href: button.button_url }, button.button_name)
                );
              })
            )
          ),
          el("div", { className: "part-two" }, el(InnerBlocks.Content))
        )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
