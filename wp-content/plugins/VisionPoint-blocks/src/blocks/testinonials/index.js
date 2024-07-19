import "./style.scss";
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var MediaUpload = editor.MediaUpload; // Use "editor.MediaUpload" instead of "wp.editor.MediaUpload"
  var __ = wp.i18n.__;

  blocks.registerBlockType("blocks/testimonial", {
    title: __("Testimonial", "your-plugin"), // Corrected "testimonal" to "Testimonial"
    icon: "slides",
    category: "common",
    attributes: {
      slides: {
        type: "array",
        default: [],
      },
      title: {
        type: "string",
        default: "",
      },
      paragraph: {
        type: "string",
        default: "",
      },
      content_name: {
        type: "array",
        default: [],
      },
      content_year: {
        type: "array",
        default: [],
      },
      images: {
        type: "array",
        default: [],
      },
    },

    edit: function (props) {
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
        props.setAttributes({ slides: updatedSlides });
      }

      function onImagesChange(value, index) {
        var updatedImages = attributes.images.slice(); // Corrected "images" to "attributes.images"
        updatedImages[index] = value;
        props.setAttributes({ images: updatedImages });
      }

      function onTitleChange(value) {
        props.setAttributes({ title: value });
      }

      function onParagraphChange(value) {
        props.setAttributes({ paragraph: value });
      }

      function onContentNameChange(value, index) {
        var updatedContentName = content_name.slice();
        updatedContentName[index] = value;
        props.setAttributes({ content_name: updatedContentName });
      }

      function onContentYearChange(value, index) {
        var updatedContentYear = content_year.slice();
        updatedContentYear[index] = value;
        props.setAttributes({ content_year: updatedContentYear });
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
          images: updatedImages,
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
          images: updatedImages,
        });
      }

      return el(
        "div",
        { className: props.className },
        el(
          "div",
          { className: "block-edit-form" },
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
          el(
            "div",
            { className: "carousel" },
            attributes.images.map(function (image, index) {
              // Corrected "images" to "attributes.images"
              if (index === 0) {
                return null;
              }
              return el(
                "div",
                { key: index },
                el(
                  "div",
                  { style: { display: "inline-block" } },
                  el(MediaUpload, {
                    onSelect: function (media) {
                      onImagesChange(media.url, index);
                    },
                    type: "image",
                    value: image,
                    render: function (obj) {
                      return el(
                        components.Button,
                        {
                          className: image
                            ? "image-button"
                            : "button button-large",
                          onClick: obj.open,
                          style: { backgroundSize: "cover" },
                        },
                        !image
                          ? __("Upload Media", "your-plugin")
                          : el("img", {
                              src: image,
                              style: { width: "100px", height: "100px" },
                            })
                      );
                    },
                  })
                ),
                el(TextControl, {
                  tagName: "div",
                  multiline: true,
                  label: __("Content", "your-plugin"),
                  placeholder: __("Enter slide content...", "your-plugin"),
                  value: slides[index] || "", // Corrected "slide" to "slides[index]"
                  onChange: function (value) {
                    onSlideChange(value, index);
                  },
                }),
                el(TextControl, {
                  label: __("Content Name", "your-plugin"),
                  value: content_name[index] || "", // Corrected "content_name" to "content_name[index]"
                  onChange: function (value) {
                    onContentNameChange(value, index);
                  },
                }),
                el(TextControl, {
                  label: __("Content Year", "your-plugin"),
                  value: content_year[index] || "", // Corrected "content_year" to "content_year[index]"
                  onChange: function (value) {
                    onContentYearChange(value, index);
                  },
                }),
                el(components.IconButton, {
                  icon: "no-alt",
                  onClick: function () {
                    removeSlide(index);
                  },
                  label: __("Remove Slide", "your-plugin"),
                })
              );
            }),
            el(
              "div",
              null,
              el(components.IconButton, {
                icon: "plus",
                onClick: addSlide,
                label: __("Add Slide", "your-plugin"),
              })
            )
          )
        )
      );
    },

    save: function (props) {
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
          return el(
            "div",
            { key: index },

            el(
              "div",
              { className: "name" },
              el("div", { className: "index-indicator" }),
              el("h2", {}, content_name[index])
            ),
            el("p", { dangerouslySetInnerHTML: { __html: slide } }),
            // Add the content_name within a new <div>
            el("div", { className: "year" }, content_year[index])

            // Add the content_year within a new <div>
          );
        }
      });
      var slideImages = slides.map(function (slide, index) {
        if (index !== 0) {
          // Use "!== 0" instead of "!= 0"
          return el("img", { src: images[index] });
          // Add the content_year within a new <div>
        }
      });
      var imageUrl =
        window.location.origin +
        "/wp-content/uploads/2023/07/ddd-removebg-preview.png";

      return el(
        "div",
        { className: props.className + " main-wrapper" }, // Add a space between className and main-wrapper
        el(
          "div",
          { className: "container" },
          el(
            "div",
            { className: "row" },
            el(
              "div",
              { className: "carousel-sync-1 carousel1 col-md-6" },
              slideImages
            ),
            el(
              "div",
              { className: "col-md-6" },
              el("div", { className: "outer-div" }),
              el("span", {}, "&#8222;"),
              el(
                "div",
                { className: "main carousel1 carousel-sync-2" },
                slideElements
              )
            )
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
