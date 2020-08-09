var qCount=0;
var Ans = [];
function startQuiz(){
    
    
    show(0)
    // document.getElementById("startAgain").style.display = "block";
      document.getElementById("next").style.display = "block";
// 
}
var questions= [
    {
id: 1,
question:" who won the worldcup in 1992",
answer:"pakistan",
options: [
    "pakistan",
    "india",
    "england",
    "russia"]
    },
    {
        id: 2,
        question:" who invented the facebook",
        answer:"Mark Zuckerburg",
        options: [
            "Bill Gates",
            "Mark Zuckerburg",
            "Steve Jobs",
            "Tims berner lee"]
            },
            {
                id: 3,
                question:" who invented the windows ",
                answer:"Bill Gates",
                options: [
                    "Bill Gates",
                    "Mark Zuckerburg",
                    "Steve Jobs",
                    "Tims berner lee"]
                    },
        
     
]

function next()
{
        qCount++;
        saveAnswer();
        show(qCount)

}

function show(qcount)
{ 
    if(qcount< questions.length)
    {

    
    var ques=document.getElementById("question");
    ques.innerHTML= `<h1>`+ questions[qcount].id + questions[qcount].question+ `</h1>`+
    ` <ul class="list">
    <li class="options">`+questions[qcount].options[0]+`</li>
    <li class="options">`+questions[qcount].options[1]+`</li>
    <li class="options">`+questions[qcount].options[2]+`</li>
    <li class="options"> `+questions[qcount].options[3]+`</li>
</ul> `    ;
onActive(); 
removeClass();
}
    else {
        showResult();
        
    }
}
function onActive(){
    var option1= document.querySelectorAll("li.options");
    for(let  i=0;i<option1.length;i++)
{
    option1[i].onclick= function(){
        for(let j=0;j< option1.length;j++)
        {
            if(option1[j].classList.contains("active"))
            {
                option1[j].classList.remove("active")
            }
        }
        option1[i].classList.add("active")
    }
}
}
function saveAnswer()
{
    var option1= document.querySelectorAll("li.options");
    for(let j=0;j< option1.length;j++)
    {
        if(option1[j].classList.contains("active"))
        {
             Ans.push(option1[j].innerHTML)
            option1[j].classList.remove("active")
        }
    }
}

function showResult()
{
    var corrAns=0;
    for(let i=0;i<questions.length;i++)
    {
        if(Ans[i]===questions[i].answer)
        {
             corrAns++;
        }
    }
    document.getElementById("next").style.display = "none";
    // var startBtn= document.createElement("button");
    // var edtText= document.createTextNode("Start Again");
    // startBtn.setAttribute("class","btn-danger btn-md ")
    // startBtn.setAttribute("id","startAgain")
    // startBtn.setAttribute("onclick","startQuiz()");
    
    var ques=document.getElementById("question");
    ques.innerHTML= `<h1>`+"Result " + `</h1>`+`<br`+`<h1>`+"correct Answer: "+corrAns+`<h1>`+`<br>`+
    `<button id="startAgain" class="btn" onclick="startQuiz()"> Start Again<button>`;
    qCount=0;
    
    // startn.appendChild(edtText)
    // ques.appendChild(startBtn)
    
   
}
function removeClass()
{
    var option1= document.querySelectorAll("li.options");
    for(let j=0;j< option1.length;j++)
        {
            if(option1[j].classList.contains("active"))
            {
                option1[j].classList.remove("active")
            }
        }
}
