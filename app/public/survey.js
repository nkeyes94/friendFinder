$(document).ready(function(){
    console.log("JS File");

    // * Arr to hold answers
    var answers = []

    // * Handling question 1
    $(".q1").click(function(){
        answers[0] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q1").prop("disabled", true)
    })

    // * Handling question 2
    $(".q2").click(function(){
        answers[1] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q2").prop("disabled", true)
    })

    // * Handling question 3
    $(".q3").click(function(){
        answers[2] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q3").prop("disabled", true)
    })

    // * Handling question 4
    $(".q4").click(function(){
        answers[3] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q4").prop("disabled", true)
    })

    // * Handling question 5
    $(".q5").click(function(){
        answers[4] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q5").prop("disabled", true)
    })

    // * Handling question 6
    $(".q6").click(function(){
        answers[5] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q6").prop("disabled", true)
    })

    // * Handling question 7
    $(".q7").click(function(){
        answers[6] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q7").prop("disabled", true)
    })

    // * Handling question 8
    $(".q8").click(function(){
        answers[7] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q8").prop("disabled", true)
    })

    // * Handling question 9
    $(".q9").click(function(){
        answers[8] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q9").prop("disabled", true)
    })

    // * Handling question 10
    $(".q10").click(function(){
        answers[9] = this.innerHTML;
        console.log(this.innerHTML);
        
        $(".q10").prop("disabled", true)
    })
    
})