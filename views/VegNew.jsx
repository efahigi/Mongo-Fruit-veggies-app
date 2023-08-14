import React from 'react'

function VegNew() {
return (
<div>
<form action='/vegetables' method='Post'>
Name: <input type='text' name="name"/>
<br/>
Color: <input type="text" name="color" />
<br/>
Ready to Eat: <input type='checkbox' name='readyToEat'/>
<br/>
<input type="submit" name="" value="Create Vegetable"/>
</form>
</div>
)
}

export default VegNew