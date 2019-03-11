var v = false;
function checkFN(c1)
{
		var regex = /[^a-z,A-Z,0-9, ,]/gi;
		c1.value = c1.value.replace(regex , "");
		var wrn = document.getElementById("wrn1");
		if( c1.value.length < 1 || c1.value == "" )
		{
			 wrn.innerHTML = "*Enter Full Name";
			 c1.style.borderColor= "red";
			 v = false;
		}
		else
		{
			wrn.innerHTML = "";
			c1.style.borderColor= "";
			v = true;
		}
}

function checkMAIL(c2)
{
	var wrn = document.getElementById("wrn2");
	var format1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(c2.value.match(format1)))
	{
		wrn.innerHTML = "*Enter Valid Email";
		c2.style.borderColor= "red";
		v = false;
	}
	else
	{
		wrn.innerHTML = "";
		c2.style.borderColor= "";
		v = true;
	}
}

function checkDOB(c3){
	var wrn = document.getElementById("wrn3");
	if( c3.value.length < 1 || c3.value == "" )
	{
		 wrn.innerHTML = "*Enter youe DOB";
		 c3.style.borderColor= "red";
		 v = false;
	}
	else
	{
		wrn.innerHTML = "";
		c3.style.borderColor= "";
		v = true;
	}

}

function checkAddress(c4)
{
		var regex = /[^a-z,A-Z,0-9, ,]/gi;
		c4.value = c4.value.replace(regex , "");
		var wrn = document.getElementById("wrn4");
		if( c4.value.length < 1 || c4.value == "" )
		{
			 wrn.innerHTML = "*Enter Address";
			 c4.style.borderColor= "red";
			 v = false;
		}
		else
		{
			wrn.innerHTML = "";
			c4.style.borderColor= "";
			v = true;
		}
}

function checkUN(c6)
{
		var regex = /[^a-z,A-Z,0-9]/gi;
		c6.value = c6.value.replace(regex , "");
		var wrn = document.getElementById("wrn6");
		if(c6.value == "")
		{
			wrn.innerHTML = "*Enter Username";
			c6.style.borderColor= "red";
			v = false;
		}
		else if( c6.value.length < 3)
		{
			 wrn.innerHTML = "*Use 3 characters or more";
			 c6.style.borderColor= "red";
			 v = false;
		}
		else
		{
			wrn.innerHTML = "";
			c6.style.borderColor= "";
			v = true;

		}
}

function checkPASS(c7)
{
	var wrn = document.getElementById("wrn7");
	if(c7.value.length < 4)
	{
		wrn.innerHTML = "*Atleast 4 Characters";
		c7.style.borderColor= "red";
		v = false;
	}
	else {
		{
			wrn.innerHTML = "";
			c7.style.borderColor= "";
			v = true;
		}
	}
}

function checkFile(c8)
{
		 var wrn = document.getElementById("wrn8");

    var fileName = c8.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext != "png" && ext != "PNG" && ext != "JPEG" && ext != "jpeg" && ext != "jpg" && ext != "JPG")
    {
        wrn.innerHTML = "*Select an Valid Image";
        c8.style.borderColor= "red";
        v = false;
    }
    else
    {
      wrn.innerHTML = "";
      c8.style.borderColor= "";
      v = true;
    }
}

function allOK()
{

	checkFN(document.regF.fname);
	checkMAIL(document.regF.email);
	checkAddress(document.regF.address);
	checkUN(document.regF.uname);
	checkPASS(document.regF.pass);
	checkFile(document.regF.imageFile);
	checkDOB(document.regF.dob);

	return v;

	}
