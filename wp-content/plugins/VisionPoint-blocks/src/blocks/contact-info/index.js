import "./style.scss";

(function (blocks, element, components, editor) {
  var el = element.createElement;
  var TextControl = components.TextControl;
  var IconButton = components.IconButton;
  var PanelBody = components.PanelBody;
  var InspectorControls = editor.InspectorControls;
  var Fragment = element.Fragment;
  var __ = wp.i18n.__;

  blocks.registerBlockType("blocks/contact-info", {
    title: __("Contact Info", "your-plugin"),
    description: __("This is a Block"),
    icon: "businessperson",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "",
      },
      contacts: {
        type: "array",
        default: [],
      },
    },
    edit: function (props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var contacts = attributes.contacts;

      function updateContact(index, field, value) {
        var updatedContacts = contacts.slice();
        updatedContacts[index][field] = value;
        props.setAttributes({ contacts: updatedContacts });
      }

      function addContact() {
        var updatedContacts = contacts.slice();
        updatedContacts.push({
          first_name_title: "",
          first_name: "",
        });
        props.setAttributes({ contacts: updatedContacts });
      }

      function removeContact(index) {
        var updatedContacts = contacts.slice();
        updatedContacts.splice(index, 1);
        props.setAttributes({ contacts: updatedContacts });
      }

      var contactList = contacts.map(function (contact, index) {
        return el(
          "li",
          { key: index },
          el(TextControl, {
            label: __("Title", "your-plugin"),
            value: contact.first_name_title,
            onChange: function (value) {
              updateContact(index, "first_name_title", value);
            },
          }),
          el(TextControl, {
            label: __("Content", "your-plugin"),
            value: contact.first_name,
            onChange: function (value) {
              updateContact(index, "first_name", value);
            },
          }),
          el(IconButton, {
            icon: "trash",
            label: __("Delete", "your-plugin"),
            onClick: function () {
              removeContact(index);
            },
          })
        );
      });

      return el(
        Fragment,
        null,
        el(
          InspectorControls,
          null,
          el(
            "div",
            { className: props.className },
            el(TextControl, {
              label: __("Title", "your-plugin"),
              value: title,
              onChange: function (value) {
                props.setAttributes({ title: value });
              },
            }),
            el("ul", { className: "contact-list" }, contactList),
            el(IconButton, {
              icon: "plus",
              label: __("Add Contact", "your-plugin"),
              onClick: addContact,
            })
          )
        ),
        el(
          "div",
          {
            className: "wp-block-blocks-contact-info widget faculty-card mb-4",
          },
          el("h4", null, title),
          el(
            "div",
            { className: "faculty-card__contact" },
            contacts.map((contact, index) => (
              <div key={index}>
                {contact.first_name && (
                  <>
                    <span class="c-heading">{contact.first_name_title} </span>
                    {isPhoneNumber(contact.first_name) ? (
                      <p>
                        <a
                          className="link-underline"
                          href={`tel:${contact.first_name}`}
                        >
                          {contact.first_name}
                        </a>
                      </p>
                    ) : isValidEmail(contact.first_name) ? (
                      <p>
                        <a
                          className="link-underline"
                          href={`mailto:${contact.first_name}`}
                        >
                          {contact.first_name}
                        </a>
                      </p>
                    ) : (
                      <p>{contact.first_name}</p>
                    )}
                  </>
                )}
              </div>
            ))
          )
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      var title = attributes.title;
      var contacts = attributes.contacts;

      const contactList = contacts.map((contact, index) => (
        <div key={index}>
          {contact.first_name && (
            <>
              <span class="c-heading">{contact.first_name_title} </span>
              {isPhoneNumber(contact.first_name) ? (
                <p>
                  <a
                    className="link-underline"
                    href={`tel:${contact.first_name}`}
                  >
                    {contact.first_name}
                  </a>
                </p>
              ) : isValidEmail(contact.first_name) ? (
                <p>
                  <a
                    className="link-underline"
                    href={`mailto:${contact.first_name}`}
                  >
                    {contact.first_name}
                  </a>
                </p>
              ) : (
                <p>{contact.first_name}</p>
              )}
            </>
          )}
        </div>
      ));

      return (
        <div className="widget faculty-card mb-4">
          <h4>{title}</h4>
          <div className="faculty-card__contact">{contactList}</div>
        </div>
      );
    },
  });

  // Function to check if a string is a phone number
  function isPhoneNumber(value) {
    // Regular expression to match phone numbers with optional country code
    const phoneNumberPattern = /^(\+?\d{1,4}[\s-]?)?\d{10}$/;
    return phoneNumberPattern.test(value);
  }

  // Function to check if a string is a valid email address
  function isValidEmail(value) {
    // Regular expression to validate email addresses
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(value);
  }
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
