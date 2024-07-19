import "./style.scss";
const { registerBlockType } = window.wp.blocks;
const { InspectorControls } = window.wp.blockEditor;
const { SelectControl, PanelBody, TextControl } = window.wp.components; // Import TextControl
const { withSelect } = wp.data;
const { RawHTML } = wp.element;
const { Fragment } = window.wp.element;
const { __ } = wp.i18n;
registerBlockType("blocks/in-this-section", {
  title: "In This Section 2",
  icon: "admin-post",
  category: "common",
  attributes: {
    selectedMenu: {
      type: "string",
      default: "",
    },
    menuItems: {
      type: "array",
      default: [],
    },
    heading: {
      type: "string",
      default: "In This Section",
    },
  },
  edit: withSelect((select) => {
    return {
      menus: select("core").getEntityRecords("taxonomy", "nav_menu", {
        per_page: -1,
      }),
      posts: select("core").getEntityRecords("postType", "nav_menu_item", {
        _embed: true,
        per_page: -1,
      }),
    };
  })(({ menus, posts, attributes, setAttributes }) => {
    const menuOptions = menus
      ? menus.map((menu) => ({
          label: menu.name,
          value: menu.id,
        }))
      : [];

    if (!posts) {
      return null;
    }

    const getSubMenuItems = (parentID) => {
      return posts.filter((post) => post.parent === parentID);
    };

    const renderedItems = new Set();

    // Filter posts based on the selected menu
    const filteredPosts = attributes.selectedMenu
      ? posts.filter((post) => post.menus == attributes.selectedMenu)
      : posts;
    setAttributes({ menuItems: posts });
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Event Details" initialOpen={true}>
            <div>
              <TextControl
                label="Heading"
                value={attributes.heading}
                onChange={(value) => setAttributes({ heading: value })}
              />
              <SelectControl
                label="Select a Menu"
                value={attributes.selectedMenu}
                options={menuOptions}
                onChange={(value) => setAttributes({ selectedMenu: value })}
              />
            </div>
          </PanelBody>
        </InspectorControls>
        <div className="in-this-section">
          <h4>
            {attributes.heading} <i className="fa	fa fa-bars"></i>
          </h4>
          <ul>
            {filteredPosts
              .filter((item) => !item.parent) // Only top-level menu items
              .map((item) => {
                const hasSubItems = filteredPosts.some(
                  (subItem) => subItem.parent === item.id
                );
                renderedItems.add(item.id);

                return (
                  <li key={item.id} className={hasSubItems ? "drop-down" : ""}>
                    {hasSubItems ? (
                      <>
                        {item.title.rendered}{" "}
                        <i className="fa fa-chevron-right"></i>
                      </>
                    ) : (
                      <a href={item.url}>{item.title.rendered}</a>
                    )}
                    {filteredPosts.some(
                      (subItem) =>
                        subItem.parent == item.id &&
                        !renderedItems.has(subItem.id)
                    ) && (
                      <ul>
                        {filteredPosts
                          .filter(
                            (subItem) =>
                              subItem.parent == item.id &&
                              !renderedItems.has(subItem.id)
                          )
                          .map((subItem) => {
                            // Mark the sub-item as rendered to avoid duplicates
                            renderedItems.add(subItem.id);

                            return (
                              <li key={subItem.id}>
                                <a href={subItem.url}>
                                  {subItem.title.rendered}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>
                );

                return null;
              })}
          </ul>
        </div>
      </Fragment>
    );
  }),

  save: ({ attributes }) => {
    const selectedMenuItems = attributes.menuItems;
    const selectedMenu = attributes.selectedMenu;

    // Create a set to keep track of rendered items to avoid duplicates
    const renderedItems = new Set();

    return (
      <div className="in-this-section">
        <h4>
          {attributes.heading} <i className="fa	fa fa-bars"></i>
        </h4>
        <ul>
          {selectedMenuItems.map((item) => {
            if (item.menus == selectedMenu && !renderedItems.has(item.id)) {
              // Mark the item as rendered to avoid duplicates
              const hasSubItems = selectedMenuItems.some(
                (subItem) => subItem.parent === item.id
              );
              renderedItems.add(item.id);
              return (
                <li key={item.id} className={hasSubItems ? "drop-down" : ""}>
                  {hasSubItems ? (
                    <>
                      {item.title.rendered}{" "}
                      <i className="fa fa-chevron-right"></i>
                    </>
                  ) : (
                    <a href={item.url}>{item.title.rendered}</a>
                  )}

                  <ul>
                    {selectedMenuItems
                      .filter(
                        (subItem) =>
                          subItem.parent == item.id &&
                          !renderedItems.has(subItem.id)
                      )
                      .map((subItem) => {
                        // Mark the sub-item as rendered to avoid duplicates
                        renderedItems.add(subItem.id);
                        return (
                          <li key={subItem.id}>
                            <a href={subItem.url}>{subItem.title.rendered}</a>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            }
            return null; // Skip items that have already been rendered as sub-items
          })}
        </ul>
      </div>
    );
  },
});
