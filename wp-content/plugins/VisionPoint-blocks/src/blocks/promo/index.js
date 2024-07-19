import "./style.scss";
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
        default: "",
      },
      mainHeading1: {
        type: "string",
        default: "Default Main Heading 1",
      },
      maindescription: {
        type: "string",
        default: "Default Paragraph Here",
      },
      mainbutton1Name: {
        type: "string",
        default: "Main Button 1",
      },
      mainbutton1Link: {
        type: "string",
        default: "#",
      },

      mainbutton2Name: {
        type: "string",
        default: "Main Button 2",
      },
      mainbutton2Link: {
        type: "string",
        default: "#",
      },

      mainHeading2: {
        type: "string",
        default: "CTA Heading Here",
      },
      description: {
        type: "string",
        default: "CTA Description",
      },
      button1Name: {
        type: "string",
        default: "CTA Button 1",
      },
      button1Link: {
        type: "string",
        default: "#",
      },
      button2Name: {
        type: "string",
        default: "CTA Button 2",
      },
      button2Link: {
        type: "string",
        default: "#",
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2",
      },
      listItems: {
        type: "array",
        default: ["Item 1", "Item 2", "Item 3"],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      const { listItems } = attributes;

      function onSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }
      function onMainHeading1Change(newHeading) {
        setAttributes({ mainHeading1: newHeading });
      }

      function onMainDescriptionChange(newDescription) {
        setAttributes({ maindescription: newDescription });
      }

      function onMainButton1NameChange(newName) {
        setAttributes({ mainbutton1Name: newName });
      }

      function onMainButton1LinkChange(newLink) {
        setAttributes({ mainbutton1Link: newLink });
      }

      function onMainButton2NameChange(newName) {
        setAttributes({ mainbutton2Name: newName });
      }

      function onMainButton2LinkChange(newLink) {
        setAttributes({ mainbutton2Link: newLink });
      }

      function onMainHeading2Change(newHeading) {
        setAttributes({ mainHeading2: newHeading });
      }

      function onDescriptionChange(newDescription) {
        setAttributes({ description: newDescription });
      }

      function onButton1NameChange(newName) {
        setAttributes({ button1Name: newName });
      }

      function onButton1LinkChange(newLink) {
        setAttributes({ button1Link: newLink });
      }

      function onBackgroundColorChange(newColor) {
        setAttributes({ backgroundColor: newColor });
      }
      function onChangeListItem(newListItems) {
        setAttributes({ listItems: newListItems });
      }

      function addListItem() {
        const newListItems = listItems.concat([""]);
        setAttributes({ listItems: newListItems });
      }

      function removeListItem(index) {
        const newListItems = listItems.filter((_, i) => i !== index);
        setAttributes({ listItems: newListItems });
      }
      return el(
        Fragment,
        null,
        el(
          InspectorControls,
          null,
          el(PanelColorSettings, {
            title: "Background Color",
            colorSettings: [
              {
                label: "Background Color",
                onChange: onBackgroundColorChange,
                value: attributes.backgroundColor,
              },
            ],
          })
        ),
        el(
          "div",
          {},
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
          )
        ),
        el(
          "div",
          {
            style: {
              backgroundColor: attributes.backgroundColor,
              padding: "20px",
            },
          },
          el(TextControl, {
            label: "Main Heading 1",
            value: attributes.mainHeading1,
            onChange: onMainHeading1Change,
          }),
          el(TextControl, {
            label: "Paragraph Main",
            value: attributes.maindescription,
            onChange: onMainDescriptionChange,
          }),

          el(TextControl, {
            label: "Main Button 1 Name",
            value: attributes.mainbutton1Name,
            onChange: onMainButton1NameChange,
          }),
          el(URLInput, {
            label: "Main Button 1 Link",
            value: attributes.mainbutton1Link,
            onChange: onMainButton1LinkChange,
          }),

          el(TextControl, {
            label: "Main Button 2 Name",
            value: attributes.mainbutton2Name,
            onChange: onMainButton2NameChange,
          }),
          el(URLInput, {
            label: "Main Button 2 Link",
            value: attributes.mainbutton2Link,
            onChange: onMainButton2LinkChange,
          }),

          el(TextControl, {
            label: "CTA Heading ",
            value: attributes.mainHeading2,
            onChange: onMainHeading2Change,
          }),
          el(TextControl, {
            label: "CTA Paragraph",
            value: attributes.description,
            onChange: onDescriptionChange,
          }),
          el(TextControl, {
            label: "CTA Button 1 Name",
            value: attributes.button1Name,
            onChange: onButton1NameChange,
          }),
          el(URLInput, {
            label: "CTA Button 1 Link",
            value: attributes.button1Link,
            onChange: onButton1LinkChange,
          })
        ),
        el(
          "div",
          {},
          listItems.map((item, index) =>
            el(
              "div",
              { key: index },
              el(TextControl, {
                value: item,
                onChange: function (newValue) {
                  const newListItems = listItems.map((value, i) =>
                    i === index ? newValue : value
                  );
                  onChangeListItem(newListItems);
                },
              }),
              el(
                "Button",
                {
                  onClick: function () {
                    removeListItem(index);
                  },
                  isDestructive: true,
                },
                "Remove"
              )
            )
          ),
          el(
            "Button",
            {
              onClick: addListItem,
            },
            "Add Item"
          )
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      const { listItems } = attributes;

      return el(
        "div",
        {
          style: {
            backgroundColor: attributes.backgroundColor,
            padding: "20px",
          },
        },
          el(
            "div",
            { className: "main-wrapper" },
            el(
              "div",
              { className: "container offset-container" },
            el(
              "div",
              { className: "row" },

              el(
                "div",
                { className: "col-md-6" },
                el("h2", null, attributes.mainHeading1),
                el("p", null, attributes.maindescription),
                el(
                  "a",
                  {
                    href: attributes.mainbutton1Link,
                    className: "primary",
                  },
                  attributes.mainbutton1Name
                ),
                el(
                  "a",
                  {
                    href: attributes.mainbutton2Link,
                    className: "tertiary",
                  },
                  attributes.mainbutton2Name
                )
              ),
              el(
                "div",
                { className: "col-md-6" },

                el(
                  "ul",
                  { className: "styled-order-list" },
                  listItems.map((item, index) => el("li", { key: index }, item))
                )
              )
            )
          ),
            el(
              "div",
              { className: "offset-container-secondary" },
              el(
                "div",
                { className: "offset-wrapper" },
              el(
                "div",
                { className: "cta-wrapper" },
                el(
                  "div",
                  { className: "row" },
                  el(
                    "div",
                    { className: "col-md-2" },

                    attributes.image &&
                      el("img", {
                        src: attributes.image,
                        alt: "Preview",
                        className: "icon",
                      })
                  ),

                  el(
                    "div",
                    { className: "col-md-8" },
                    el("h2", null, attributes.mainHeading2),
                    el("p", null, attributes.description),
                    el(
                      "a",
                      { href: attributes.button1Link, className: "primary-two" },
                      attributes.button1Name
                    )
                  )
                )
              )
            )
            )
          )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
