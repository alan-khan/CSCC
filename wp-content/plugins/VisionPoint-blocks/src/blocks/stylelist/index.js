import "./style.scss";
const { registerBlockType } = window.wp.blocks;
const { InspectorControls } = window.wp.blockEditor;
const { PanelBody, Button, TextControl } = window.wp.components;
const { Fragment } = window.wp.element;

registerBlockType("stylelist/stylelist", {
  title: "Style List Block",
  category: "common",

  attributes: {
    listItems: {
      type: "array",
      default: ["Item 1", "Item 2", "Item 3"],
    },
  },

  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { listItems } = attributes;

    function onChangeListItem(newListItems) {
      setAttributes({ listItems: newListItems });
    }

    function addListItem() {
      const newListItems = listItems.concat([""]);
      setAttributes({ listItems: newListItems });
    }

    function removeListItem(index) {
      const newListItems = listItems.filter((_, i) => i !== index);
      setAttributes({ listItems: newListItems });
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="List Items" initialOpen={true}>
            {listItems.map((item, index) => (
              <div key={index}>
                <TextControl
                  value={item}
                  onChange={(newValue) => {
                    const newListItems = listItems.map((value, i) =>
                      i === index ? newValue : value
                    );
                    onChangeListItem(newListItems);
                  }}
                />
                <Button onClick={() => removeListItem(index)} isDestructive>
                  Remove
                </Button>
              </div>
            ))}
            <Button onClick={addListItem}>Add Item</Button>
          </PanelBody>
        </InspectorControls>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newListItems = listItems.map((value, i) =>
                    i === index ? e.target.value : value
                  );
                  onChangeListItem(newListItems);
                }}
              />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  },

  save: function (props) {
    const { attributes } = props;
    const { listItems } = attributes;

    return (
      <ol className="styled-order-list">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  },
});
