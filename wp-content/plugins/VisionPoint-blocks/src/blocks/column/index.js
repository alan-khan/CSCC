import './style.scss';
( function( blocks, editor, components, i18n ) {
    var el = wp.element.createElement;
    var registerBlockType = blocks.registerBlockType;
    var SelectControl = components.SelectControl;
    var ColorPalette = components.ColorPalette;
    var getColorClassName = editor.getColorClassName;
    
    registerBlockType( 'blocks/column', {
        title: i18n.__( 'Column Block', 'your-plugin' ),
        icon: 'editor-table',
        category: 'common',
        
        attributes: {
            backgroundColor: {
                type: 'string',
                default: '#ffffff',
            },
            textColor: {
                type: 'string',
                default: '#000000',
            },
            columns: {
                type: 'number',
                default: 2,
            },
            columnContent: {
                type: 'array',
                default: [ 'Column 1 Content', 'Column 2 Content' ],
            },
        },
        
        edit: function( props ) {
            var attributes = props.attributes;
            
            var setBackgroundColor = function( color ) {
                props.setAttributes( { backgroundColor: color } );
            };
            
            var setTextColor = function( color ) {
                props.setAttributes( { textColor: color } );
            };
            
            var setColumns = function( value ) {
                var columnContent = attributes.columnContent;
                if (value > columnContent.length) {
                    // If the new number of columns is greater than the current content array length, add empty content for the new columns
                    var newColumns = Array(value - columnContent.length).fill('');
                    columnContent = columnContent.concat(newColumns);
                } else if (value < columnContent.length) {
                    // If the new number of columns is less than the current content array length, truncate the content array
                    columnContent = columnContent.slice(0, value);
                }
                props.setAttributes( { columns: value, columnContent: columnContent?? 'Content here' } );
            };
            
            
            var setColumnContent = function( value, index ) {
                var columnContent = attributes.columnContent.map( function( content, idx ) {
                    return idx === index ? value : content;
                } );
                props.setAttributes( { columnContent: columnContent } );
            };
            
            return (
                el(
                    'div',
                    { className: props.className },
                    el(
                        editor.InspectorControls,
                        {},
                        el(
                            components.PanelBody,
                            {
                                title: i18n.__( 'Color Settings', 'your-plugin' ),
                                initialOpen: true,
                            },
                            el(
                                components.PanelRow,
                                {},
                                el(
                                    components.ColorPalette,
                                    {
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
                                        value: attributes.backgroundColor,
                                        onChange: setBackgroundColor,
                                        disableCustomColors: true,
                                    }
                                )
                            ),
                            el(
                                components.PanelRow,
                                {},
                                el(
                                    components.ColorPalette,
                                    {
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
                                        value: attributes.textColor,
                                        onChange: setTextColor,
                                        disableCustomColors: true,
                                    }
                                )
                            )
                        ),
                        el(
                            components.PanelBody,
                            {
                                title: i18n.__( 'Column Settings', 'your-plugin' ),
                                initialOpen: true,
                            },
                            el(
                                components.PanelRow,
                                {},
                                el(
                                    SelectControl,
                                    {
                                        label: i18n.__( 'Number of Columns', 'your-plugin' ),
                                        value: attributes.columns,
                                        options: [
                                            { label: '2', value: 2 },
                                            { label: '3', value: 3 },
                                            { label: '4', value: 4 },
                                        ],
                                        onChange: setColumns,
                                    }
                                )
                            )
                        )
                    ),
                    el(
                        'div',
                        {
                            className: getColorClassName( 'background-color', attributes.backgroundColor ),
                            style: {
                                display: 'flex',
                                backgroundColor: attributes.backgroundColor,
                                color: attributes.textColor,
                                margin: '0px',
                                padding: '0px',
                            },
                        },
                        attributes.columnContent.map( function( content, index ) {
                            return el(
                                'div',
                                {
                                    className: 'column',
                                    style: {
                                        flex: '1',
                                    },
                                },
                                el( editor.RichText, {
                                    tagName: 'div',
                                    value: content,
                                    onChange: function( value ) {
                                        setColumnContent( value, index );
                                    },
                                    placeholder: 'Enter your content here',
                                } )
                            );
                        } )
                    )
                )
            );
        },
        
        save: function( props ) {
            var attributes = props.attributes;
            
            return el(
                'div',
                {
                    className: getColorClassName( 'background-color', attributes.backgroundColor ),
                    style: {
                        display: 'flex',
                        backgroundColor: attributes.backgroundColor,
                        color: attributes.textColor,
                        margin: '0px',
                        padding: '0px',
                    },
                },
                attributes.columnContent.map( function( content, index ) {
                    return el(
                        'div',
                        {
                            className: 'column',
                            style: {
                                flex: '1',
                                padding: '36px',
                            },
                        },
                        content
                    );
                } )
            );
        },
    } );
} )(
    window.wp.blocks,
    window.wp.editor,
    window.wp.components,
    window.wp.i18n
);
