import "./style.scss";

const { registerBlockType } = wp.blocks;
const { TextControl, IconButton } = wp.components;
const { MediaUpload, BlockControls } = wp.editor;

registerBlockType("your-facilities-block/facilities", {
  title: "Facilities Block",
  icon: "shield",
  category: "common",
  attributes: {
    heading: {
      type: "string",
      default: "Our Facility",
    },
    subheading: {
      type: "string",
      default: "We Offer State-of-the-Art Facilities",
    },
    items: {
      type: "array",
      default: [
        {
          text: "Health & Science Center",
          image: "",
          url: "", // Add URL field for each item
        },
        {
          text: "Mary T. Barker Humanities Building",
          image: "",
          url: "", // Add URL field for each item
        },
        {
          text: "Advanced Technologies Institute",
          image: "",
          url: "", // Add URL field for each item
        },
      ],
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { heading, subheading, items } = attributes;

    function addItem() {
      const updatedItems = items.slice(); // Create a copy using slice
      updatedItems.push({ text: "", image: "" });
      setAttributes({ items: updatedItems });
    }

    function removeItem(index) {
      const updatedItems = items.slice(); // Create a copy using slice
      updatedItems.splice(index, 1);
      setAttributes({ items: updatedItems });
    }

    function updateItemText(index, text) {
      const updatedItems = items.slice(); // Create a copy using slice
      updatedItems[index].text = text;
      setAttributes({ items: updatedItems });
    }

    function updateItemImage(index, image) {
      const updatedItems = items.slice(); // Create a copy using slice
      updatedItems[index].image = image.url;
      setAttributes({ items: updatedItems });
    }

    function updateHeading(newHeading) {
      setAttributes({ heading: newHeading });
    }

    function updateSubheading(newSubheading) {
      setAttributes({ subheading: newSubheading });
    }
    function updateItemUrl(index, url) {
      const updatedItems = items.slice();
      updatedItems[index].url = url;
      setAttributes({ items: updatedItems });
    }

    return (
      <div className={props.className}>
        <BlockControls />
        <div className="our-facilities-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <TextControl
                  placeholder="Heading"
                  label="Heading"
                  value={heading}
                  onChange={(newHeading) => updateHeading(newHeading)}
                />
                <TextControl
                  placeholder="Subheading"
                  label="Subheading"
                  value={subheading}
                  onChange={(newSubheading) => updateSubheading(newSubheading)}
                />
                <img
                  src="https://cscc.vpmdevtech.com/wp-content/uploads/2023/08/4d0fbcb7f6966e83dd56cf6853acb375bed06f535f59de58b97fd7275989.webp"
                  alt="Preview"
                  class="img-main img1"
                ></img>
                <h5>List Items Here</h5>
                <ul className="our-facilities-list-items">
                  {items.map((item, index) => (
                    <li key={index}>
                      <TextControl
                        placeholder="Enter item"
                        value={item.text}
                        label="Enter Text Here"
                        onChange={(value) => updateItemText(index, value)}
                      />
                      <TextControl
                        placeholder="Enter URL"
                        label="Enter Url Here"
                        value={item.url}
                        onChange={(value) => updateItemUrl(index, value)}
                      />
                      <MediaUpload
                        onSelect={(media) => updateItemImage(index, media)}
                        type="image"
                        value={item.image}
                        render={({ open }) => (
                          <button
                            onClick={open}
                            className="components-button editor-post-featured-image__toggle"
                          >
                            {item.image ? (
                              <img
                                src={item.image}
                                alt="Preview"
                                className="image-preview-small"
                                style={{ position: "relative", left: "0%" }}
                              />
                            ) : (
                              "Select Image"
                            )}
                          </button>
                        )}
                      />
                      <IconButton
                        icon="no-alt"
                        onClick={() => removeItem(index)}
                      />
                    </li>
                  ))}
                </ul>
                <IconButton icon="insert" label="Add Item" onClick={addItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: function (props) {
    const { heading, subheading, items } = props.attributes;

    return (
      <div className="our-facilities-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="super-heading">{heading}</div>
              <div class="h1 text-white">{subheading}</div>
              <img
                src="https://cscc.vpmdevtech.com/wp-content/uploads/2023/08/4d0fbcb7f6966e83dd56cf6853acb375bed06f535f59de58b97fd7275989.webp"
                alt="Preview"
                class="img-main img1"
              ></img>
              <ul className="our-facilities-list-items">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} data-id={item.image}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
