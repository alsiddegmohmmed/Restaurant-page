
//restuarant.js 


const createRestaurantHomePage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    //Creat and appen healine element 
    const headline = document.createElement('img')
    image.src= 'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg'
    image.height = '300'
    pageContent.appendChild(image); 

    //Create and append copy element 
    const copy = document.createElement('p'); 
    copy.textContent = 'We seve the best food in town. '; 
    pageContent.appendChild(copy); 
    content.appendChild(pageContent)


} 

export default createRestaurantHomePage ; 