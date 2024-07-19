import './style.scss';
(function (blocks, element, components) {
    var el = element.createElement;
    var __ = wp.i18n.__;
  
    blocks.registerBlockType('blocks/latest-custom-posts', {
      title: __('Latest News Posts', 'your-plugin'),
      icon: 'admin-post',
      category: 'common',
      edit: function (props) {
        return el('p', {}, __('Latest News Posts Block Added ', 'your-plugin'));
      },
      save: function () {
        return el(components.ServerSideRender, {
          block: 'blocks/latest-custom-posts',
        });
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    
  );
