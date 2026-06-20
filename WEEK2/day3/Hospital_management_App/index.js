// fill in javascript code here
// let hosapp = []

let hosapp = JSON.parse(localStorage.getItem("data")) || [];
let addarr = JSON.parse(localStorage.getItem("add")) || [];
tabledetail(hosapp);
document.querySelector("form").addEventListener("submit", getfill);



function getfill(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const docid = document.querySelector("#docID").value;
    // console.log(name,docid);
    const spacelization = document.querySelector("#dept").value;
    const exp = document.querySelector("#exp").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mbl").value;
    // console.log(name,docid,dept,exp,email,mobile);

    const detailobj = { name, docid, spacelization, exp, email, mobile }
    // console.log(detailobj);
    // detailobj(hosapp);
    hosapp.push(detailobj);
    console.log(hosapp);


    localStorage.setItem("data", JSON.stringify(hosapp));
    tabledetail(hosapp);

}
function tabledetail(arr) {
    document.querySelector("tbody").innerText = ""
    arr.forEach(el => {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = el.name;

        const td2 = document.createElement("td");
        td2.innerText = el.docid;

        const td3 = document.createElement("td");
        td3.innerText = el.spacelization;

        const td4 = document.createElement("td");
        td4.innerText = el.exp;

        const td5 = document.createElement("td");
        td5.innerText = el.email;

        const td6 = document.createElement("td");
        td6.innerText = el.mobile;

        const td7 = document.createElement("td")
        // const role = document.createElement("role")
        let category = ""

        if (el.exp > 5) {
            category = "senior"

        } else if (el.exp > 2 && el.exp < 5) {
            category = "junior"

        } else {
            category = "trainee"
        }
        td7.innerText = category;
        // console.log(td7);

        const td8 = document.createElement("button");
        td8.innerText = "added";

        // td8.addEventListener("click", function () {
        //     addarr.splice(i, 1)
        //     localStorage.setItem("del", JSON.stringify(addarr));
        //     alert("deleted in the memory")
        // })

        // const td8 = document.createElement("button");
        // td8.innerText = "add";
        td8.addEventListener("click", function () {
            addarr.push(el);
            localStorage.setItem("add", JSON.stringify(addarr));
            Swal.fire({
                title: "Deleted sucessfully!",
                icon: "success",
                draggable: true
            });
        })



        row.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.querySelector("tbody").append(row)


    })


}




