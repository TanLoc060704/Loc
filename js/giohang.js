var giohang;



const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

    const reloads = () => {

        giohang = localStorage.getItem('giohang');
        giohang = JSON.parse(giohang);
        document.querySelector(".chototcart").innerText = giohang.length;
        let giohangTbl = document.querySelector(" .main")
        let rowHtml = '';

        console.log(giohang)

        giohang.forEach((item, index) => {
            rowHtml += `       
 
        <div class="form3">
            <div class="two">
                <div class="two_all">
                    <div class="tow_top">
                        <button>Combo khuyến mãi</button>
                        <p>Mua 3 sản phẩm giảm 2%, giảm đến 5%</p>
                    </div>
                    <table style="width:100%;" border="0">

                        <tr style="width:100%;" class="tr">
                            <th class="img"><img style="width:100%; height: 90px; object-fit: contain;"
                                src="${item.img}" alt="">
                                
                                </th>
                                
                                <th class="info">
                                    <div class="product_name">
                                    <p>${item.name}</p>
                                    </div>
                                    <div>⭐⭐⭐⭐⭐</div>
                                    <div class="product_color">
                                        <p><span>Màu Sắc:</span></p>
                                        <div class="color">
                                        <span> <a href="">Black</a> </span>
                                        <span> <a href="">Red</a> </span>
                                        <span> <a href="">Pink</a> </span>
                                        <span> <a href="">While</a> </span>
                                        <span> <a href="">Gold</a> </span>
                                        </div>
                                        </div>
                                        
                                        
                                        </th>
                                        
                                        <th class="price">
                                            <div class="product_price">
                                                <p> ${VND.format(Number(item.price) * Number(item.quantity))} </p>
                                                </div>
                                                </th>
                                                
                                                <th class="quantity">
                                                    <div class="product_quantity">
                                                        <p>Số Lượng:</p>
                                                    <div class="upanddown">
                                                            <input style="border-radius: 4px 0 0 4px;" class="upanddown_left"
                                                            type="button" value="-" onclick ="giam(${index})"><input class="input-qty" type="text"
                                                            placeholder="${item.quantity}"><input style="border-radius: 0 4px  4px 0;"
                                                            class="upanddown_left" type="button" value="+" onclick="tang(${index})">
                                                            
                                                    </div>
                                                 </th>
                            
                            <th class="delete">
                                <button onclick="xoaGioHang(${index})" >  <i class="fa-solid fa-trash-can"></i> </button>
                            </th>
                            
                            </tr>
                            </table>
                            </div>
                            </div>
                            </div>
                            `
                            
                        });
                        
                        giohangTbl.innerHTML = rowHtml;
                    }
                    reloads();

                    const xoaGioHang = (index) => {
                
                        giohang.splice(index, 1);
                        localStorage.setItem("giohang", JSON.stringify(giohang));
                        tinhtien();
                        reloads();
                    }

                    const tang =(index)=>{
                        giohang[index].quantity++;
                        localStorage.setItem("giohang", JSON.stringify(giohang));
                        tinhtien();
                        reloads();
                        
                    }
                    const giam =(index)=>{
                        if(giohang[index].quantity>1){
                            giohang[index].quantity--;
                            localStorage.setItem("giohang", JSON.stringify(giohang));
                            tinhtien();
                            reloads();
                        
                        }
                       
                    }
                    const tinhtien=()=>{
                        total = 0;
                        giohang.forEach (item =>{
                            total+=item.quantity * item.price;
                            
                        })
                        document.querySelector("#tongtien").innerText=VND.format(total);
                        return total;
                    }
                    tinhtien();