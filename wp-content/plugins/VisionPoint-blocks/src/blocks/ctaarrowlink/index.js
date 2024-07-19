import './style.scss';

(function (blocks, element, components, editor) {
    var el = element.createElement;
    var Fragment = element.Fragment;
    var registerBlockType = blocks.registerBlockType;
    var TextControl = components.TextControl;
    var URLInput = editor.URLInput;
    var PanelColorSettings = editor.PanelColorSettings;
    var InspectorControls = editor.InspectorControls;
    var SelectControl = components.SelectControl;

    registerBlockType('blocks/cta-link-arrow', {
        title: 'CTA Link Arrow',
        icon: 'smiley',
        category: 'common',
        attributes: {
            buttons: {
                type: 'array',
                default: [
                    {
                        buttonName: 'Link One',
                        buttonLink: '#',
                        buttonType: 'Link-one'
                    },

                ]
            },
            backgroundColor: {
                type: 'string',
                default: '#F2F2F2'
            }
        },

        edit: function (props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;

            function onButtonNameChange(index, newName) {
                var buttons = attributes.buttons.slice(); // Copy the array
                buttons[index].buttonName = newName;
                setAttributes({ buttons: buttons });
            }

            function onButtonLinkChange(index, newLink) {
                var buttons = attributes.buttons.slice(); // Copy the array
                buttons[index].buttonLink = newLink;
                setAttributes({ buttons: buttons });
            }

            function onButtonTypeChange(index, newType) {
                var buttons = attributes.buttons.slice(); // Copy the array
                buttons[index].buttonType = newType;
                setAttributes({ buttons: buttons });
            }

            function onBackgroundColorChange(newColor) {
                setAttributes({ backgroundColor: newColor });
            }

            function addButton() {
                var buttons = attributes.buttons.slice(); // Copy the array
                buttons.push({
                    buttonName: 'New Link',
                    buttonLink: '#',
                    buttonType: 'Link-one'
                });
                setAttributes({ buttons: buttons });
            }

            function removeButton(index) {
                var buttons = attributes.buttons.slice(); // Copy the array
                buttons.splice(index, 1);
                setAttributes({ buttons: buttons });
            }

            return (
                el(Fragment, null,
                    el(InspectorControls, null,
                        el(PanelColorSettings, {
                            title: 'Background Color',
                            colorSettings: [{
                                label: 'Background Color',
                                onChange: onBackgroundColorChange,
                                value: attributes.backgroundColor
                            }]
                        })
                    ),
                    el('div', { style: { backgroundColor: attributes.backgroundColor, padding: '20px' } },
                        attributes.buttons.map(function (button, index) {
                            return el(Fragment, { key: index },
                                el(TextControl, {
                                    label: 'CTA Link Name',
                                    value: button.buttonName,
                                    onChange: function (newName) {
                                        onButtonNameChange(index, newName);
                                    }
                                }),
                                el(URLInput, {
                                    label: 'CTA Link Url',
                                    value: button.buttonLink,
                                    onChange: function (newLink) {
                                        onButtonLinkChange(index, newLink);
                                    }
                                }),
                                el(SelectControl, {
                                    label: 'Link Type',
                                    value: button.buttonType,
                                    options: [
                                  
                                        { value: 'link-cta', label: 'Link-Cta Arrow' },
                                        { value: 'link-cta-disabled', label: 'Link Cta Disabled' },
                                        
                                    ],
                                    onChange: function (newType) {
                                        onButtonTypeChange(index, newType);
                                    }
                                }),
                                el('button', {
                                    className: 'button-remove',
                                    onClick: function () {
                                        removeButton(index);
                                    }
                                }, 'Remove Link')
                            );
                        }),
                        el('button', {
                            className: 'button-add',
                            onClick: addButton
                        }, 'Add Link')
                    )
                )
            );
        },

        save: function (props) {
            var attributes = props.attributes;

            return (
                el('div', { style: { backgroundColor: attributes.backgroundColor, padding: '20px' } },
                    attributes.buttons.map(function (button, index) {
                        return el('a', {
                            href: button.buttonLink,
                            className: button.buttonType+'  font-arrow',
                            'data-type': button.buttonType,
                            key: index
                        }, button.buttonName,el('i',{className:'fa fa-chevron-right', style: {margin :'0px 0px 0px 6px' } }));
                    })
                )
            );
        }
    });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
