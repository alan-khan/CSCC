import "./style.scss";
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
        default: "",
      },
      content: {
        type: "string",
        source: "html",
        selector: ".card-text",
        default: "",
      },
      image: {
        type: "string",
        default: "",
      },
      anchorText: {
        type: "string",
        default: "",
      },
      anchorLink: {
        type: "string",
        default: "",
      },
      status: {
        type: "string",
        default: "normal",
      },
    },
    edit: function (props) {
      var attributes = props.attributes;
      function onSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }
      function onChangeAnchorText(value) {
        props.setAttributes({
          anchorText: value,
        });
      }
      function onChangeAnchorLink(value) {
        props.setAttributes({
          anchorLink: value,
        });
      }
      return el(
        "div",
        { className: props.className },
        el(components.SelectControl, {
          label: __("Status", "your-plugin"),
          value: attributes.status,
          options: [
            { label: __("Active", "your-plugin"), value: "active" },
            { label: __("Disable", "your-plugin"), value: "disable" },
            { label: __("Normal", "your-plugin"), value: "normal" },
          ],
          onChange: function (value) {
            props.setAttributes({ status: value });
          },
        }),
        el(TextControl, {
          label: __("Title", "your-plugin"),
          value: attributes.title,
          onChange: function (value) {
            props.setAttributes({ title: value });
          },
        }),
        el(TextControl, {
          label: __("Content", "your-plugin"),
          value: attributes.content,
          onChange: function (value) {
            props.setAttributes({ content: value });
          },
        }),
        el(TextControl, {
          label: __("Anchor Text", "your-plugin"),
          value: attributes.anchorText,
          onChange: onChangeAnchorText,
        }),
        el(TextControl, {
          label: __("Anchor Link", "your-plugin"),
          value: attributes.anchorLink,
          onChange: onChangeAnchorLink,
        }),
        el(
          "div",
          { className: "cards" },
          el(MediaUpload, {
            onSelect: onSelectImage,
            type: "image",
            render: function (mediaUploadProps) {
              return el(
                "div",
                { className: "card-img-top", onClick: mediaUploadProps.open },
                attributes.image
                  ? el("img", { src: attributes.image, alt: "Card image" })
                  : __("Upload Image", "your-plugin")
              );
            },
          }),
          el(
            "div",
            { className: "card-body" },
            el("h5", { className: "card-title" }, attributes.title),
            el("p", { className: "card-text" }, attributes.content),
            el(
              "a",
              { className: "", href: attributes.anchorLink },
              attributes.anchorText
                ? attributes.anchorText
                : __("See Profile", "your-plugin")
            )
          )
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      return el(
        "div",
        { className: props.className },
        el(
          "div",
          { className: "cards " + attributes.status },
          el("img", {
            className: "card-img-top",
            src: attributes.image,
            alt: "Card image",
          }),
          el(
            "div",
            { className: "card-body" },
            el("h5", { className: "card-title" }, attributes.title),
            el(
              "p",
              { className: "card-text" },
              attributes.content.length <= 110
                ? attributes.content
                : attributes.content.substring(0, 110) + "."
            ),
            el(
              "a",
              { className: "", href: attributes.anchorLink },
              attributes.anchorText
                ? attributes.anchorText
                : __("See Profile", "your-plugin")
            )
          )
        )
      );
    },
  };
  registerBlockType("blocks/card", CardBlock);
})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.element,
  window.wp.components,
  window.wp.i18n
);
