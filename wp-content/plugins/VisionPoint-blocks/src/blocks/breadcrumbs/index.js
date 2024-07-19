// import './style.scss';
(function (blocks, element, components) {
    var el = element.createElement;
    var __ = wp.i18n.__;
  
    blocks.registerBlockType('blocks/breadcrumbs', {
      title: __('breadcrums', 'your-plugin'),
      icon: 'admin-post',
      category: 'common',
      edit: function (props) {
        return el('p', {}, __('Bread Crum ', 'your-plugin'));
      },
      save: function () {
        return el(components.ServerSideRender, {
          block: 'blocks/breadcrumbs',
        });
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    
  );
