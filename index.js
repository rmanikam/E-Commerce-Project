








document.addEventListener("DOMContentLoaded", () =>
{

    const loginForm = document.querySelector("#login");
    console.log(loginForm);
    const createAccountForm = document.querySelector("#createAccount");
    console.log(createAccountForm);
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>
    {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>
    {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    // console.log(loginForm);
    loginForm.addEventListener("submit", e => 
    {
        
        e.preventDefault();
        const username = loginForm.username.value;
        console.log(username);

        const password = loginForm.password.value;

        console.log(password);
        
        if (username === "raman" && password === "pass") {
            
                alert("You have successfully logged in.");
                let anchor_1 = document.getElementById('new_1');
                anchor_1.click();
        }
        else{
            if(username !='' && password != '')
            {
                alert("You have successfully logged in.");
                let anchor_1 = document.getElementById('new_1');
                anchor_1.click();
            }
            else{
                let anchor = document.getElementById('new');
                anchor.click();
            }
        
        }
   
    });
    // createAccountForm.addEventListener("submit", e => 
    // {
        
    //     let anchor_2 = document.getElementById('generate');
    //     console.log(anchor_2);
    //         anchor_2.click();
    // });
    
    
    
    // document.addEventListener("DOMContentLoaded", () =>
    // {

    //     document.getElementById('products').addEventListener('click', e => 
    //     {

    //         e.preventDefault();
    //         let anchor_3 = document.getElementById('products');
    //         anchor_3.click();
    //     })

    // });

    

});





    // var input_group = document.getElementsByClassName("form__input-group");
    // for(var i = 0; i <input_group.length;i++)
    // {
    //     input_group[i].addEventListener('click', e =>
    //     {
    //         e.preventDefault();
    //         var value = this.getAttribute('data-value');
    //         console.log(value);
    //         if(value == "Raman" && value == "pass")
    //         {
    //             let anchor_1= document.getElementById('welcome_page');
    //             if(value == "Raman" && value == "pass")
    //             {
    //                 anchor_1.click();
    //             }
    //         }
    //     })
    // }