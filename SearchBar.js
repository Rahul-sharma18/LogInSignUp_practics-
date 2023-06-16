let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'JavaScript',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function (){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML ='';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list +"</li>";
    });

    resultsBox.innerHTML = "<ul>"+ content.join(' ') + "</ul>"; 

}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML ='';
}


// function search1(){
//      let filter = document.getElementById('find').value.toUpperCase();
     
//      let item = document.querySelectorAll('.product');
   
//      let l = document.getElementsByTagName('h3');
//      for(var i=0; i<l.length;i++)
//      {
//        let a=item[i].getElementsByTagName('h3')[0];
//        let value=a.innerHTML || a.innerHTML || a.textContent;
   
//        if(value.toUpperCase().indexOf(filter) > -1){
//            item[i].style.display="";
//        }
//        else{
//            item[i].style.display="none";
//        }
//      }
//    }