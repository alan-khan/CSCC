import './style.scss';
(function (blocks, element, components, editor) {
    var el = element.createElement;
    var RichText = editor.RichText;
    var TextControl = components.TextControl;
    var TextareaControl = components.TextareaControl;
    var InspectorControls = editor.InspectorControls;
    var Fragment = element.Fragment;
    var MediaUpload = editor.MediaUpload;
    var IconButton = components.IconButton;

    blocks.registerBlockType('blocks/newpostcontent', {
        title: 'New Post Content',
        icon: 'shield', // Choose an appropriate icon
        category: 'common',
        attributes: {
            title: {
                type: 'string',
                default: '',
            },
            paragraph: {
                type: 'array',
                default: [],
            },
            sub_title: {
                type: 'string',
                default: '',
            },
            contentext: {
                type: 'string',
                default: '',
            },
            upload_video: {
                type: 'string',
                default: '',
            },
        },

        edit: function (props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var paragraph = attributes.paragraph;

            // Function to handle video selection and update the attribute
            const handleVideoSelect = (media) => {
                setAttributes({ upload_video: media.url });
            };

            // Function to handle image selection and update the attribute
            const handleImageSelect = (media) => {
                setAttributes({ upload_image: media.url });
            };

            function onContentChange(event, index) {
                var Contents = paragraph.slice();
                Contents[index].content = event.target.value;
                props.setAttributes({ paragraph: Contents });
            }

            function addParagraph() {
                var Contents = paragraph.slice();
                Contents.push({ content: '' });
                props.setAttributes({ paragraph: Contents });
            }

            function removeParagraph(index) {
                var Contents = paragraph.slice();
                Contents.splice(index, 1);
                props.setAttributes({ paragraph: Contents });
            }

            return el(
                Fragment,
                null,
                el(InspectorControls, null, el(
                    'div',
                    {},
                    el(TextControl, {
                        label: 'Title',
                        value: attributes.title,
                        onChange: function (value) {
                            setAttributes({ title: value });
                        },
                    }),
                    el('div', {},
                        paragraph.map(function (para, index) {
                            return el('div', { className: 'panel' },
                                el(TextareaControl, {
                                    value: para.content,
                                    onChange: function (value) { onContentChange({ target: { value } }, index); },
                                }),
                                el(IconButton, {
                                    className: 'remove-accordion',
                                    icon: 'no-alt',
                                    onClick: function () { removeParagraph(index); },
                                }),
                            )
                        }),
                        el(IconButton, {
                            className: 'add-accordion',
                            icon: 'plus',
                            onClick: addParagraph,
                        }),
                    ), el(TextControl, {
                        label: 'Subtitle',
                        value: attributes.sub_title,
                        onChange: function (value) {
                            setAttributes({ sub_title: value });
                        },
                    }),
                    el(MediaUpload, {
                        onSelect: handleVideoSelect,
                        allowedTypes: ['video'],
                        value: attributes.upload_video,
                        render: function (obj) {
                            return el(
                                'div',
                                {},
                                el(
                                    'video',
                                    { src: attributes.upload_video, controls: true },
                                    el(
                                        'p',
                                        {},
                                        el(
                                            'a',
                                            { href: attributes.upload_video, target: '_blank', rel: 'noopener noreferrer' },
                                            'Click here to view the video'
                                        )
                                    )
                                ),
                                el(
                                    components.Button,
                                    {
                                        className: 'button button-large',
                                        onClick: obj.open,
                                    },
                                    'Upload Video'
                                )
                            );
                        },
                    }),
     
                    el(TextareaControl, {
                        tagName: 'div',
                        className: 'your-content',
                        placeholder: 'Content',
                        value: attributes.contentext,
                        onChange: function (value) {
                            setAttributes({ contentext: value });
                        },
                    }),
                )
                ),
                el(
                    'div',
                    {},
                    el('h1', {}, attributes.title),
            paragraph.map(function (para, index) {
                    return el('p', {}, para.content)
                    }),
                    el('h3', {}, attributes.sub_title),
                    el('div', { className: 'row' },
                        el('div', { className: 'col-md-6' }, el('video', { src: attributes.upload_video, controls: true })),
                el('div', { className: 'col-md-6' }, attributes.contentext)
                    ),
                )
            );

        },

        save: function (props) {
            var attributes = props.attributes;

            return el('div',{},el(
                'div',
                {className:'container'},
                el('h1', {}, attributes.title),
                attributes.paragraph.map(function (para, index) {
                return el('p', {}, para.content)
                }),
                el('h3', {}, attributes.sub_title),
                el('div', { className: 'row' },
                    el('div', { className: 'col-md-6' }, el('video', { src: attributes.upload_video, controls: true })),
            el('div', { className: 'col-md-6' }, attributes.contentext)
                ),
            ),
            );
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
