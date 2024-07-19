(function (blocks, editor, components, i18n) {
    var el = wp.element.createElement;
    var registerBlockType = blocks.registerBlockType;
    var TextControl = components.TextControl;
    var TextareaControl = components.TextareaControl;
    var ColorPalette = editor.ColorPalette;
    var getColorClassName = editor.getColorClassName;

    registerBlockType('blocks/paragraph', {
        title: i18n.__('Paragraph Block', 'your-plugin'),
        icon: 'editor-paragraph',
        category: 'common',

        attributes: {
            title: {
                type: 'string',
                source: 'text',
                selector: 'h2',
                default: '',
            },
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
                default: '',
            },
            backgroundColor: {
                type: 'string',
                default: '#000000',
            },
            titleColor: {
                type: 'string',
                default: '#ffffff',
            },
            contentColor: {
                type: 'string',
                default: '#ffffff',
            },
        },

        edit: function (props) {
            var attributes = props.attributes;
            var setBackgroundColor = function (color) {
                props.setAttributes({ backgroundColor: color });
            };
            var setTitleColor = function (color) {
                props.setAttributes({ titleColor: color });
            };
            var setContentColor = function (color) {
                props.setAttributes({ contentColor: color });
            };

            return el('div', { className: props.className },
                el(editor.InspectorControls, {},
                    el(components.PanelBody, {
                        title: i18n.__('Color Settings', 'your-plugin'),
                        initialOpen: true,
                    },
                        el(components.PanelRow, {},
                            el('label', { htmlFor: 'color-picker' }, 'Background Color'),
                            el(components.ColorPalette, {
                                colors: [
                                    { color: '#000000', name: 'Black' },
                                    { color: '#ffffff', name: 'White' },
                                    { color: '#ff0000', name: 'Red' },
                                    { color: '#00ff00', name: 'Green' },
                                    { color: '#0000ff', name: 'Blue' },
                                    { color: '#06038d', name: 'Dark Blue' },
                                    { color: '#6C7175', name: 'Gray' },
                                    { color: '#eaeaea', name: 'Gray' },
                                    { color: '#f5f5f5', name: 'light' },
                                ],
                                value: attributes.backgroundColor,
                                onChange: setBackgroundColor,
                                disableCustomColors: true,
                                id: 'color-picker',
                            })
                        ),
                        el(components.PanelRow, {},
                            el('label', { htmlFor: 'color-picker1' }, 'Title Color'),
                            el(components.ColorPalette, {
                                colors: [
                                    { color: '#ffffff', name: 'White' },
                                    { color: '#000000', name: 'Black' },
                                    { color: '#ff0000', name: 'Red' },
                                    { color: '#00ff00', name: 'Green' },
                                    { color: '#0000ff', name: 'Blue' },
                                    { color: '#06038d', name: 'Dark Blue' },
                                    { color: '#6C7175', name: 'Gray' },
                                    { color: '#eaeaea', name: 'Gray' },
                                    { color: '#f5f5f5', name: 'light' },
                                ],
                                value: attributes.titleColor,
                                onChange: setTitleColor,
                                disableCustomColors: true,
                                id: 'color-picker1',
                            })
                        ),
                        el(components.PanelRow, {},
                            el('label', { htmlFor: 'color-picker3' }, 'Paragraph Color'),
                            el(components.ColorPalette, {
                                colors: [
                                    { color: '#ffffff', name: 'White' },
                                    { color: '#000000', name: 'Black' },
                                    { color: '#ff0000', name: 'Red' },
                                    { color: '#00ff00', name: 'Green' },
                                    { color: '#0000ff', name: 'Blue' },
                                    { color: '#06038d', name: 'Dark Blue' },
                                    { color: '#6C7175', name: 'Gray' },
                                    { color: '#eaeaea', name: 'Gray' },
                                    { color: '#f5f5f5', name: 'light' },
                                ],
                                value: attributes.contentColor,
                                onChange: setContentColor,
                                disableCustomColors: true,
                                id: 'color-picker3',
                            })
                        )
                    )
                ),
                el(TextControl, {
                    label: i18n.__('Title', 'your-plugin'),
                    value: attributes.title,
                    onChange: function (title) {
                        props.setAttributes({ title: title });
                    },
                }),
                el(TextareaControl, {
                    label: i18n.__('Content', 'your-plugin'),
                    value: attributes.content,
                    onChange: function (content) {
                        props.setAttributes({ content: content });
                    },
                }),
                el('div', {
                    style: {
                        backgroundColor: attributes.backgroundColor,
                        margin: '0px',
                        padding: '0px',
                    },
                },
                    el('div', { style: { padding: '40px 30px' } },
                        el('h2', { style: { color: attributes.titleColor } }, attributes.title),
                        el('p', { style: { color: attributes.contentColor } }, attributes.content)
                    )
                )
            );
        },

        save: function (props) {
            var attributes = props.attributes;

            return el('div', {
                style: {
                    backgroundColor: attributes.backgroundColor,
                    margin: '0px',
                    padding: '0px',
                },
            },
                el('div', { style: { padding: '20px' } },
                    el('h2', { style: { color: attributes.titleColor } }, attributes.title),
                    el('p', { style: { color: attributes.contentColor } }, attributes.content)
                )
            );
        },
    });
})(
    window.wp.blocks,
    window.wp.editor,
    window.wp.components,
    window.wp.i18n
);
