var arr =[
    "hearder1.png",
    "hearder2.jpg",
    "hearder5.png",
    "hearder6.png",
    "hearder7.png",
];

var index = 0;
function tiep(){
    index++;
    if(index == arr.length){
        index = 0;
    }
    var hinh = document.querySelector("#myimg");
    hinh.setAttribute('src',`image/${arr[index]}`);

}
function quaylai(){
    index--;
    if( index <0){
        index = arr.length-1    ;
    }
    var hinh = document.querySelector("#myimg");
    hinh.setAttribute('src',`image/${arr[index]}`);
}

var tudong ;
// tudong = setInterval(
//     tiep,1000
// )
start();

function start(){
    tudong =  setInterval(
        tiep,2000
    )
}

function stop(){
    clearInterval(tudong);
}

// slide show

const arrsanpham = [
    {   
        bosuutap:[
            'image/ip1.webp',
            'image/ip1.webp',
            'image/ip1.webp',
            'image/ip1.webp'
        ],
        price_giam:'26000000',
        id:'1',
        img:'image/ip1.webp',
        brand:'iphone',
        name:'iphone 14 258GB',
        price:'24990000'
    },
    {
        bosuutap:[
            'image/ip2.webp',
            'image/ip2.webp',
            'image/ip2.webp',
            'image/ip2.webp'
        ],
        price_giam:'24000000',
        id:'2',
        img:'image/ip2.webp',
        brand:'iphone',
        name:'iphone 14 158GB',
        price:'22990000'
    },
    {
        bosuutap:[
            'image/ip5.webp',
            'image/ip5.webp',
            'image/ip5.webp',
            'image/ip5.webp'
        ],
        price_giam:'26000000',
        id:'3',
        img:'image/ip5.webp',
        brand:'iphone',
        name:'iphone 14 258GB',
        price:'24990000'
    },
    {
        bosuutap:[
            'image/ip4.webp',
            'image/ip4.webp',
            'image/ip4.webp',
            'image/ip4.webp'
        ],
        price_giam:'32000000',
        id:'4',
        img:'image/ip4.webp',
        brand:'iphone',
        name:'iphone 14 512GB',
        price:'29990000'
    },
    {
        id:'5',
        bosuutap:[
            'image/ip4.webp',
            'image/ip4.webp',
            'image/ip4.webp',
            'image/ip4.webp'
        ],
        price_giam:'37000000',
        img:'image/ip4.webp',
        brand:'iphone',
        name:'iphone 14 1T',
        price:'32990000'
    },
    {
        bosuutap:[
            'image/ip5.webp',
            'image/ip5.webp',
            'image/ip5.webp',
            'image/ip5.webp'
        ],
        price_giam:'23000000',
        id:'6',
        img:'image/ip5.webp',
        brand:'iphone',
        name:'iphone 13 128GB',
        price:'21590000'
    },
    {
        bosuutap:[
            'image/ip6.webp',
            'image/ip6.webp',
            'image/ip6.webp',
            'image/ip6.webp'
        ],
        price_giam:'24000000',
        id:'7',
        img:'image/ip6.webp',
        brand:'iphone',
        name:'iphone 13 258GB',
        price:'22990000'
    },
    {
        bosuutap:[
            'image/ip1.webp',
            'image/ip1.webp',
            'image/ip1.webp',
            'image/ip1.webp'
        ],
        price_giam:'21000000',
        id:'8',
        img:'image/ip1.webp',
        brand:'iphone',
        name:'iphone 12 158GB',
        price:'18990000'
    },

]

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

let temp =" ";
let product = document.querySelector(".products")

arrsanpham.forEach((el,index)=>{

    temp+=`
    <li>
        <div class="product-item">
            <div class="product-top">
                <a onclick="showDetail(${index})" href="thongtinsanpham.html" class="product-thumb">
                    <img src="${el.img}" alt="">
                </a>
                <a  href="giohang.html" onclick="addcart(${index})" class="buy-now">Mua Ngay</a>
            </div>

            <div class="product-info">
                <a href="" class="product-cat">${el.brand}</a>
                <a href="" class="product-name">${el.name}</a>
                <div class="product-price">${VND.format(el.price)}</div>
            </div>
        </div>
    </li>
    
    `
})
product.innerHTML += temp;

//dem so lan
let soLuong = 0;
var giohang= localStorage.getItem("giohang")?JSON.parse(localStorage.getItem("giohang")) : [] ;
document.querySelector(".chototcart").innerText = giohang.length;

const showDetail = (index) =>{
    arrsanpham.forEach((item,index2)=>{
        if(index == index2){
            localStorage.setItem("chitiet",JSON.stringify(item)); 
        }

    })
}

const addcart =(index)=>{
    
    //bien luu tru cuc bo
    //dac diem chi luu duoc text
    //bam them thi luu vao  localstrorage
    
    let sanphamcanmua = {
        ...arrsanpham[index],
        quantity :1
    };
    // console.log(sanphamcanmua);
    var chuaMua = true;
    for(var item of giohang){
        if(item.id == sanphamcanmua.id){
            item.quantity++;
            chuaMua = false;
            break;
        }
    }
    if(chuaMua ==true){
        giohang.push(sanphamcanmua);
    }
    document.querySelector(".chototcart").innerText = giohang.length;
    localStorage.setItem("giohang",JSON.stringify(giohang));
}


