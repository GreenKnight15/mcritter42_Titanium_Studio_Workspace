function transform(model){
	var carObject = model.toJSON();
	var output =
	{
		"title" : carObject.model + "by" + carObject.make,
		"id" :model.cid
	};
}

function filter(collection) 
{
  return collection.where(
  	{
  		make: "Honda"
  	}
  );
}

$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});
