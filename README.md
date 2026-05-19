# 04.5 - XMLHttpRequest() Review

## Part 1

1. Create two inputs in HTML with: `type="text"` `placeholder` and `ID attributes`. Make one input in the placeholder attribute take a first name. Make another input in the placeholder attribute take a favorite food.
2. Create a button labeled submit.

## Part 2
1. Save each of your inputs in variables using querySelector.
2. Save your button in a variable using querySelector.
3. Create a click handler for your button.


## Part 3 (XMLHttpRequest)

1. Create a variable called xhttp that activates XMLHttpRequest through the following code: 
```
let xhttp = new XMLHttpRequest();
```

2. Under your xhttp variable, copy and paste the code below.

```
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhttp.responseText));
    }
};
```

3. Write the following code:

```
let SERVER = "";

xhttp.open("POST", SERVER, true);
```

4. Write the following code  `xhttp.send();`

## Part 4
1. Type your name in the name input, and type your favorite food in the food input. Click send and wait for the results...