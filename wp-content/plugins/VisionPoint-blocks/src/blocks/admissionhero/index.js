import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import {
  TextControl,
  RichText,
  MediaUpload,
  URLInput,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

registerBlockType("blocks/admissions-hero", {
  title: "Admissions Hero",
  icon: "shield",
  category: "common",
  attributes: {
    title: {
      type: "string",
      default: "Admissions",
    },
    description: {
      type: "string",
      default: "Everything you need to know to become a student at CSCC.",
    },
    buttonText1: {
      type: "string",
      default: "Get Started",
    },
    buttonURL1: {
      type: "string",
      default: "/",
    },
    buttonText2: {
      type: "string",
      default: "Contact Us",
    },
    buttonURL2: {
      type: "string",
      default: "/",
    },
    image: {
      type: "string",
      default: "",
    },
    secondaryTitle: {
      type: "string",
      default: "This is Cleveland",
    },
    secondaryDescription: {
      type: "string",
      default:
        "Cleveland State Community College subscribes to an open-door policy and welcomes applications from all persons, regardless of race, color, religion, sex, national origin or disability. Our mission is to admit, register and graduate students in an efficient fashion in accordance with guidelines and procedures, to maintain accurate student records, to provide information and statistics to various groups of people, and to foster a positive working environment by providing quality service to campus and external communities.",
    },
    listItems: {
      type: "string",
      default: "Admissions",
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const {
      title,
      description,
      buttonText1,
      buttonURL1,
      buttonText2,
      buttonURL2,
      image,
      secondaryTitle,
      secondaryDescription,
      listItems,
    } = attributes;

    const onImageSelect = (media) => {
      setAttributes({ image: media.url });
    };

    return (
      <div className="admissions-hero-wrapper">
        <div className="admissions-hero-section">
          <div className="container">
            <ul className="admission-hero-breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>

              <li>{listItems}</li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <RichText
                  tagName="h1"
                  value={title}
                  onChange={(newTitle) => setAttributes({ title: newTitle })}
                />
                <RichText
                  tagName="p"
                  value={description}
                  onChange={(newDesc) =>
                    setAttributes({ description: newDesc })
                  }
                />
                <div className="flex-btn-wrapper">
                  <RichText
                    tagName="a"
                    value={buttonText1}
                    class="btn btn-primary btn-darkbg"
                    onChange={(newButtonText1) =>
                      setAttributes({ buttonText1: newButtonText1 })
                    }
                  />
                  <URLInput
                    value={buttonURL1}
                    class="new-line"
                    placeholder="Enter Link Here"
                    onChange={(newURL1) =>
                      setAttributes({ buttonURL1: newURL1 })
                    }
                  />

                  <RichText
                    tagName="a"
                    value={buttonText2}
                    class="btn btn-light btn-darkbg"
                    onChange={(newButtonText2) =>
                      setAttributes({ buttonText2: newButtonText2 })
                    }
                  />
                  <URLInput
                    value={buttonURL2}
                    class="new-line"
                    placeholder="Enter Link Here"
                    onChange={(newURL2) =>
                      setAttributes({ buttonURL2: newURL2 })
                    }
                  />
                </div>
                <MediaUpload
                  onSelect={onImageSelect}
                  type="image"
                  value={image}
                  render={({ open }) => (
                    <button
                      onClick={open}
                      className="components-button editor-post-featured-image__toggle"
                    >
                      {image ? (
                        <img
                          src={image}
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
              </div>
            </div>
          </div>
        </div>
        <div className="container admissions-hero-section-secondary">
          <div className="row">
            <div className="col-md-6">
              <RichText
                tagName="h2"
                value={secondaryTitle}
                onChange={(newSecondaryTitle) =>
                  setAttributes({ secondaryTitle: newSecondaryTitle })
                }
              />
              <RichText
                tagName="p"
                value={secondaryDescription}
                onChange={(newSecondaryDesc) =>
                  setAttributes({ secondaryDescription: newSecondaryDesc })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: function (props) {
    const {
      title,
      description,
      buttonText1,
      buttonURL1,
      buttonText2,
      buttonURL2,
      image,
      secondaryTitle,
      secondaryDescription,
      listItems,
    } = props.attributes;

    return (
      <div className="admissions-hero-wrapper">
        <div className="admissions-hero-section">
          <div className="container">
            <ul className="admission-hero-breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{listItems}</li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="flex-btn-wrapper">
                  <a href={buttonURL1} className="btn btn-primary btn-darkbg">
                    {buttonText1}
                  </a>
                  <a href={buttonURL2} className="btn btn-light btn-darkbg">
                    {buttonText2}
                  </a>
                </div>
                <img src={image} alt="Preview" className="img-main img1" />
              </div>
            </div>
          </div>
        </div>
        <div className="container admissions-hero-section-secondary">
          <div className="row">
            <div className="col-md-6">
              <h2>{secondaryTitle}</h2>
              <p>{secondaryDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
