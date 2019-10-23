
```javascript
var names = (text.split(",")).sort();
var total = 0;
for (let h = 1; h <= names.length; h++) {
	let i = (names[h-1]).toLowerCase();
	let sum = 0;
	for (let j = 0; j <= i.length - 1; j++) {
		sum = sum + i.charCodeAt(j)-96;
	}
	total = total + (sum * h)
}
console.log(total)
```