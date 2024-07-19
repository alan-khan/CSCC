import './style.scss';
(function (blocks, element, components, editor) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var PanelBody = components.PanelBody;
    var PanelRow = components.PanelRow;
    var Button = components.Button;
    var ButtonGroup = components.ButtonGroup;
    var Tooltip = components.Tooltip;
    var Dashicon = components.Dashicon;
    var InspectorControls = editor.InspectorControls;
    var __ = wp.i18n.__;
    var TextareaControl =components.TextareaControl;
    // Block registration
    blocks.registerBlockType('blocks/table-blocks', {
      title: __('Table Block'), // Block title
      icon: 'grid-view', // Block icon
      category: 'common', // Block category (e.g., common, formatting, layout, widgets, etc.)
      attributes: {
        rows: {
          type: 'number',
          default: 2, // Default number of rows
        },
        columns: {
          type: 'number',
          default: 2, // Default number of columns
        },
        cellsContent: {
          type: 'array',
          default: [], // Default content for cells
        },
      },
  
      edit: function (props) {
        // Get attributes
        var { rows, columns, cellsContent } = props.attributes;
  
        // Function to update the number of rows
        function updateRows(newRows) {
          const rowCount = parseInt(newRows);
          const updatedContent = [];
          for (let i = 0; i < rowCount; i++) {
            updatedContent.push(cellsContent[i] || Array.from({ length: columns }, () => ''));
          }
          props.setAttributes({ rows: rowCount, cellsContent: updatedContent });
        }
  
        // Function to update the number of columns
        function updateColumns(newColumns) {
          const colCount = parseInt(newColumns);
          const updatedContent = cellsContent.map((rowArray) => {
            const newRow = [];
            for (let i = 0; i < colCount; i++) {
              newRow.push(rowArray[i] || '');
            }
            return newRow;
          });
          props.setAttributes({ columns: colCount, cellsContent: updatedContent });
        }
  
        // Function to update the cell content
        function updateCellContent(row, col, content) {
          const updatedContent = cellsContent.map((rowArray, rowIndex) => {
            if (rowIndex === row) {
              const newRow = rowArray.map((cellContent, colIndex) =>
                colIndex === col ? content : cellContent
              );
              return newRow;
            }
            return rowArray;
          });
          props.setAttributes({ cellsContent: updatedContent });
        }
  
        // Function to add a header row
        function addHeaderRow() {
          const updatedContent = cellsContent.slice();
          updatedContent.unshift(Array.from({ length: columns }, () => ''));
          props.setAttributes({ rows: rows + 1, cellsContent: updatedContent });
        }
  
        // Function to add a footer row
        function addFooterRow() {
          const updatedContent = cellsContent.slice();
          updatedContent.push(Array.from({ length: columns }, () => ''));
          props.setAttributes({ rows: rows + 1, cellsContent: updatedContent });
        }
  
        // Render the block editor
        return (
          <div>
            <InspectorControls>
              <PanelBody title={__('Table Settings')}>
                <PanelRow>
                  <TextControl
                    label={__('Number of Rows')}
                    value={rows}
                    onChange={updateRows}
                  />
                </PanelRow>
                <PanelRow>
                  <TextControl
                    label={__('Number of Columns')}
                    value={columns}
                    onChange={updateColumns}
                  />
                </PanelRow>
              </PanelBody>
              <PanelBody title={__('Table Actions')}>
                <PanelRow>
                  <ButtonGroup>
                    <Button onClick={addHeaderRow}>Add Header</Button>
                    <Button onClick={addFooterRow}>Add Footer</Button>
                  </ButtonGroup>
                </PanelRow>
              </PanelBody>
            </InspectorControls>
            <div className={props.className}>
              <table>
                <tbody>
                  {Array.from({ length: rows }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: columns }, (_, colIndex) => (
                        <td key={`${rowIndex}-${colIndex}`}>
                          <TextareaControl type="textarea"
                            value={cellsContent[rowIndex]?.[colIndex] || ''}
                            onChange={(newContent) =>
                              updateCellContent(rowIndex, colIndex, newContent)
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      },
  
      save: function (props) {
        // Get attributes
        var { rows, columns, cellsContent } = props.attributes;
        var classstyle = 'wp-block-table';
        // Render the saved content
        // Rest of the code...

return (
    <div>
      <div className={classstyle}>
        <table>
          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columns }, (_, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} >
                    {cellsContent[rowIndex]?.[colIndex] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div className='mobile-table'>
        <table>
          {Array.from({ length: columns }, (_, colIndex) => (
            <tbody key={colIndex}>
              {Array.from({ length: rows }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  <td key={`${rowIndex}-${colIndex}`}>
                    {cellsContent[rowIndex]?.[colIndex] || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
  
  // Rest of the code...
  
      },
    });
  })(window.wp.blocks, window.wp.element, window.wp.components, window.wp.editor);
  