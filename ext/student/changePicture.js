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
	checkFile(document.editPicture.imageFile);

	return v;

	}