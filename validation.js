   function validateData(){     
            const usernameField = document.forms["loginForm"]["username"].value;
            const passwordField = document.forms["loginForm"]["password"].value;
      
            let usernameProgress = 0;
            let passwordProgress = 0;
            let dbSampleUsername = "test";
            let dbSamplePassword = "tomato";

            if (usernameField !== ""){
                usernameProgress += 50;
            }

            if (passwordField !== ""){
                passwordProgress += 50;
            } 

            if (usernameField.length >= 3){
                usernameProgress += 50;
            } 

            if (passwordField.length >= 6){
                passwordProgress += 50;
            }

            let checkProgress = (currentIndex = 0) => { 
                let augmentedIndex = currentIndex;

                if (usernameProgress === 0 || passwordProgress === 0 ||
                    usernameProgress === 50 || passwordProgress === 50){
                    let dataIncorrect = document.querySelectorAll('.password-check');
                    dataIncorrect.forEach((input) => {
                        input.style.color = "#9F3634";
                    })
                    let getInputs = document.querySelectorAll('.incorrect-data');
                    getInputs.forEach((input) => {
                        input.src = "../images/incorrect-sign.png";
                    })
                }
                if (usernameProgress == 100){
                    augmentedIndex += 1;
                    document.getElementById("username-check").style.color = "#ffffff";
                    document.getElementById("leaf-image-1").src = "../images/check-arrow.png";
                }
                if (passwordProgress == 100){
                    augmentedIndex += 1;
                    document.getElementById("password-check").style.color = "#ffffff";
                    document.getElementById("leaf-image-2").src = "../images/check-arrow.png";
                }
                if (usernameProgress + passwordProgress === 200){
                    augmentedIndex += 1;

                    if (dbSampleUsername === usernameField && dbSamplePassword === passwordField){
                        document.getElementById("success-check").style.color = "#ffffff";
                        document.getElementById("leaf-image-3").src = "../images/check-arrow.png";
                    }
                }
                document.getElementById("field-counter").innerText = augmentedIndex + "/3";
                return augmentedIndex;
            }
            checkProgress(); 
            return false;
        }
    
