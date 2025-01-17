# Filtering colors

The `filterBy` module has functions for filtering colors from a collection. The colors that don't match the filtering conditions are removed from the result array.

## Parameters

The functions take the same base parameters: `(colors:Color[],start:number|string,end?:number):Colors[]`
The reason why the `start` parameter is a union type of `string|number` is because we can pass an expression as astring allowing us to skip the optional `end` parameter completely. 

The operator is expected to ocuppy the first index of the string"<5" which means return colors that are **less than** 5 (of whatever is being used for comparison e.g lightness.) . Or in the instance of testing for a value greater than or equal to, in that case the operator takes two indexes: 0 and 1. For example, ">=5" means return colors that are **greater than or equal to**  5.
> Remember:
> Don't include whitespaces in expression string.

Coupled with a JavaScript language feature like template literals, we can even pass in the value and operators dynamically, allowing us to fine tune what we want in our palette according to changes in the template variable's value:

### API