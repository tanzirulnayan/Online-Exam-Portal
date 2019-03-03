var v = false;
function checkBox(c1)
{
		var regex = /[^a-z,A-Z,0-9, ,]/gi;
		c1.value = c1.value.replace(regex , "");
		var wrn = document.getElementById("wrn1");
		if( c1.value.length < 1 || c1.value == "" )
		{
			 wrn.innerHTML = "*Type complaints to send";
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

function allOK()
{

	checkBox(document.studentSupport.supportText);

	return v;

	}