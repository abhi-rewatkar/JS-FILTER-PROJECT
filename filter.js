
let products = [

    {
        id: 1,
        name: "Maggie Noddles",
        price: 10,
        category: "food",
        quantity: 150,
        pic: "https://w7.pngwing.com/pngs/787/1007/png-transparent-instant-noodle-indian-cuisine-maggi-noodles-masala-chai-food-recipe-cooking.png"
    },

    {
        id: 2,
        name: "Coca cola",
        price: 40,
        category: "drink",
        quantity: 170,
        pic: "https://www.freeiconspng.com/thumbs/coca-cola-png/bottle-coca-cola-png-transparent-2.png"
    },
    {
        id: 3,
        name: "Amul cheese",
        price: 70,
        category: "dairy",
        quantity: 10,
        pic: "https://w7.pngwing.com/pngs/215/336/png-transparent-milk-goat-cheese-edam-processed-cheese-amul-milk-cheese-recipe-herbal.png"
    },
    {
        id: 4,
        name: "Amul milk",
        price: 50,
        category: "dairy",
        quantity: 200,
        pic: "https://5.imimg.com/data5/PK/LF/ZO/SELLER-102118220/48808eaf41eac3813d33ad57996f0ca8-milk-bag-buttermilk-amul-toned-milk-png-clipart-amul-bag-728-550-500x500.jpeg"
    },
    {
        id: 5,
        name: "Mountain Dew",
        price: 20,
        category: "drink",
        quantity: 123,
        pic: "https://w7.pngwing.com/pngs/649/376/png-transparent-fizzy-drinks-juice-pepsi-fanta-mountain-dew-mountain-dew-food-plastic-bottle-7-up.png"
    }

]

function displayData(arr) {
    document.getElementById("data").innerHTML="";

    arr.forEach((product, index) => {
        let row = document.createElement("tr");

        let numTD = document.createElement("td");
        numTD.append(index + 1);

        let nameTD = document.createElement("td");
        nameTD.append(product.name);

        let priceTD = document.createElement("td");
        priceTD.append(product.price);

        let categoryTD = document.createElement("td");
        categoryTD.append(product.category);

        let quatntityTD = document.createElement("td");
        quatntityTD.append(product.quantity);

        let picTD = document.createElement("td");
        let proPicTD = document.createElement("img");
        proPicTD.setAttribute("src", product.pic);
        picTD.appendChild(proPicTD);

        row.appendChild(numTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quatntityTD);
        row.appendChild(picTD);

        document.getElementById("data").appendChild(row);
    })
}

displayData(products);

let filterStatus = false;
function openSlide(){

    if(filterStatus===false){
        document.getElementById('slide').style.marginLeft="-16%";
        filterStatus=true;
    }
    else{
        document.getElementById('slide').style.marginLeft="-50%";
        filterStatus=false;
    }
}

let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null,
}

function setfilters(property,value){

    if(value!==""){
        filters[property]=value;

        if(property==="minPrice"){
            document.getElementById("maxPrice").value=Number(value)+1;
            document.getElementById("showMaxPrice").innerText=Number(value)+1;
            
        }

        // filters();
    }
    else{
        filters[property]=null; 
    }
    console.log(filters);
}

function filter(){
    let filtredData=[] = products;

     if(filters.category!==null){
        filtredData=filtredData.filter((product,index)=>{
            return product.category.toUpperCase()===filters.category.toUpperCase();
        })
        displayData(filtredData);
     }  
    //  console.log(filtredData)
    //  displayData(filtredData);


     if(products.quantity!==""){
        filtredData=filtredData.filter((product,index)=>{
            return filters.quantity<=Number(product.quantity);
        })
        displayData(filtredData);
     }


     if(products.minPrice!==""){
        filtredData=filtredData.filter((product,index)=>{
            return Number(filters.minPrice)<=product.price;
        })
        displayData(filtredData);
     }

     if(filters.maxPrice!==null){
        filtredData=filtredData.filter((product,index)=>{
            return product.price<filters.maxPrice;
        })
        displayData(filtredData);
    }
     console.log(filtredData);
     displayData(filtredData);
}
