

// For submit button in Characteristic Screen
function conf()
{
	alert("The Details have been submitted");

}

// function conf()
// {
// 	var con=confirm("Do you want to submit for sure?");
// }

// For selecting colour in the configuration screen
var i = 0;
function colourchange1()
{
	i++;
	if(i>6){
		return;
	}
	var a = document.getElementById('colour1');
	if(i%2==0){
		document.getElementById('value-label-' + i/2).value = a.options[a.selectedIndex].value;
		document.getElementById(a.options[a.selectedIndex].value).remove();
	}

}

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://supreethsudhakaranmenon.github.io/details.json');
// ourRequest.onload = function() {
// 	 //console.log(ourRequest.responseText);
// };
// ourRequest.send();
// var test = JSON.stringify(ourRequest.responseText);



// function load()
// {
// 	var mydata = JSON.parse(data);
//     alert(mydata.length);
// }




// Used for getting the user details from details page.
function goTo(url)
{
	// conso
	// When using on click comment out url line
	url = 'localhost:8233/c_feature/'+url;
	console.log(url);
	// window.location.assign(''+url);
    window.open(url);
    // window.location.reload();

};
function goTocon(url)
{
	// conso
	// When using on click comment out url line
	url = 'localhost:8233/configuration/'+url;
	console.log(url);
	// window.location.assign(''+url);
	window.open(url);
	// window.location.reload();

};

// Used from /app/scripts/filters/SearchFilter.js

// (function (module) {
// 	mifosX.filters = _.extend(module, {
// 		SearchFilter: function () {
// 			return function (list, searchText) {
// 				var searchRegx = new RegExp(searchText, "i");
// 				if (searchText == undefined) {
// 					return list;
// 				}
// 				var result = [];
// 				for (i = 0; i < list.length; i++) {
// 					if (list[i].name.search(searchRegx) != -1 ||
// 						list[i].glCode.toString().search(searchRegx) != -1 || list[i].type.value.search(searchRegx) != -1 ) {
// 						result.push(list[i]);
// 					}
// 				}
// 				return result;
// 			}
// 		}
// 	});
// 	mifosX.ng.application.filter('SearchFilter', [mifosX.filters.SearchFilter]).run(function ($log) {
// 		$log.info("SearchFilter filter initialized");
// 	});
// }(mifosX.filters || {}));



