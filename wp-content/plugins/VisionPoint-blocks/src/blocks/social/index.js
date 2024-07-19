import "./style.scss";
const { registerBlockType } = wp.blocks;

const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, Button, TextControl } = wp.components;

const { Fragment } = wp.element;

const selectOptions = [
  { label: "Facebook", value: "fab fa-facebook" },
  { label: "Twitter", value: "fab fa-twitter" },
  { label: "Instagram", value: "fab fa-instagram" },
  { label: "LinkedIn", value: "fab fa-linkedin" },
  { label: "YouTube", value: "fab fa-youtube" },
];

registerBlockType("blocks/social", {
  title: "My Social",
  category: "common",

  attributes: {
    fields: {
      type: "array",
      default: [
        {
          content: "",
          selectOption: "fab fa-facebook",
          url: "", // Add a URL attribute
        },
      ],
    },
    mainDivClass: {
      type: "string",
      default: "", // Default class name for the main div
    },
  },

  edit: function (props) {
    const { attributes, setAttributes } = props;

    var fields = attributes.fields;

    function addEvent() {
      const newEvent = {
        content: "",
        selectOption: "fab fa-facebook",
        url: "", // Default URL value
      };
      const newEvents = fields.concat(newEvent);
      setAttributes({ fields: newEvents });
    }

    var onFieldChange = function (value, index, field) {
      var updatedFields = fields.slice();
      updatedFields[index][field] = value;
      setAttributes({ fields: updatedFields });
    };

    function removeList(index) {
      var updatedLists = fields.slice();
      updatedLists.splice(index, 1);
      setAttributes({ fields: updatedLists });
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Event Details" initialOpen={true}>
            {fields.map(function (field, index) {
              return (
                <div key={index}>
                  <SelectControl
                    label="Select Option"
                    value={field.selectOption}
                    options={selectOptions}
                    onChange={(selectedOption) =>
                      onFieldChange(selectedOption, index, "selectOption")
                    }
                  />

                  <TextControl
                    label="URL"
                    value={field.url}
                    onChange={(newValue) =>
                      onFieldChange(newValue, index, "url")
                    }
                  />

                  <Button onClick={() => removeList(index)} isDestructive>
                    Remove Social Icon
                  </Button>
                </div>
              );
            })}
            <Button onClick={addEvent}>Add Social Icon</Button>
          </PanelBody>

          <PanelBody title="Main Div Verticle/Horizontal" initialOpen={true}>
            <SelectControl
              label="Verticle/Horizontal"
              value={attributes.mainDivClass}
              options={[
                { label: "Vertical", value: "vertical" }, // Corrected typo in label
                { label: "Horizontal", value: "horizontal" },
              ]}
              onChange={(value) => setAttributes({ mainDivClass: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div className={`main-social ${attributes.mainDivClass}`}>
          <ul>
            {fields.map((field, index) => (
              <li>
                <a href={field.url}>
                  <span className={field.selectOption}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  },

  save: function (props) {
    const { fields, mainDivClass } = props.attributes;

    return (
      <div className={`main-social ${mainDivClass}`}>
        <ul>
          {fields.map((field, index) => (
            <li>
              <a href={field.url}>
                <span className={field.selectOption}></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
