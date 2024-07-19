import "./style.scss";

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var RichText = editor.RichText;
  var IconButton = components.IconButton;
  var __ = wp.i18n.__;
  var blockIndex = 0;

  blocks.registerBlockType("blocks/tabs", {
    title: __("Tabs Block", "your-plugin"),
    icon: "editor-table",
    category: "common",
    attributes: {
      mainHeading: {
        type: "string",
        default: "",
      },
      tabs: {
        type: "array",
        default: [],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var mainHeading = attributes.mainHeading || "";
      var tabs = attributes.tabs || [];

      function onMainHeadingChange(value) {
        props.setAttributes({ mainHeading: value });
      }

      function onTabHeadingChange(value, index) {
        var updatedTabs = tabs.map(function (tab, tabIndex) {
          if (tabIndex === index) {
            return Object.assign({}, tab, { heading: value });
          }
          return tab;
        });
        props.setAttributes({ tabs: updatedTabs });
      }

      function onTabContentChange(value, index) {
        var updatedTabs = tabs.map(function (tab, tabIndex) {
          if (tabIndex === index) {
            return Object.assign({}, tab, { content: value });
          }
          return tab;
        });
        props.setAttributes({ tabs: updatedTabs });
      }

      function addTab() {
        var newTab = {
          heading: "",
          content: "",
          blockName: `tabs-block-${blockIndex}`,
        };
        blockIndex++;

        props.setAttributes({ tabs: tabs.concat(newTab) });
      }

      function removeTab(index) {
        var updatedTabs = tabs.filter(function (_, tabIndex) {
          return tabIndex !== index;
        });
        props.setAttributes({ tabs: updatedTabs });
      }

      return el(
        "div",
        { className: props.className },
        el(
          "h2",
          null,
          el(RichText, {
            tagName: "span",
            placeholder: "Enter main heading...",
            value: mainHeading,
            onChange: onMainHeadingChange,
          })
        ),
        el(
          "div",
          { className: "tabs" },
          tabs.map(function (tab, index) {
            var tabClasses = "tablink " + (index === 0 ? "active" : "");
            return el(
              "div",
              { key: index },
              el(TextControl, {
                className: "tab-heading",
                value: tab.heading,
                onChange: function (value) {
                  onTabHeadingChange(value, index);
                },
                placeholder: "Enter tab heading...",
              }),
              el(
                "div",
                { className: "tab-content" },
                el(RichText, {
                  tagName: "div",
                  multiline: "p",
                  placeholder: "Enter tab content...",
                  value: tab.content,
                  onChange: function (value) {
                    onTabContentChange(value, index);
                  },
                })
              ),
              el(IconButton, {
                icon: "minus",
                onClick: function () {
                  removeTab(index);
                },
                label: __("Remove Tab", "your-plugin"),
              })
            );
          })
        ),
        el(IconButton, {
          icon: "plus",
          onClick: addTab,
          label: __("Add Tab", "your-plugin"),
        })
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var mainHeading = attributes.mainHeading || "";
      var tabs = attributes.tabs || [];

      return el(
        "div",
        { className: props.className },
        el("h2", null, mainHeading),
        el(
          "div",
          { className: "tabs" },
          tabs.map(function (tab, index) {
            var tabClasses = index === 0 ? "tablink active" : "tablink";
            return el(
              "button",
              {
                key: index,
                className: tabClasses,
                "data-tab": `tab-${index}`,
              },
              tab.heading
            );
          })
        ),
        el(
          "div",
          { className: "tab-content" },
          tabs.map(function (tab, index) {
            return el(
              "div",
              {
                key: index,
                className: "tabcontent",
                id: `tab-${index}`,
                "data-block-name": tab.blockName,
              },
              el(RichText.Content, {
                tagName: "div",
                value: tab.content,
              })
            );
          })
        )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
