// fill in javascript code here

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
    console.log(detailobj);

    tabledetail(detailobj);

    function tabledetail(detailobj) {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = detailobj.name;

        const td2 = document.createElement("td");
        td2.innerText = detailobj.docid;

        const td3 = document.createElement("td");
        td3.innerText = detailobj.spacelization;

        const td4 = document.createElement("td");
        td4.innerText = detailobj.exp;

        const td5 = document.createElement("td");
        td5.innerText = detailobj.email;

        const td6 = document.createElement("td");
        td6.innerText = detailobj.mobile;

        const td7 = document.createElement("td")
        const role=document.createElement("role")
        if (exp > 5) {
            console.log("senior");

        } else if (exp > 2 && exp < 5) {
            console.log("junior");

        } else {
            console.log("trainee");
        }
        td7.innerText =detailobj.role
        // console.log(td7);
        

            row.append(td1, td2, td3, td4, td5, td6, td7);
        document.querySelector("tbody").append(row)


    }




}


