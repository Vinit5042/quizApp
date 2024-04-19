const quetions =[
    {
        ques : "Which of the following is a markup language?",
        a : "HTML",
        b : "CSS" ,
        c : "JavaSript",
        d : "PHP" ,
       correct : "a",
    },
    {
        ques : "What year was JavaScript launched?",
        a : "1996",
        b : "1995" ,
        c : "1994",
        d : "None of the above" ,
       correct : "b",
    },
    {
        ques : "What does CSS stand for?",
        a : "Hypertext markup language",
        b : "Cascading style sheet" ,
        c : "Jason object notation",
        d : "Document object program" ,
       correct : "b",
    },
    {
        ques : "What is web design primarily concerned with?",
        a : "Writing and editing website content",
        b : "Creating visual elements for the website" ,
        c : "Developing server-side code for the website",
        d : "Designing the layout and appearance of websites" ,
       correct : "d",
    },
    {
        ques : "Which of the following factors is crucial for creating a positive user experience (UX) on a website?",
        a : "Loading speed",
        b : "Color scheme" ,
        c : "Typography",
        d :"All of the above" ,
       correct : "d",
    },
    {
        ques : "What is the term used for the arrangement and organization of elements on a webpage?",
        a : "Typography",
        b : "User Interface (UI)" ,
        c : "Layout",
        d : "User Experience (UX)" ,
       correct : "c",   
    },
    {
        ques : " Which of the following is NOT a consideration in choosing a color scheme for a website?",
        a : "Brand identity",
        b : "Target audience preferences" ,
        c : " Website loading speed",
        d : "Emotional impact on users" ,
       correct : "c",
    },
    {
        ques : "What does SEO stand for in the context of web design?",
        a : "Search Engine Orientation",
        b : "Secure External Object" ,
        c : "Systematic Element Optimization",
        d : "Search Engine Optimization" ,
       correct : "d",
    },
    {
        ques : "Which element of web design focuses on guiding users throughout the website?",
        a : " Typography",
        b : " User Interface (UI)" ,
        c : "Navigation",
        d : "Call-to-Action (CTA)" ,
       correct : "c",
    },
    {
        ques : " What is the purpose of wireframes in web design?",
        a : "To create high-resolution images for the website",
        b : "To test website loading speed" ,
        c : "To present the website’s visual design to clients",
        d : "To create a visual representation of the website’s layout and structure" ,
       correct : "d",
    }
]
let q = document.querySelector('.quest');
let opt = document.querySelectorAll("label");
let but =document.querySelector("button");
let ipt =document.querySelectorAll("input");
let j=0;
let right=0,wrong=0;
let TotalQuestions =quetions.length;
const uploadQues = () =>{
    if(j ===TotalQuestions){
        return endQuiz();
    }
    else{
        reset();
    }
    let question =quetions[j];
    q.innerText= ` ${j+1}) ${question.ques}`;
     opt[0].innerText = question.a;
     opt[1].innerText = question.b;
     opt[2].innerText = question.c;
     opt[3].innerText = question.d;
    
 }
 but.addEventListener("click",()=>{
    const ans = getAnswer();  
    if(ans === quetions[j].correct) {
        // alert("correct answer");
        j++;
        right++;
        uploadQues();
    }
    else{
        // alert("incorrect answer");
        j++;
        wrong++;
        uploadQues();
    }
})

const getAnswer = () =>{
    let answer ;
    ipt.forEach((input) =>{
        if(input.checked){
            console.log(input.value);
             answer = input.value;
        }
    })
    return answer;
}
 const reset = () => {
    ipt.forEach((input) =>{
        input.checked = false ;
     }
       )  } ;
        uploadQues();

   const endQuiz = ()=>{
    let final =document.querySelector(".container");
    final.innerHTML= `<h2 > Thanks for participating in Quiz . </h2>  <h2> ${right} are correct out of ${TotalQuestions} .</h2>`
   }
