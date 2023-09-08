
        
        //to display existing items
        document.addEventListener("DOMContentLoaded",async ()=>{
            try{
                let res = await axios.get("http://localhost:3000/product/get-products");
                console.log(res.data);
                for(let i=0;i<res.data.productList.length;i++){
                    showOnScreen(res.data.productList[i]);

                }
            }catch(err){
                console.log(err);
            }
        })

        //show Data on screen
        function showOnScreen(obj){
            console.log(obj)
            if(obj.Category=="food"){
                let list = document.getElementById("foodList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj.id}> Name: ${obj.ProductName} ----- Price: ${obj.Price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
            }else if(obj.Category=="skincare"){
                let list = document.getElementById("skincareList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj.id}> Name: ${obj.ProductName} ----- Price: ${obj.Price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
            }
            else{
                let list = document.getElementById("elecronicsList");
                list.innerHTML= list.innerHTML + 
                    `<li id=${obj.id}> Name: ${obj.ProductName} ----- Price: ${obj.Price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
            }
        }

        //After submit button
        async function onsubmit1(event){
            event.preventDefault();
            try{
                let myobj = {
                    price: event.target.nprice.value,
                    pname: event.target.npname.value,
                    cat: event.target.ncat.value
                }
                 console.log(myobj)
                let op = await axios.post("http://localhost:3000/product/add-product",myobj);
                showOnScreen(op.data.newProduct);

                event.target.nprice.value="";
                event.target.npname.value="";
                event.target.ncat.selectedIndex = 0;
            }catch(err){
                console.log(err);
            }
            
        }

        //Delete funcion
        async function deleteFun(objid){
            try{
                //console.log("inside ");
                let del = await axios.delete(`http://localhost:3000/product/delete-product/${objid}`);
                
                let todel = document.getElementById(objid);
                todel.remove();
            }catch(err){
                console.log(err);
            }
        }
