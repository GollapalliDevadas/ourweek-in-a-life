
            let displayresult = document.querySelector("#displayresult");
            let result = document.querySelector("#result");
            let calcbtn = document.querySelector("#calcbtn");
            let resetbtn = document.querySelector("#resetbtn");
            let refresh = document.querySelector(".refresh");
            let ageInput = document.querySelector("#ageInput");

            let mytimer;
            let age;

            calcbtn.addEventListener("click",function(){
                 age = ageInput.value.trim();
                 if (age =="") {

                    clearInterval(mytimer);
                  let  alert = document.querySelector(".alert");
                        alert.classList.add('active');

                    mytimer = setInterval(function(){
                         alert.classList.remove('active');
                    },3000)
                 
                }
                else if(isNaN(age) == true){
                 let alert2 = document.querySelector(".alert2");
                     alert2.classList.add('active');

                     mytimer = setInterval(function(){
                        alert2.classList.remove('active');
                     },3000)
                            

                     

                }
                else{
                    let answer = document.querySelector(".answer");
                    answer.classList.add('active');

                    let remaining_years = 90-age;
                    let remaining_weeks = remaining_years*90;
                    result.innerHTML = remaining_weeks;
                    ageInput.value = "";
                }

                  
                
            });
            resetbtn.addEventListener('click',function(){
                refresh.click();
            });