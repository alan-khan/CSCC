import "./style.scss";

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
        default: [
          {
            buttonName: "Button 1",
            buttonLink: "#",
            buttonType: "primary",
          },
        ],
      },
      backgroundColor: {
        type: "string",
        default: "#F2F2F2",
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;

      function onButtonNameChange(index, newName) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonName = newName;
        setAttributes({ buttons: buttons });
      }

      function onButtonLinkChange(index, newLink) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonLink = newLink;
        setAttributes({ buttons: buttons });
      }

      function onButtonTypeChange(index, newType) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons[index].buttonType = newType;
        setAttributes({ buttons: buttons });
      }

      function addButton() {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.push({
          buttonName: "New Button",
          buttonLink: "#",
          buttonType: "primary",
        });
        setAttributes({ buttons: buttons });
      }

      function removeButton(index) {
        var buttons = attributes.buttons.slice(); // Copy the array
        buttons.splice(index, 1);
        setAttributes({ buttons: buttons });
      }

      return el(
        Fragment,
        null,

        el(
          "div",
          {
            style: {
              padding: "20px",
            },
          },
          attributes.buttons.map(function (button, index) {
            return el(
              Fragment,
              { key: index },
              el(TextControl, {
                label: "Single Button Name",
                value: button.buttonName,
                onChange: function (newName) {
                  onButtonNameChange(index, newName);
                },
              }),
              el(URLInput, {
                label: "Single Button Link",
                value: button.buttonLink,
                onChange: function (newLink) {
                  onButtonLinkChange(index, newLink);
                },
              }),
              el(SelectControl, {
                label: "Single Button Type",
                value: button.buttonType,
                options: [
                  { value: "primary", label: "Primary" },
                  { value: "secondary", label: "Secondary" },
                  { value: "tertiary", label: "Tertiary" },
                  { value: "primary-two", label: "Primary Two" },
                  { value: "secondary-two", label: "Secondary Two" },
                  { value: "tertiary-two", label: "Tertiary Two" },
                  { value: "inactive", label: "inactive" },
                  { value: "primary active", label: "Primary Active" },
                  { value: "secondary active", label: "Secondary Active" },
                  { value: "tertiary active", label: "Tertiary Active" },
                  { value: "primary-two active", label: "Primary Two Active" },
                  {
                    value: "secondary-two active",
                    label: "Secondary Two Active",
                  },
                  {
                    value: "tertiary-two active",
                    label: "Tertiary Two Active",
                  },
                  { value: "inactive active", label: "inactive Active" },
                ],
                onChange: function (newType) {
                  onButtonTypeChange(index, newType);
                },
              }),
              el(
                "button",
                {
                  className: "button-remove",
                  onClick: function () {
                    removeButton(index);
                  },
                },
                "Remove Button"
              )
            );
          }),
          el(
            "button",
            {
              className: "button-add",
              onClick: addButton,
            },
            "Add Button"
          )
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;

      return el(
        "div",
        {
          style: {
            padding: "20px",
          },
        },
        attributes.buttons.map(function (button, index) {
          return el(
            "a",
            {
              href: button.buttonLink,
              className: button.buttonType,
              "data-type": button.buttonType,
              key: index,
            },
            button.buttonName
          );
        })
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
