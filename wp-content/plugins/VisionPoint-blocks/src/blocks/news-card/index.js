import "./style.scss";
const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { createElement } = wp.element;
const { __ } = wp.i18n;

registerBlockType("blocks/newscard", {
  title: __("News Listing Card", "your-plugin"),
  icon: "admin-post",
  category: "common",
  // ...
  attributes: {
    posts1: {
      type: "array",
      default: [],
    },
    categories1: {
      type: "array",
      default: [],
    },
  },
  edit: withSelect((select) => {
    return {
      posts: select("core").getEntityRecords("postType", "news", {
        per_page: 3,
        _embed: true,
      }),
    };
  }, [])(function ({ posts, className, setAttributes, props }) {
    if (!posts) {
      // Handle the case where posts are not available
      return null;
    }

    setAttributes({ posts1: posts }); // Use setAttributes directly from the props object

    // Map over posts and create post card elements
    const postCards = posts.map((post) => {
      const postDate = new Date(post.date);
      // Define the options for formatting the date
      const dateFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      // Format the date using the specified options
      const formattedDate = postDate.toLocaleDateString(
        "en-US",
        dateFormatOptions
      );
      // Check if the post has a featured media item
      const hasFeaturedMedia =
        post._embedded && post._embedded["wp:featuredmedia"];
      // Get the featured media URL if it exists
      const featuredMediaURL = hasFeaturedMedia
        ? post._embedded["wp:featuredmedia"][0].source_url
        : "";

      return createElement(
        "li",
        {},
        createElement(
          "div",
          { className: "news-flex-body", key: post.id },
          createElement(
            "div",
            { className: "entry-thumbnail" },
            createElement(
              "a",
              { href: post.link },
              createElement("img", {
                src: featuredMediaURL,
                alt: post.title.rendered,
              })
            )
          ),
          createElement("p", { className: "news-flex-date" }, formattedDate),
          createElement(
            "p",
            { className: "news-flex-title" },
            createElement("a", { href: post.link }, post.title.rendered)
          ),
          createElement("p", {
            className: "news-flex-excerpt",
            dangerouslySetInnerHTML: {
              __html: post.excerpt.rendered.split(" ").splice(0, 20).join(" "),
            },
          })
        )
      );
    });

    // Render your block's edit interface here using 'postCards' and 'categoryList'
    return createElement(
      "div",
      { className: "container" },
      createElement(
        "div",
        { className: "row" },
        createElement(
          "ul",
          { className: "news-flex-container-listing" },
          postCards
        )
      )
    );
  }),

  // ...

  save: function (props) {
    var posts = props.attributes.posts1;

    // Define how the block should be saved here
    const postCards = posts.map((post) => {
      const postDate = new Date(post.date);
      // Define the options for formatting the date
      const dateFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      // Format the date using the specified options
      const formattedDate = postDate.toLocaleDateString(
        "en-US",
        dateFormatOptions
      );
      // Check if the post has a featured media item
      const hasFeaturedMedia =
        post._embedded && post._embedded["wp:featuredmedia"];
      // Get the featured media URL if it exists
      const featuredMediaURL = hasFeaturedMedia
        ? post._embedded["wp:featuredmedia"][0].source_url
        : "";

      return createElement(
        "li",
        {},
        createElement(
          "div",
          { className: "news-flex-body", key: post.id },
          createElement(
            "div",
            { className: "entry-thumbnail" },
            createElement(
              "a",
              { href: post.link },
              createElement("img", {
                src: featuredMediaURL,
                alt: post.title.rendered,
              })
            )
          ),
          createElement("p", { className: "news-flex-date" }, formattedDate),
          createElement(
            "p",
            { className: "news-flex-title" },
            createElement("a", { href: post.link }, post.title.rendered)
          ),
          createElement("p", {
            className: "news-flex-excerpt",
            dangerouslySetInnerHTML: {
              __html: post.excerpt.rendered.split(" ").splice(0, 20).join(" "),
            },
          })
        )
      );
    });

    // Render your block's edit interface here using 'postCards' and 'categoryList'
    return createElement(
      "div",
      { className: "container" },
      createElement(
        "div",
        { className: "row" },
        createElement(
          "ul",
          { className: "news-flex-container-listing" },
          postCards
        )
      )
    );
  },
});
