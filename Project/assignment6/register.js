window.onload = pageLoad;

function pageLoad(){
    document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    
    var firstName = form["firstname"].value;
    var lastName = form["lastname"].value;
    var gender = form["gender"].value;
    var bDay = form["brithday"].value;
    var email = form["email"].value;
    var userName = form["username"].value;
    var password = form["password"][0].value;
    var rePassword = form["password"][1].value;

    if (password !== rePassword) {
        document.getElementById("errormsg").innerHTML = "*** รหัสผ่านอาจจะยังน้าาา ***";
        return false;
    }

    if (!firstName) {
        document.getElementById("errormsg").innerHTML = "*** ใส่ชื่ออาจจะยังน้าาา ***";
        return false;
    } 
    else if (!lastName) {
        document.getElementById("errormsg").innerHTML = "*** ใส่นามสกุลอาจจะยังน้าาา ***";
        return false;
    }
    else if (!gender) {
        document.getElementById("errormsg").innerHTML = "*** กรอกเพศอาจจะยังน้าาา ***";
        return false;
    }
    else if (!bDay) {
        document.getElementById("errormsg").innerHTML = "*** กรอกวันเกิดอาจจะยังน้าาา ***";
        return false;
    }
    else if (!email) {
        document.getElementById("errormsg").innerHTML = "*** กรอกเมลอาจจะยังน้าาา ***";
        return false;
    }
    else if (!userName) {
        document.getElementById("errormsg").innerHTML = "*** กรอกชื่อUserอาจจะยังน้าาาบ ***";
        return false;
    }
    else if (!password) {
        document.getElementById("errormsg").innerHTML = "*** กรอกรหัสอาจจะยังน้าาา ***";
        return false;
    }

    return true;
}