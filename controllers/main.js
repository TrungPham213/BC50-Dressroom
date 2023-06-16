let selE = document.querySelectorAll('.nav-link');

let testItems = new ListChosen ();

//Hàm lọc ra giá trị đã chọn
const changeTab = () => {
    selE.forEach((select) => {
        select.onclick = (i) => {
            selE.forEach((item) => {
                item.classList.remove('active')
            })
            i.target.classList.add('active')
            let category = i.target.dataset.category;
            let type = i.target.dataset.type;
            let length = Number(i.target.dataset.length);
            renderListItem(category,type,length)
        }
    })
}
//render sản phẩm theo tên
const renderListItem = (category,type,length) => {
    let htmls = '';
    for(let i = 1;i <= length ; i++) {
            htmls += `
            <div class="col-3">
                <div class="item px-4 py-4">
                    <div class="item-img">
                        <img
                        src="./../assets/images/${category}/${type}${i}_show.jpg"
                        class="img-fluid img-${i}"
                        alt=""
                        />
                    </div>
                <div class="item-detail text-center py-3">
                <h6 class="name-${i}">${type} ${i}</h6>
                <button class="w-100" onclick ="changeOutfit(${i},'${category}','${type}')">Thử đồ</button>
                </div>
                </div>
            </div>
            `
        }
    document.querySelector('.tab-content').innerHTML = htmls;
}

window.addEventListener("DOMContentLoaded", function () {
    renderListItem("clothes","topcloth",6);
    changeTab();
})

//bấm nút để lấy sản phẩm trong giỏ và mặc cho người
const changeOutfit = (i,category,type) => {
    const name = document.querySelector(`.name-${i}`).textContent;
    if(type != 'background') {
        const img = `./../assets/images/${category}/${type}${i}.png`;
        let choseItem = new ChoseItem (name,img,type);
        testItems.addNewItem(choseItem);
        testItems.renderOutfit();
        console.log(testItems.list);
    }
    else {
        const img = `./../assets/images/${category}/${type}${i}.jpg`;
        let choseItem = new ChoseItem (name,img,type);
        testItems.addNewItem(choseItem);
        testItems.renderOutfit();
        console.log(testItems.list);
    }
    
} 
