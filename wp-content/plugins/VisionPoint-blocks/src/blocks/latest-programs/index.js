import './style.scss';
(function (blocks, element, components) {
    var el = element.createElement;
    var __ = wp.i18n.__;
  
    blocks.registerBlockType('blocks/latest-programs', {
      title: __('Latest Program', 'your-plugin'),
      icon: 'admin-post',
      category: 'common',
      edit: function (props) {
        return el('p', {}, __('Latest Programs', 'your-plugin'));
      },
      save: function () {
        return el(components.ServerSideRender, {
          block: 'blocks/latest-programs',
        });
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    
  );
