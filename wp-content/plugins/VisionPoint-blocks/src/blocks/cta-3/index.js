import "./style.scss";
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
        default: "Default Title",
      },
      description: {
        type: "string",
        default: "Default Description",
      },
      button1Name: {
        type: "string",
        default: "Button 1",
      },
      button1Link: {
        type: "string",
        default: "#",
      },

      backgroundColor: {
        type: "string",
        default: "#F2F2F2",
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;

      function onTitleChange(newTitle) {
        setAttributes({ title: newTitle });
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
          {
            style: {
              backgroundColor: attributes.backgroundColor,
              padding: "20px",
            },
          },
          el(TextControl, {
            label: "Title",
            value: attributes.title,
            onChange: onTitleChange,
          }),
          el(TextControl, {
            label: "Description",
            value: attributes.description,
            onChange: onDescriptionChange,
          }),
          el(TextControl, {
            label: "Button 1 Name",
            value: attributes.button1Name,
            onChange: onButton1NameChange,
          }),
          el(URLInput, {
            label: "Button 1 Link",
            value: attributes.button1Link,
            onChange: onButton1LinkChange,
          })
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;

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
          { className: "container" },
          el(
            "div",
            { className: "main-wrapper" },
            el(
              "div",
              { className: "row" },

              el(
                "div",
                { className: "part-1" },
                el("h2", null, attributes.title),
                el("p", null, attributes.description)
              ),

              el(
                "div",
                { className: "part-2" },
                el(
                  "a",
                  { href: attributes.button1Link, className: "secondary" },
                  attributes.button1Name
                )
              )
            )
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
