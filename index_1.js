
var productname;

var productdescription;

var productprice;

var productquantity;

// var ans = [];




var addproduct = document.getElementById("add_product");

var result = localStorage.getItem("product");

result = JSON.parse(result);

ans = result || [];

//console.log(ans);

var product_data;





addproduct.addEventListener("click", function(e)
{
  e.preventDefault();
   
      productname = document.getElementById("productname").value;

      productdescription = document.getElementById("productdesc").value;

      productprice = document.getElementById("productprice").value;

      productquantity = document.getElementById("productquantity").value;

  
      
      //console.log('add product clicked');

      product_data = {
        productname : document.getElementById("productname").value,
        productdescription : document.getElementById("productdesc").value,
        productprice : document.getElementById("productprice").value,
        productquantity : document.getElementById("productquantity").value
      }
      
     //console.log(product_data);

      
      
      
         localStorage.setItem("product", JSON.stringify(product_data));

        //ans.push(product_data);

        //localStorage.setItem("product", JSON.stringify(ans));


 

})

    
 





// Update Item

var product_name;
var product_description;
var product_price;
var product_quantity;


var updatebutton = document.getElementsByClassName("button_dimensions");


for(let i=0;i<updatebutton.length;i++){
  updatebutton[i].addEventListener('click',function(e){
    e.preventDefault();

    console.log(e.target);

    //console.log('update clicked');

    const form = e.target.parentNode;
    


    product_name = form['prodname'].value;

    product_description = form['proddesc'].value;

    product_price = form['price_selected'].value;

    product_quantity = form['prodquantity'].value;


    
    //  product_name = document.getElementById("prod_name").value;

    //  product_description = document.getElementById("prod_desc").value;

    //  product_price = document.getElementById("prod_price").value;

    //  product_quantity = document.getElementById("prod_quantity").value;

    //  console.log(product_name);
    //  console.log(product_description);
    //  console.log(product_price);
    //  console.log(product_quantity);

     product_data = {

      productname : product_name,
      productdescription : product_description,
      productprice : product_price,
      productquantity : product_quantity

       
     
     }

     // console.log(product_data);

     localStorage.setItem("product", JSON.stringify(product_data));

    //  ans.push(product_data);

    //  localStorage.setItem("product", JSON.stringify(ans));

    //  var result_1 = localStorage.getItem("product_data");

    //   result_1 = JSON.parse(result_1);

    //   console.log(result_1);

  })
}




    



// Remove Item


var removebutton = document.querySelector(".button_dimensions_1");



  removebutton.addEventListener("click", function(e)
  {
        e.preventDefault();

        //console.log('remove clicked');

        window.localStorage.clear();
        

  })

























  

        // const form = e.target.parentNode;
      
        // product_name = form['prodname'].value;

        // product_description = form['proddesc'].value;

        // product_price = form['price_selected'].value;

        // product_quantity = form['prodquantity'].value;

        // product_data = {

        // productname : product_name,
        // productdescription : product_description,
        // productprice : product_price,
        // productquantity : product_quantity

        // }

        













// updatebutton.forEach(function(btn,index){
//   btn.addEventListener('click',function(e){
//     e.preventDefault();

//     console.log('update clicked')

//      product_name = document.getElementById("prod_name").value;

//      product_description = document.getElementById("prod_desc").value;

//      product_price = document.getElementById("prod_price").value;

//      product_quantity = document.getElementById("prod_quantity").value;

//      console.log(product_name);
//      console.log(product_description);
//      console.log(product_price);
//      console.log(product_quantity);

//      product_data = {

//        product_name : document.getElementById("prod_name").value,
//        product_description : document.getElementById("prod_desc").value,
//        product_price : document.getElementById("prod_price").value,
//        product_quantity : document.getElementById("prod_quantity").value

       
     
//      }

//      ans.push(product_data);

//      localStorage.setItem("product", JSON.stringify(ans));
//   })

// })
    // updatebutton.addEventListener("click", function(e)
    // {

    //  e.preventDefault();

    //  console.log('update clicked')

    //   product_name = document.getElementById("prod_name").value;

    //   product_description = document.getElementById("prod_desc").value;

    //   product_price = document.getElementById("prod_price").value;

    //   product_quantity = document.getElementById("prod_quantity").value;

    //   console.log(product_name);
    //   console.log(product_description);
    //   console.log(product_price);
    //   console.log(product_quantity);

    //   product_data = {

    //     product_name : document.getElementById("prod_name").value,
    //     product_description : document.getElementById("prod_desc").value,
    //     product_price : document.getElementById("prod_price").value,
    //     product_quantity : document.getElementById("prod_quantity").value

        
      
    //   }

    //   ans.push(product_data);

    //   localStorage.setItem("product", JSON.stringify(ans));
      // localStorage.setItem("product", JSON.stringify(product_data));

      // ans.forEach(function(data, index)
      // {

      //   var output = document.createElement("new");


      //   output.innerHTMl = data;



      // }

      // console.log(product_data);
    
      // localStorage.setItem("product", JSON.stringify(product_data));

      // var result_1 = localStorage.getItem("product");

      // result_1 = JSON.parse(result_1);

      // console.log(result_1);

    //})
  
 
   

   
  

    































    // Update Item 

// var product_name = document.getElementById("productname");




// console.log(product_name);





// product_description.innerText = "Every piece of winter gear is designed to provide good insulation";


// var product_price = document.getElementById("productprice").value;

// product_price.innerText = "1000"

// console.log(product_price.value);

//var product_quantity = document.getElementById("productquantity").value;

// product_quantity.innerText = 7;

//console.log(product_quantity);
