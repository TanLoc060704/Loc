
var giohang= localStorage.getItem("giohang")?JSON.parse(localStorage.getItem("giohang")) : [] ;
document.querySelector(".chototcart").innerText = giohang.length;

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


const dowloadCT =()=>{
  
    chitiet = localStorage.getItem('chitiet');
    chitiet = JSON.parse(chitiet);
    // let objSp = JSON.parse(localStorage.getItem('giohang'));
    document.querySelector("#anhcuatoi").src=chitiet.img;
    // console.log(img)
    // document.querySelector(".product_name").innerHTML=chitiet.name;
    // document.querySelector(".product_name").style.fontSize='30px';
    // document.querySelector(".product_price").innerHTML

    // var tam =`
    //     <div class="product_left">
    //         <div class="img_big">
    //             <img id="anhcuatoi" src="${chitiet.img}" alt="">
    //         </div>
    //         <div class="img_small">
    //             <img src="${chitiet.bosutap[0]}" alt="">
    //             <img src="image/ip2.webp" alt="">
    //             <img src="image/ip6.webp" alt="">
    //             <img src="image/ip4.webp" alt="">
    //         </div>
    //     </div>
    // `
    // document.querySelector(".product_left").innerHTML=tam;
     var  temp=`
     
                    <div class="product_name">
                            <p>${chitiet.name}</p>
                        </div>
                        <div class="product_price">
                            <p> <del> <sup>đ</sup>${VND.format(chitiet.price_giam)} </del> <sup>đ</sup>${VND.format(chitiet.price)} <small> <a href=""> 29%
                                        giảm</a></small> </p>
                        </div>
                        <div class="product_info">
                            <div class="info_left">
                                <p>0% TRẢ GÓP</p>
                                <p>Bảo Hiểm </p>
                                <p>Vận Chuyển </p>
                            </div>
                            <div class="info_right">
                                <p>12 tháng x ₫1.482.500 (Lãi suất 0%)</p>
                                <p>Bảo hiểm thiết bị di động nâng cao </p>
                                <span>Xử lý đơn hàng bởi Shopee </span>
                                <span>Miễn phí vận chuyển</span>
                                <span style="display: inline;"><i class="fa-sharp fa-solid fa-truck"> </i>Vận Chuyển
                                    Tới</span>
                            </div>
                        </div>
                        <div class="product_color">
                            <p><span>Màu Sắc:</span></p>
                            <div class="color">
                                <span> <a  href="">Black</a> </span>
                                <span> <a  href="">Red</a> </span>
                                <span> <a  href="">Pink</a> </span>
                                <span> <a  href="">While</a> </span>
                                <span> <a  href="">Gold</a> </span>
                            </div>
                        </div>
                        <div class="product_quantity">
                            <p>Số Lượng:</p>
                            <div class="upanddown">
                                <input style="border-radius: 4px 0 0 4px;" class="upanddown_left" type="button"
                                    value="-"><input class="input-qty" type="text" placeholder="1"><input
                                    style="border-radius: 0 4px  4px 0;" class="upanddown_left" type="button" value="+">
                            </div>
                        </div>
                        <div class="product_button">
                            <button onclick="addtocart()" class="button_left"> 
                                    <i class="fa-solid fa-cart-plus"></i></i> <a >Thêm Vào Giỏ Hàng</a>
                            </button> 
                                    
                            </div>
                            
                           
                        `
    document.querySelector(".product_right").innerHTML=temp;
  
    var tam="";
    chitiet.bosuutap.forEach(element => {
        tam+=`
            <img src="${element}" alt="">
        `
    });
    document.querySelector(".img_small").innerHTML=tam;
}
dowloadCT();
{/* <button class="button_right"><a href="giohang.html">Mua Ngay</a></button> */}
const addtocart = ()=>{
    let themvaogiohang ={
        ...chitiet,
        quantity:1
    };
    giohang.push(themvaogiohang);
    document.querySelector(".chototcart").innerText = giohang.length;
    localStorage.setItem("giohang",JSON.stringify(giohang));
}