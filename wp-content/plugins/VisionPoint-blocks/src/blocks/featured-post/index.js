import "./style.scss";
(function (blocks, element, components) {
  var el = element.createElement;
  var __ = wp.i18n.__;

  blocks.registerBlockType("blocks/featured-post", {
    title: __("Featured Post ", "your-plugin"),
    icon: "admin-post",
    category: "common",
    edit: function (props) {
      return el("p", {}, __("Featured Post Added ", "your-plugin"));
    },
    save: function () {
      return el(components.ServerSideRender, {
        block: "blocks/featured-post",
      });
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.components);
