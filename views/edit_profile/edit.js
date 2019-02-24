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

function checkUN(c2)
{
		var regex = /[^a-z,A-Z,0-9]/gi;
		c2.value = c2.value.replace(regex , "");
		var wrn = document.getElementById("wrn2");
		if(c2.value == "")
		{
			wrn.innerHTML = "*Enter Username";
			c2.style.borderColor= "red";
			v = false;
		}
		else if( c2.value.length < 3)
		{
			 wrn.innerHTML = "*Use 3 characters or more";
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
function checkDOB(c3)
{
	var wrn = document.getElementById("wrn3");
	if(c3.value == "day")
	{
		wrn.innerHTML = "*Enter Date of Birth Correctly";
		c3.style.borderColor= "red";
		v = false;
	}
	else if(c3.value == "month")
	{
		wrn.innerHTML = "*Enter Date of Birth Correctly";
		c3.style.borderColor= "red";
		v = false;
	}
	else if(c3.value == "year")
	{
		wrn.innerHTML = "*Enter Date of Birth Correctly";
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
function checkGENDER()
{
	var wrn = document.getElementById("wrn4");
	var gen = document.getElementsByName("gender");
	var ischecked = false;
	for ( var i = 0; i < gen.length; i++)
	{
    if(gen[i].checked)
		{
        ischecked = true;
				wrn.innerHTML = "";
        v = true;
        break;
    }
	}
if(!ischecked)   {
    wrn.innerHTML = "*Select Your Gender";
    v = false ;
}
}

function checkMAIL(c6)
{
	var wrn = document.getElementById("wrn6");
	var format1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(c6.value.match(format1)))
	{
		wrn.innerHTML = "*Enter Valid Email";
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
function checkPHONE(c7)
{
	var wrn = document.getElementById("wrn7");
	var format2 = /^[0-9]+$/gi;
	if( c7.value == "")
	{
		 wrn.innerHTML = "*Enter Phone Number";
		 c7.style.borderColor= "red";
		 v = false;
	}
	else if(!(c7.value.match(format2)))
	 {
		 wrn.innerHTML = "*Number should contains only digit";
		 c7.style.borderColor= "red";
		 v = false;
	 }
	 else if (c7.value.length < 11)
	 {
		 wrn.innerHTML = "*Number should be 11 digits";
		 c7.style.borderColor= "red";
		 v = false;
	 }
	else
	{
		wrn.innerHTML = "";
		c7.style.borderColor= "";
		v = true;
	}
}
function checkPASS(c8)
{
	var wrn = document.getElementById("wrn8");
	if(c8.value.length < 4)
	{
		wrn.innerHTML = "*Atleast 4 Characters";
		c8.style.borderColor= "red";
		v = false;
	}
	else {
		{
			wrn.innerHTML = "";
			c8.style.borderColor= "";
			v = true;
		}
	}
}

function checkCPASS(c9)
{
	var wrn = document.getElementById("wrn9");
	var c8 = document.editForm.pass.value;
	if(c9.value.length < 4)
	{
		wrn.innerHTML = "*Atleast 4 Characters";
		c9.style.borderColor= "red";
		v = false;

	}
	else if(c9.value != c8)
	{
		wrn.innerHTML = "*Password Do Not Match";
		c9.style.borderColor= "red";
		v = false;

	}
	else {
		{
			wrn.innerHTML = "";
			c9.style.borderColor= "";
			v = true;

		}
	}
}

function checkupFile(c10)
{
		 var wrn = document.getElementById("wrn10");

    var fileName = c10.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext != "png" && ext != "PNG" && ext != "JPEG" && ext != "jpeg" && ext != "jpg" && ext != "JPG")
    {
        wrn.innerHTML = "*Select an Valid Image";
        c10.style.borderColor= "red";
        v = false;
    }
    else
    {
      wrn.innerHTML = "";
      c10.style.borderColor= "";
      v = true;
    }
}


function allOK()
{

	checkFN(document.regF.fname);
	checkUN(document.regF.uname);
	checkDOB(document.regF.day);
	checkDOB(document.regF.month);
	checkDOB(document.regF.year);
	checkGENDER();
	checkMAIL(document.regF.mail);
	checkPHONE(document.regF.phone);
	checkPASS(document.regF.pass);
	checkCPASS(document.regF.cpass);

	return v;

	}
