var v = false;

function oldPass(c1)
{
	var wrn = document.getElementById("wrn1");
	if(c1.value.length == 0)
	{
		wrn.innerHTML = "*Type old password";
		c1.style.borderColor= "red";
		v = false;
	}
	else {
		{
			wrn.innerHTML = "";
			c1.style.borderColor= "";
			v = true;
		}
	}
}

function newPass(c2)
{
	var wrn = document.getElementById("wrn2");
	if(c2.value.length < 4)
	{
		wrn.innerHTML = "*Atleast 4 Characters";
		c2.style.borderColor= "red";
		v = false;
	}
	else {
		{
			wrn.innerHTML = "";
			c2.style.borderColor= "";
			v = true;
		}
	}
}

function newCpass(c3)
{
	var wrn = document.getElementById("wrn3");
	var c2 = document.CPASS.newPassword.value;
	if(c3.value.length < 4)
	{
		wrn.innerHTML = "*Atleast 4 Characters";
		c3.style.borderColor= "red";
		v = false;

	}
	else if(c3.value != c2)
	{
		wrn.innerHTML = "*Password Do Not Match";
		c3.style.borderColor= "red";
		v = false;

	}
	else {
		{
			wrn.innerHTML = "";
			c3.style.borderColor= "";
			v = true;

		}
	}
}


function allOK()
{
	oldPass(document.CPASS.oldPassword);
	newPass(document.CPASS.newPassword);
	newCpass(document.CPASS.conPassword);

	return v;

	}
