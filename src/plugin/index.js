import common from './common'
import highmap from './highmap'
import highstock from './highstock'
import more from './more'
import live from './live'
import column from './column'
import scatter from './scatter'

let config = {
	common,
	highmap,
	highstock,
	more,
	live,
	column,
	scatter
}
export default function(name){
	// console.log(111,config[name]);
	return config[name]
}