window.addEventListener('DOMContentLoaded', (event) =>{
    getCount();
});

const getCount = () => {
    let count = 30;
    fetch('https://v53zxph81c.execute-api.us-east-1.amazonaws.com/Initial/ResumeSiteCounter').then(response => {
        return response.json();
    }).then(response => {
        console.log("API Called");
        count = response.Item.count;
        console.log(response)
        console.log(count)
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
