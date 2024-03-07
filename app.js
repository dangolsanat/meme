// const topText = document.querySelector("#topText");
const topTextInput = document.querySelector("#topInputText");
// const bottomText = document.querySelector("#bottomText");
const bottomTextInput = document.querySelector("#bottomInputText");
const htmlParent = document.querySelector("#htmlParent");
const htmlLink = document.querySelector("#htmlLink");
const colorWhite = document.querySelector("#colorWhite");
const whiteColored = document.querySelector("#whiteColor");
const deleteBtn = document.querySelector("#deleteButton");
const parent = document.querySelector("parentDiv")



htmlParent.addEventListener('submit', function getimages(c){
    c.preventDefault();
    url=document.getElementById('htmlLink').value;
    // document.getElementById('image').innerHTML='<img class="img" src="'+url+'" />';
        var img = document.createElement('img');
        img.src = url;
                var topTxt = document.getElementById("topInputText").value;
                document.getElementById("tt").innerHTML = topTxt;

                var bottomTxt = document.getElementById("bottomInputText").value;
                document.getElementById("bt").innerHTML = bottomTxt;
                    // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
                 // Remove the corresponding image and delete button
          img.remove();
          deleteButton.remove();
        //   bottomTextPrint.remove();
        });
    
                 // Create a container div to hold the image and delete button
        var containerDiv = document.createElement('div');
        containerDiv.appendChild(img);
        containerDiv.appendChild(deleteButton);
   
        // Append the container div to the image container
        document.getElementById('image').appendChild(containerDiv);
        
       
            

          
}

)


whiteColored.addEventListener('submit', function(f){
    f.preventDefault();
    console.log("Clicked Change color Button");
}
)




function colorChange(){
    document.querySelector('.ttxt').classList.toggle('colorChangedWhite');
    document.querySelector('.btxt').classList.toggle('colorChangedWhite');
}
