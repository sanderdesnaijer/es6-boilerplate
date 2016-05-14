// Basic Log Types (filterable in Chrome)
console.log('standard log');
console.warn('warning log');
console.error('error log');
console.info('info log');

// Table View
function Person (name, age) {
	this.name = name;
	this.age = age;
}

var Walter = new Person('Walter', 50);
var Jesse = new Person('Jesse', 24);
var Hank = new Person('Hank', 54);

var characters = [Walter, Jesse, Hank];

console.table(characters);
console.table(characters[0]);
console.table(characters, ['age']);

// Speed Test
var list = [];

console.time('namespace-timer');

for (var i = 0; i < 10000000; i ++) {
	list.push({
		'index-num': i
	});
}

console.timeEnd('namespace-timer');
