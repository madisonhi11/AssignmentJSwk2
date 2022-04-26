// HARD: Given the information below for Tom and Jerry.
//● Tom - height: 9in mass: 8 g
//● Jerry - height: 10in mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
//variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
//console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).



var tomCat ={ catHeight: 9,
     catMass: 8,
    calBmiCat: function(catHeight,catMass){
        return catMass / catHeight * catHeight
    }}
var JerryMouse ={ mouseHeight: 10, mouseMass: 45,
    calBmiMouse: function(mouseHeight,mouseMass){
        return mouseMass / mouseHeight * mouseHeight
    }
}

if (tomCat.calBmiCat > JerryMouse.calBmiMouse){
    console.log( `Is Toms's BMI higher than Jerry's? ${true}`)
}
else if (tomCat.calBmiCat < JerryMouse.calBmiMouse){
    console.log(`Is Jerry's BMI higher than Tom's? ${true}`)
}
