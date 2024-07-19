import "./style.scss";
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
      button2Name: {
        type: "string",
        default: "Button 2",
      },
      button2Link: {
        type: "string",
        default: "#",
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2",
      },
      gradientColor: {
        type: "string",
        default: "linear-gradient(0deg, #06038D 58%, #030247 100%)",
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

      function onButton2NameChange(newName) {
        setAttributes({ button2Name: newName });
      }

      function onButton2LinkChange(newLink) {
        setAttributes({ button2Link: newLink });
      }

      function onBackgroundColorChange(newColor) {
        setAttributes({ backgroundColor: newColor });
      }

      function onGradientColorChange(newGradientColor) {
        setAttributes({ gradientColor: newGradientColor });
      }

      return el(
        Fragment,
        null,
        el(InspectorControls, null),
        el(
          "div",
          {
            style: {
              background: `linear-gradient(0deg, #06038D 58%, #030247 100%)`,
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
          }),
          el(TextControl, {
            label: "Button 2 Name",
            value: attributes.button2Name,
            onChange: onButton2NameChange,
          }),
          el(URLInput, {
            label: "Button 2 Link",
            value: attributes.button2Link,
            onChange: onButton2LinkChange,
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
            background: `linear-gradient(0deg, #06038D 58%, #030247 100%)`,
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
                { className: "col-md-7" },
                el(
                  "div",
                  { className: "part-1" },
                  el("h2", null, attributes.title),
                  el("p", null, attributes.description)
                )
              ),
              el(
                "div",
                { className: "col-md-5" },
                el(
                  "div",
                  { className: "part-2" },
                  el(
                    "a",
                    {
                      href: attributes.button1Link,
                      className: "secondary",
                    },
                    attributes.button1Name
                  ),
                  el(
                    "a",
                    {
                      href: attributes.button2Link,
                      className: "secondary-two",
                    },
                    attributes.button2Name
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
