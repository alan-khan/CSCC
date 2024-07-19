import "./style.scss";
(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var URLInput = editor.URLInput;
  var __ = wp.i18n.__;

  blocks.registerBlockType("blocks/resources", {
    title: __("Resources", "your-plugin"),
    icon: "editor-contract",
    category: "common",
    attributes: {
      listItems: {
        type: "array",
        default: [],
      },
      listUrls: {
        type: "array",
        default: [],
      },
    },

    edit: function (props) {
      var attributes = props.attributes;
      var listItems = attributes.listItems || [];
      var listUrls = attributes.listUrls || [];

      function onListItemChange(value, index) {
        var updatedListItems = listItems.slice();
        updatedListItems[index] = value;
        props.setAttributes({ listItems: updatedListItems });
      }

      function onListUrlChange(value, index) {
        var updatedListUrls = listUrls.slice();
        updatedListUrls[index] = value;
        props.setAttributes({ listUrls: updatedListUrls });
      }

      function addListItem() {
        var updatedListItems = listItems.slice();
        updatedListItems.push("");
        var updatedListUrls = listUrls.slice();
        updatedListUrls.push("");
        props.setAttributes({
          listItems: updatedListItems,
          listUrls: updatedListUrls,
        });
      }

      function removeListItem(index) {
        var updatedListItems = listItems.slice();
        updatedListItems.splice(index, 1);
        var updatedListUrls = listUrls.slice();
        updatedListUrls.splice(index, 1);
        props.setAttributes({
          listItems: updatedListItems,
          listUrls: updatedListUrls,
        });
      }

      return el(
        "div",
        { className: props.className },
        el(
          "div",
          { className: "resources" },
          el(TextControl, {
            label: __("Main Heading Here", "your-plugin"),
            value: listItems[0] || "",
            onChange: function (value) {
              onListItemChange(value, 0);
            },
          }),
          el(
            "ul",
            null,
            listItems.slice(1).map(function (item, listItemIndex) {
              return el(
                "li",
                { key: listItemIndex },
                el(TextControl, {
                  label: "Item Title",
                  value: item,
                  onChange: function (value) {
                    onListItemChange(value, listItemIndex + 1);
                  },
                }),
                el(TextControl, {
                  label: __("Item URL", "your-plugin"),
                  value: listUrls[listItemIndex + 1] || "",
                  onChange: function (value) {
                    onListUrlChange(value, listItemIndex + 1);
                  },
                }),
                el(components.IconButton, {
                  icon: "no-alt",
                  onClick: function () {
                    removeListItem(listItemIndex + 1);
                  },
                  label: __("Remove Item", "your-plugin"),
                }),
                el("a", { href: listUrls[listItemIndex + 1] || "#" }, item)
              );
            }),
            el(
              "li",
              null,
              el(
                components.IconButton,
                {
                  icon: "plus",
                  onClick: addListItem,
                  label: __("Add Item", "your-plugin"),
                },
                "Add Options Here"
              )
            )
          )
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var listItems = attributes.listItems || [];
      var listUrls = attributes.listUrls || [];

      return el(
        "div",
        { className: props.className + " resources" },
        el(
          "div",
          { className: "container" },
          el("h2", null, listItems[0] || ""),
          el(
            "ul",
            null,
            listItems.slice(1).map(function (item, listItemIndex) {
              return el(
                "li",
                { key: listItemIndex },
                el("a", { href: listUrls[listItemIndex + 1] || "#" }, item)
              );
            })
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
