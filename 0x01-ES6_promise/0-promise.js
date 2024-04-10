
function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
	  resolve('True');
	})
	  .then(res => {
		console.log(res);
	  });
  }
