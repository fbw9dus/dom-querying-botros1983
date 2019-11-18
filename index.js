document.querySelector("body").style.fontFamily = 'Arial';
document.querySelectorAll('h1')[0].style.textAlign = 'center';
var category = document.getElementsByClassName('category');
for(var i=0; i<category.length; i++ ){
    category[i].style.color = 'rgba(233,123,123,.4)';
    category[i].style.fontStyle = 'italic'
};
function colorGenerator(){
    var rand = Math.floor( Math.random() * 256)
    var ran = Math.floor( Math.random() * 256)
    var ra = Math.floor( Math.random() * 256)

       return "rgba(" + ra + "," + ran + "," + rand + "," + .4 + ")"
     
    
}
var  background = document.getElementsByClassName("food-category")
for (j = 0 ;j < background.length ;j++) {
    background[j].style.backgroundColor = colorGenerator()
}
document.querySelector("main").style.display = "flex"
document.querySelector("main").style.flexWrap = "wrap"



var  background = document.getElementsByClassName("food-category")
for (j = 0 ;j < background.length ;j++) {
    background[j].style.width = "300px"; 
    background[j].style.margin = "15px"
    background[j].style.flexBasic = "300px"
}
document.getElementById("warning").style.fontFamily = "bold"
document.getElementById("warning").style.fontSize = "200%"



var allergy = document.getElementsByClassName("allergy-info")
for (j = 0 ;j < allergy.length ;j++) {
    allergy[j].style.listStyleType = "none"
    if(j%2 == 0){
        allergy[j].style.backgroundColor = "#ddd"
    }
}


document.getElementsByClassName("allergy-warning")[0].style.textAlign = "center"
 var footer = document.getElementsByClassName("food-desc")
 for (j = 0 ;j < footer.length ;j++) {
footer[j].style.height = "80px"
footer[j].style.width = "80px"
footer[j].style.padding = "10px"

footer[j].style.paddingTop = "15px" 
footer[j].style.border = " 5px solid #9a6"
footer[j].style.borderRadius = "50%"
footer[j].style.color = "red"
footer[j].style.textAlign = "center"
 }
 document.getElementsByClassName("footer")[0].style.display = "flex"
 document.getElementsByClassName("footer")[0].style.justifyContent = "space-around "

