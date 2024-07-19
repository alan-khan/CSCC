import "./style.scss";
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
      inspector: true,
    },

    attributes: {
      main_title: {
        type: "string",
        default: "",
      },
      sub_text: {
        type: "string",
        default: "",
      },
      cta_button_name: {
        type: "string",
        default: "",
      },
      cta_button_link: {
        type: "string",
        default: "",
      },
      select_option: {
        type: "string",
        default: "option1",
      },
      image: {
        type: "string",
        default: "",
      },
      repeater_fields: {
        type: "array",
        default: [],
      },
      front_data: {
        type: "array",
        default: [],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;

      function onSelectImage(media) {
        props.setAttributes({
          image: media.url,
        });
      }

      function onChangeMainTitle(value) {
        props.setAttributes({
          main_title: value,
        });
      }

      function onChangeSubText(value) {
        props.setAttributes({
          sub_text: value,
        });
      }

      function onChangeCtaButtonName(value) {
        props.setAttributes({
          cta_button_name: value,
        });
      }

      function onChangeCtaButtonLink(value) {
        props.setAttributes({
          cta_button_link: value,
        });
      }

      function onChangeSelectOption(value) {
        props.setAttributes({
          select_option: value,
        });
      }

      function handleAddField() {
        var newFields = attributes.repeater_fields.slice();
        newFields.push({ title: "", select: "option1", select_url: "" });

        props.setAttributes({
          repeater_fields: newFields,
        });
      }

      function handleChangeTitle(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].title = value;

        props.setAttributes({
          repeater_fields: updatedFields,
        });
      }

      function handleChangeSelect(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].select = value;

        props.setAttributes({
          repeater_fields: updatedFields,
        });
      }

      function handleUrl(index, value) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields[index].select_url = value;

        props.setAttributes({
          repeater_fields: updatedFields,
        });
      }

      function handleRemoveField(index) {
        var updatedFields = attributes.repeater_fields.slice();
        updatedFields.splice(index, 1);

        props.setAttributes({
          repeater_fields: updatedFields,
        });
      }

      function handleAddFrontData() {
        var newFrontData = attributes.front_data.slice();
        newFrontData.push("");

        props.setAttributes({
          front_data: newFrontData,
        });
      }

      function handleChangeFrontData(index, value) {
        var updatedFrontData = attributes.front_data.slice();
        updatedFrontData[index] = value;

        props.setAttributes({
          front_data: updatedFrontData,
        });
      }

      function handleRemoveFrontData(index) {
        var updatedFrontData = attributes.front_data.slice();
        updatedFrontData.splice(index, 1);

        props.setAttributes({
          front_data: updatedFrontData,
        });
      }

      return el(
        "div",
        {},
        el(
          "div",
          { className: "image-upload", style: { display: "inline-block" } },
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
                  style: { backgroundSize: "cover" },
                },
                attributes.image
                  ? el("img", {
                      src: attributes.image,
                      alt: "Preview",
                      className: "image-preview",
                      style: { width: "100%", height: "100%" },
                    })
                  : "Select Image"
              );
            },
          })
        ),
        el(TextControl, {
          type: "text",
          label: "Main Title",
          value: attributes.main_title,
          onChange: onChangeMainTitle,
        }),
        el(TextControl, {
          type: "text",
          label: "Sub Text",
          value: attributes.sub_text,
          onChange: onChangeSubText,
        }),
        el(TextControl, {
          type: "text",
          label: "CTA Button Name",
          value: attributes.cta_button_name,
          onChange: onChangeCtaButtonName,
        }),
        el(TextControl, {
          type: "url",
          label: "CTA Button Link",
          value: attributes.cta_button_link,
          onChange: onChangeCtaButtonLink,
        }),
        el(
          "div",
          { className: "repeater-fields" },
          el("button", { onClick: handleAddField }, "Add Card"),
          attributes.repeater_fields.map(function (field, index) {
            return el(
              "div",
              { key: index },
              el(TextControl, {
                type: "text",
                label: "Title",
                value: field.title,
                onChange: function (value) {
                  handleChangeTitle(index, value);
                },
              }),
              el(SelectControl, {
                label: "Select",
                value: field.select,
                options: [
                  {
                    label: "News & Events",
                    value:
                      "wp-content/themes/VisionPoint/assets/images/News_Events.svg",
                  },
                  {
                    label: "Orientation",
                    value:
                      "wp-content/themes/VisionPoint/assets/images/Orientation.svg",
                  },
                  {
                    label: "Advising",
                    value:
                      "wp-content/themes/VisionPoint/assets/images/advising.svg",
                  },
                  {
                    label: "Registration",
                    value:
                      "wp-content/themes/VisionPoint/assets/images/registration.svg",
                  },
                ],
                onChange: function (value) {
                  handleChangeSelect(index, value);
                },
              }),
              el(TextControl, {
                type: "text",
                label: "Link Url",
                value: field.select_url,
                onChange: function (value) {
                  handleUrl(index, value);
                },
              }),
              el(
                "button",
                {
                  onClick: function () {
                    handleRemoveField(index);
                  },
                },
                "Remove Card"
              )
            );
          })
        ),
        el(
          "div",
          { className: "front-data-fields" },
          el("button", { onClick: handleAddFrontData }, "Add Option on Select"),
          attributes.front_data.map(function (data, index) {
            return el(
              "div",
              { key: index },
              el(TextControl, {
                type: "text",
                label: "Add Option for Select",
                value: data,
                onChange: function (value) {
                  handleChangeFrontData(index, value);
                },
              }),
              el(
                "button",
                {
                  onClick: function () {
                    handleRemoveFrontData(index);
                  },
                },
                "Remove Option on Select"
              )
            );
          })
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;

      return el(
        "div",
        {
          className: "hero-block",
          style: "background-image:url(" + attributes.image + ")",
        },
        attributes.image &&
          el("img", {
            src: attributes.image,
            alt: "Preview",
            className: "image",
          }),
        el(
          "div",
          { className: "container" },
          el(
            "div",
            { className: "hero-content" },
            el("h1", {}, attributes.main_title),
            el("h4", {}, attributes.sub_text),
            el("h3", {}, el("span", {}, "I Am...")),
            el(
              "select",
              {},
              attributes.front_data.map(function (data, index) {
                return el(
                  "option",
                  { key: index, value: data },
                  data
                  // el('p', {}, data)
                  // el('option', {  }, ),
                );
              })
            ),
            el(
              "a",
              {
                className: "btn btn-secondary",
                href: attributes.cta_button_link,
              },
              attributes.cta_button_name
            )
          )
        ),
        el(
          "div",
          { className: "main-wrapper" },
          el(
            "div",
            { className: "container" },
            attributes.repeater_fields.map(function (field, index) {
              return el(
                "a",
                { href: field.select_url },
                el(
                  "div",
                  { key: index, className: "area" },
                  el("img", {
                    src: `https://cscc.vpmdevtech.com/${field.select}`,
                  }),

                  el("h4", {}, field.title)
                )
              );
            })
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);
