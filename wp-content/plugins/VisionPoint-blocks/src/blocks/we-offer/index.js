import "./style.scss";
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
      inspector: true,
    },

    attributes: {
      head_title: {
        type: "string",
        default: "",
      },
      head_sub_title: {
        type: "string",
        default: "",
      },
      items: {
        type: "array",
        default: [],
      },
    },

    edit: function (props) {
      var head_title = props.attributes.head_title;
      var head_sub_title = props.attributes.head_sub_title;
      var items = props.attributes.items;
      console.log(items, "index item");
      function handleSelectImage(index, media) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          image: media.url,
        });

        props.setAttributes({
          items: updatedItems,
        });
      }

      function handleChangeTitle(index, value) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          title: value,
        });

        props.setAttributes({
          items: updatedItems,
        });
      }

      function handleChangeImageText(index, value) {
        var updatedItems = Array.from(items);
        updatedItems[index] = Object.assign({}, updatedItems[index], {
          imagetext: value,
        });

        props.setAttributes({
          items: updatedItems,
        });
      }

      function handleAddItem() {
        var newItems = Array.from(items);
        newItems.push({ image: "", title: "", imagetext: "" });

        props.setAttributes({
          items: newItems,
        });
      }

      function handleRemoveItem(index) {
        var updatedItems = Array.from(items);
        updatedItems.splice(index, 1);

        props.setAttributes({
          items: updatedItems,
        });
      }

      function handleHeadTitleChange(value) {
        props.setAttributes({
          head_title: value,
        });
      }

      function handleHeadSubtitleChange(value) {
        props.setAttributes({
          head_sub_title: value,
        });
      }

      return el(
        "div",
        {},
        el(TextControl, {
          type: "text",
          label: "Head Title",
          value: head_title,
          onChange: handleHeadTitleChange,
        }),
        el(TextControl, {
          type: "text",
          label: "Head Subtitle",
          value: head_sub_title,
          onChange: handleHeadSubtitleChange,
        }),
        el("button", { onClick: handleAddItem }, "Add Item"),
        items.map(function (item, index) {
          return el(
            "div",
            { key: index },
            el(
              "div",
              { style: { display: "inline-block" } },
              el(MediaUpload, {
                onSelect: function (media) {
                  handleSelectImage(index, media);
                },
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
                    item.image
                      ? el("img", {
                          src: item.image,
                          alt: "Preview",
                          className: "image-preview-small",
                          style: { width: "100%", height: "100%" },
                        }) // Fix image size
                      : "Select Image"
                  );
                },
              })
            ),
            el(TextControl, {
              label: " Link Name ",
              type: "text",
              className: "components-text-control__input",
              placeholder: "Enter title",
              value: item.title,
              onChange: function (value) {
                handleChangeTitle(index, value);
              },
            }),
            el(TextControl, {
              label: " Link Url ",
              type: "text",
              className: "components-textarea-control__input",
              placeholder: "Enter imagetext",
              value: item.imagetext,
              onChange: function (value) {
                handleChangeImageText(index, value);
              },
            }),
            el(
              "button",
              {
                onClick: function () {
                  handleRemoveItem(index);
                },
              },
              "Remove Item"
            )
          );
        })
      );
    },

    save: function (props) {
      var head_title = props.attributes.head_title;
      var head_sub_title = props.attributes.head_sub_title;
      var items = props.attributes.items;

      return el(
        "div",
        {},
        el(
          "div",
          { className: "container" },
          el(
            "div",
            { className: "row container" },
            el(
              "div",
              { className: "col-md-5" },
              el("h3", {}, head_sub_title),
              el("h1", {}, head_title),

              items.map(function (item, index) {
                return el(
                  "figure",
                  {},
                  el(
                    "figcaption",
                    {},
                    el(
                      "div",
                      {},
                      el(
                        "a",
                        { href: item.imagetext, className: "img" + index },
                        el("span", { className: "underline" }, item.title),
                        el("i", {
                          className: "no-underline we1 fa fa-chevron-right",
                        }),
                        el("i", {
                          className:
                            "no-underline we2 fa fa-sharp fa-regular fa-arrow-right-long",
                        })
                      )
                    )
                  )
                );
              })
            ),

            el(
              "div",
              { class: "col-md-7" },
              items.map(function (item, index) {
                return el(
                  "figure",
                  { key: index },
                  el(
                    "div",
                    { className: "img-grow", id: "img-to-change" },
                    item.image &&
                      el("img", {
                        src: item.image,
                        alt: "Preview",
                        id: "image" + index,
                        className: "img-main img" + index,
                      })
                  )
                );
              })
            )
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.components);
