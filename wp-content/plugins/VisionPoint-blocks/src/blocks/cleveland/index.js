import "./style.scss";
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var SelectControl = components.SelectControl;
  var __ = wp.i18n.__;
  var { registerBlockType } = blocks;

  registerBlockType("blocks/cleveland", {
    title: __("Cleveland", "my-plugin"),
    icon: "admin-settings",
    category: "common",
    attributes: {
      mainTitle: {
        type: "string",
        default: "",
      },
      subTitlecleveland: {
        type: "string",
        default: "",
      },
      fields: {
        type: "array",
        default: [
          {
            title: "",
            selectOption: "fa fa-area-chart",
          },
        ],
      },
      buttonName: {
        type: "string",
        default: "",
      },
      buttonLink: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var mainTitle = attributes.mainTitle;
      var subTitlecleveland = attributes.subTitlecleveland;
      var fields = attributes.fields;
      var buttonName = attributes.buttonName;
      var buttonLink = attributes.buttonLink;

      var onMainTitleChange = function (value) {
        setAttributes({ mainTitle: value });
      };
      var onsubTitleChange = function (value) {
        setAttributes({ subTitlecleveland: value });
      };

      var onFieldChange = function (value, index, field) {
        var updatedFields = fields.slice();
        updatedFields[index][field] = value;
        setAttributes({ fields: updatedFields });
      };

      var onButtonNameChange = function (value) {
        setAttributes({ buttonName: value });
      };

      var onButtonLinkChange = function (value) {
        setAttributes({ buttonLink: value });
      };

      var addField = function () {
        var updatedFields = fields.slice();
        updatedFields.push({ title: "", selectOption: "option1" });
        setAttributes({ fields: updatedFields });
      };

      var removeField = function (index) {
        var updatedFields = fields.slice();
        updatedFields.splice(index, 1);
        setAttributes({ fields: updatedFields });
      };

      return el(
        "div",
        { className: "my-block" },
        el(TextControl, {
          label: __("Sub Title", "my-plugin"),
          value: subTitlecleveland,
          onChange: onsubTitleChange,
        }),
        el(TextControl, {
          label: __("Main Title", "my-plugin"),
          value: mainTitle,
          onChange: onMainTitleChange,
        }),
        el(TextControl, {
          label: __("Button Name", "my-plugin"),
          value: buttonName,
          onChange: onButtonNameChange,
        }),
        el(TextControl, {
          label: __("Button link", "my-plugin"),
          value: buttonLink,
          onChange: onButtonLinkChange,
        }),
        fields.map(function (field, index) {
          return el(
            "div",
            { key: index },
            el(TextControl, {
              label: __("Sub Title", "my-plugin"),
              value: field.title,
              onChange: function (value) {
                return onFieldChange(value, index, "title");
              },
            }),
            el(SelectControl, {
              label: __("Select Option", "my-plugin"),
              value: field.selectOption,
              options: [
                { label: "Anchor", value: "	fa fa-anchor" },
                { label: "Archive", value: "fa fa-archive" },
                { label: "Chart", value: "fa fa-area-chart" },
                { label: "Award", value: "fas fa-award" },
              ],
              onChange: function (value) {
                return onFieldChange(value, index, "selectOption");
              },
            }),
            el(
              "button",
              {
                onClick: function () {
                  return removeField(index);
                },
              },
              "Remove"
            )
          );
        }),
        el("button", { onClick: addField }, "Add Field")
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var mainTitle = attributes.mainTitle;
      var fields = attributes.fields;
      var buttonName = attributes.buttonName;
      var subTitlecleveland = attributes.subTitlecleveland;
      var buttonLink = attributes.buttonLink;

      return el(
        "div",
        { className: "my-block" },
        el("div", { className: "abs1 move-down" }, "W"),
        el("div", { className: "abs2 move-up" }, "H"),
        el("div", { className: "abs3 move-down" }, "Y"),
        el(
          "div",
          { className: "main-wrapper move-up2" },
          el("h5", null, subTitlecleveland),
          el("h1", null, mainTitle),
          el(
            "div",
            { className: "container" },
            el(
              "div",
              { className: "row" },

              fields.map(function (field, index) {
                return el(
                  "div",
                  { key: index, className: "col-md-4" },
                  el("i", { className: field.selectOption }),
                  el("h3", null, field.title)
                );
              })
            ),
            el("a", { href: buttonLink, className: "primary" }, buttonName)
          )
        )
      );
    },
  });
})(wp.blocks, wp.element, wp.components, wp.editor);
