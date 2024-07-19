/**
 * VP Blocks Example
*/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import './styles/style.scss';

const edit = () => {
	return (
		<div className="example">
			<h1>This is Hello</h1>
		</div>
	)
}

const save = () => {
	return (
		<div className="example">
			<h1>This is frontend</h1>
		</div>
	)
}


registerBlockType( 'visionpoint-blocks/example', {
	title: __('Example', 'visionpoint-blocks'),
	description: __(
		'Example Block'
	),
	icon: '',
	category: 'visionpoint-blocks',
	keywords: [
		__( 'example', 'visionpoint-blocks' ),
		__( 'visionpoint', 'visionpoint-blocks')
	],
	attributes: {
		message: {
			type: 'string'
		}
	},

	edit,

	save,

})