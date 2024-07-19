import "./style.scss";
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var MediaUpload = editor.MediaUpload; // Use "editor.MediaUpload" instead of "wp.editor.MediaUpload"
  var __ = wp.i18n.__;

  blocks.registerBlockType("blocks/location", {
    title: __("Location Block", "your-plugin"), // Corrected "testimonal" to "Testimonial"
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
      sub_title: {
        default: [],
      },
      url_more_button: {
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
      var sub_title = attributes.sub_title || [];
      var url_more_button = attributes.url_more_button || [];

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
      function onUrlMoreButtonChange(value, index) {
        var updatedUrlMoreButton = attributes.url_more_button.slice(); // Corrected "images" to "attributes.images"
        updatedUrlMoreButton[index] = value;
        props.setAttributes({ url_more_button: updatedUrlMoreButton });
      }

      function onTitleChange(value) {
        props.setAttributes({ title: value });
      }

      function onParagraphChange(value) {
        props.setAttributes({ paragraph: value });
      }

      //   function onContentNameChange(value, index) {
      //     var updatedContentName = content_name.slice();
      //     updatedContentName[index] = value;
      //     props.setAttributes({ content_name: updatedContentName });
      //   }

      function onContentSubTitleChange(value, index) {
        var updatedContentName = sub_title.slice();
        updatedContentName[index] = value;
        props.setAttributes({ sub_title: updatedContentName });
      }

      //   function onContentYearChange(value, index) {
      //     var updatedContentYear = content_year.slice();
      //     updatedContentYear[index] = value;
      //     props.setAttributes({ content_year: updatedContentYear });
      //   }

      function addSlide() {
        var updatedSlides = slides.slice();
        updatedSlides.push("");
        // var updatedContentName = content_name.slice();
        // updatedContentName.push('');
        // var updatedContentYear = content_year.slice();
        // updatedContentYear.push('');
        var updatedImages = images.slice();
        updatedImages.push("");
        var updatedSub_title = sub_title.slice();
        updatedSub_title.push("");
        var updatedurl_more_button = url_more_button.slice();
        updatedurl_more_button.push("");

        props.setAttributes({
          slides: updatedSlides,
          sub_title: updatedSub_title,
          url_more_button: updatedurl_more_button,
          // content_name: updatedContentName, content_year: updatedContentYear ,
          images: updatedImages,
        });
      }

      function removeSlide(index) {
        var updatedSlides = slides.slice();
        updatedSlides.splice(index, 1);
        // var updatedContentName = content_name.slice();
        // updatedContentName.splice(index, 1);
        // var updatedContentYear = content_year.slice();
        // updatedContentYear.splice(index, 1);
        var updatedImages = images.slice();
        updatedImages.splice(index, 1);
        var updatedSub_title = sub_title.slice();
        updatedSub_title.splice(index, 1);
        var updatedurl_more_button = url_more_button.slice();
        updatedurl_more_button.splice(index, 1);

        props.setAttributes({
          slides: updatedSlides,
          sub_title: updatedSub_title,
          url_more_button: updatedurl_more_button,
          //  content_name: updatedContentName, content_year: updatedContentYear,
          images: updatedImages,
        });
      }

      return el(
        "div",
        { className: props.className },
        el("h2", {}, "Location"),
        el(
          "div",
          { className: "block-edit-form" },
          el(
            "div",
            { className: "customizer-bar" },
            el(TextControl, {
              label: __("Title", "your-plugin"),
              value: title,
              onChange: onTitleChange,
            }),
            el(TextControl, {
              label: __("Sub Heading", "your-plugin"),
              value: paragraph,
              onChange: onParagraphChange,
            })
          ),
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
                  label: __("Sub Title", "your-plugin"),
                  placeholder: __("Enter Sub Title", "your-plugin"),
                  value: sub_title[index] || "", // Corrected "slide" to "slides[index]"
                  onChange: function (value) {
                    onContentSubTitleChange(value, index);
                  },
                }),
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
                  tagName: "div",
                  multiline: true,
                  label: __("URL for Button", "your-plugin"),
                  placeholder: __("Enter URL For Button...", "your-plugin"),
                  value: url_more_button[index] || "", // Corrected "slide" to "slides[index]"
                  onChange: function (value) {
                    onUrlMoreButtonChange(value, index);
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
      var sub_title = attributes.sub_title || [];
      var url_more_button = attributes.url_more_button || [];

      var elemnet = slides.map(function (slide, index) {
        if (index !== 0) {
          return el(
            "div",
            { className: "inner-div", onclick: "toggleSlick(this)" },
            el("img", { src: images[index], alt: "" }),
            el(
              "div",
              { className: "slide_heaing" },
              el(
                "h5",
                {},
                el("a", { href: url_more_button[index] }, sub_title[index])
              )
            ),
            el(
              "div",
              { className: "slide-data" },
              slide,
              el(
                "div",
                { className: "button_div" },
                el(
                  "a",
                  { href: url_more_button[index], className: "button1-class" },
                  "Learn More"
                )
              )
            )
          );
        }
      });

      return el(
        "div",
        { className: "outer-div" },
        el("div", { className: "subHeading" }, el("h4", {}, paragraph)),
        el("div", { className: "heading" }, el("h2", {}, title)),
        el("div", { className: "carousel12 test" }, elemnet)
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
